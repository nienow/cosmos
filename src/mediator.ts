import {Editor, RANDOMBITS_DOMAIN, RandomBitsMeta} from './definitions';
import {ThemeManager} from './theme-manager';
import {PLAIN_EDITOR} from './built-in-editors';
import {useTitle} from './hooks/useTitle';
import {useLocked} from './hooks/useLocked';
import {swapArrayIndexes} from './utils';

class FrameMediator {
  private registrationEvent;
  private parentOrigin: string;
  private children: ChildMediator[] = [];
  private sessionKey;
  private item;
  private meta: RandomBitsMeta;
  private editorCallbackFn: (meta: RandomBitsMeta) => void;
  private themeManager = new ThemeManager();

  constructor() {
    window.addEventListener('message', this.handleMessage.bind(this));
    useTitle.subscribe(({showTitle}) => {
      let needsSave = false;
      if (this.meta.showTitle !== showTitle) {
        this.meta.showTitle = showTitle;
        needsSave = true;
      }
      // if (this.meta.titles !== titles) {
      //   this.meta.titles = titles;
      //   needsSave = true;
      // }
      if (needsSave) {
        this.saveNote();
      }
    });
  }

  public setChildWindow(i: number, editor: Editor, childWindow: Window) {
    const child = new ChildMediator(editor, childWindow, this.getChildData(i));
    child.post(this.registrationEvent);
    this.children[i] = child;
    // childWindow.addEventListener('unload', () => {
    //   console.log('unload', i);
    //   this.children[i] = null;
    // });
  }

  public getAppData() {
    return this.item.content.appData;
  }

  public getChildData(i: number) {
    if (this.getSize() > 1) {
      return this.item.content.text[i] || '';
    } else if (this.getSize() === 1) {
      return this.item.content.text || '';
    } else {
      return '';
    }
  }

  public saveChild(i: number, text: string) {
    if (this.getSize() > 1) {
      this.item.content.text[i] = text;
    } else {
      this.item.content.text = text;
    }
    this.saveNote();
  }

  public waitForEditor(callbackFn: (meta: RandomBitsMeta) => void) {
    this.editorCallbackFn = callbackFn;
    if (this.meta) {
      callbackFn(this.meta);
    }
  }

  public changeEditor(index: number, editor: Editor) {
    this.meta.editors[index] = {...editor};
    this.saveNote();
    this.editorCallbackFn(this.meta);
  }

  public updateTitle(i: number, title: string) {
    this.meta.editors[i].title = title;
    this.saveNote();
  }

  public deleteRow() {
    const startIndex = this.getSize() - this.getColumns();
    this.meta.editors.splice(startIndex, this.getColumns());
    this.item.content.text.splice(startIndex, this.getColumns());
    this.saveNote();
    this.editorCallbackFn(this.meta);
  }

  public addRow() {
    if (this.getSize() === 1) {
      this.item.content.text = [this.item.content.text];
    }

    for (let i = 0; i < this.getColumns(); i++) {
      this.meta.editors.push({...PLAIN_EDITOR});
      this.item.content.text.push('');
    }
    this.saveNote();
    this.editorCallbackFn(this.meta);
  }

  public swapPositions(index1: number, index2: number) {
    swapArrayIndexes(this.meta.editors, index1, index2);
    swapArrayIndexes(this.item.content.text, index1, index2);
    swapArrayIndexes(this.children, index1, index2);
    this.saveNote();
    this.editorCallbackFn(this.meta);
  }

  public setColumns(col: number) {
    this.meta.columns = col;
    this.makeEditorsFillRows();
    this.saveNote();
    this.editorCallbackFn(this.meta);
  }

  public getColumns() {
    return this.meta.columns || 1;
  }

  public getRows() {
    return this.getSize() / this.getColumns();
  }

  public getEditors() {
    return this.meta.editors;
  }

  public getSize() {
    return this.meta.editors.length;
  }

  private handleMessage(e: MessageEvent) {
    const data = e.data;
    // console.log('mediator: ', data);
    if (data.action === 'component-registered') {
      this.handleParentRegistration(e);
    } else if (data.action === 'stream-context-item') {
      this.handleChildDataRequest(e);
    } else if (data.action === 'save-items') {
      this.handleChildSaveRequest(e);
    } else if (data.action === 'request-permissions') {
      this.handleChildRequestPermissions(e);
    } else if (data.action === 'reply') {
      this.handleReply(e);
    } else if (data.action === 'themes') {
      this.handleParentThemeChange(data);
    }
  }

  private handleReply(e: MessageEvent) {
    if (e.data.original?.action === 'stream-context-item') {
      this.item = e.data.data.item;
      const locked = this.item.content.appData['org.standardnotes.sn']['locked'] || false;
      useLocked.setState({locked});
      if (this.meta) {
        this.children.forEach((child, i) => {
          console.log('update', i, child);
          child.handleDataUpdate(this.getChildData(i));
        });
      } else {
        this.meta = this.item.content.appData[RANDOMBITS_DOMAIN] || {
          editors: [],
          showTitle: false,
          columns: 1
        };
        useTitle.setState({showTitle: this.meta.showTitle || false});
        if (this.editorCallbackFn) {
          this.editorCallbackFn(this.meta);
        }
      }
    }
  }

  private handleParentRegistration(e: MessageEvent) {
    const data = e.data;
    this.parentOrigin = e.origin;
    this.registrationEvent = data;
    this.sessionKey = data.sessionKey;
    window.parent.postMessage({
      action: 'stream-context-item',
      data: {},
      messageId: crypto.randomUUID(),
      sessionKey: this.sessionKey,
      api: 'component'
    }, this.parentOrigin);
  }

  private handleParentThemeChange(data: any) {
    this.themeManager.activateThemes(data.data.themes);
    this.children.forEach(child => {
      child.post(data);
    });
  }

  private handleChildDataRequest(e: MessageEvent) {
    const child = this.getChild(e.source);
    if (child) {
      child.handleChildDataRequest(e.data);
    }
    if (this.themeManager.activeThemes.length > 0) {
      child.post({
        action: 'themes',
        data: {
          themes: this.themeManager.activeThemes
        }
      });
    }
  }

  private handleChildSaveRequest(e: MessageEvent) {
    const i = this.getChildIndex(e.source);
    this.children[i].post({
      action: 'reply',
      data: {},
      original: e.data
    });
    const data = e.data;
    if (this.getSize() > 1) {
      this.item.content.text[i] = data.data.items[0].content.text;
    } else {
      this.item.content.text = data.data.items[0].content.text;
    }
    this.saveNote();
  }

  private handleChildRequestPermissions(e: MessageEvent) {
    this.getChild(e.source)?.post({
      action: 'reply',
      data: {},
      original: e.data
    });
  }

  private saveNote() {
    this.item.content.appData[RANDOMBITS_DOMAIN] = this.meta;
    window.parent.postMessage({
      action: 'save-items',
      data: {
        items: [this.item]
      },
      messageId: crypto.randomUUID(),
      sessionKey: this.sessionKey,
      api: 'component'
    }, this.parentOrigin);
  }

  private getChild(childWindow) {
    return this.children.find(child => child.equals(childWindow));
  }

  private getChildIndex(childWindow) {
    return this.children.findIndex(child => child.equals(childWindow));
  }

  private makeEditorsFillRows() {
    let lonelySections = this.getSize() % this.getColumns();
    if (lonelySections) {
      const fillCount = this.getColumns() - lonelySections;
      for (let i = 0; i < fillCount; i++) {
        if (this.getSize() === 1) {
          this.item.content.text = [this.item.content.text];
        }
        this.meta.editors.push({...PLAIN_EDITOR});
        this.item.content.text.push('');
      }
    }
    return this.clearEmptyRows() || lonelySections;
  }

  private clearEmptyRows() {
    let cleared = false;
    const rows = Math.ceil(this.getSize() / this.getColumns());
    for (let row = rows - 1; row >= 0; row--) {
      let rowIsEmpty = true;
      for (let col = 0; col < this.getColumns(); col++) {
        const index = row * this.getColumns() + col;
        const sectionToCheck = this.getChildData(index);
        if (sectionToCheck) {
          rowIsEmpty = false;
          break;
        }
      }
      if (rowIsEmpty) {
        this.meta.editors.splice(row * this.getColumns(), this.getColumns());
        this.item.content.text.splice(row * this.getColumns(), this.getColumns());
        cleared = true;
      } else {
        break;
      }
    }
    return cleared;
  }
}

export const frameMediator = new FrameMediator();

export class ChildMediator {
  private dataRequestEvent: any;
  private item: any;

  constructor(public editor: Editor, private childWindow: Window, data: any) {
    this.setItem(data);
  }

  public post(event: any) {
    if (this.childWindow) {
      this.childWindow.postMessage(event, '*');
    }
  }

  public handleChildDataRequest(data: any) {
    this.dataRequestEvent = data;
    this.item.isMetadataUpdate = false;
    this.post({
      action: 'reply',
      data: {
        item: this.item
      },
      original: data
    });
  }

  public handleDataUpdate(data: any) {
    this.setItem(data);
    console.log('sending to child', this.item);
    this.post({
      action: 'reply',
      data: {
        item: this.item
      },
      original: this.dataRequestEvent
    });
  }

  public equals(window: Window) {
    return this.childWindow === window;
  }

  private setItem(data: any) {
    this.item = {
      isMetadataUpdate: false,
      content: {
        appData: frameMediator.getAppData(),
        text: data
      }
    };
  }
}
