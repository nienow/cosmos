import {Editor, RANDOMBITS_DOMAIN, RandomBitsMeta} from './definitions';
import {ThemeManager} from './theme-manager';
import {PLAIN_EDITOR} from './editor-list';
import {useTitle} from './hooks/useTitle';
import {useLocked} from './hooks/useLocked';
import {isValidJsonString, swapArrayIndexes} from './utils';

class FrameMediator {
  private registrationEvent;
  private parentOrigin: string;
  private children: { [key: string]: ChildMediator } = {};
  private sessionKey;
  private item;
  private meta: RandomBitsMeta;
  private editorCallbackFn: (meta: RandomBitsMeta) => void;
  private themeManager = new ThemeManager();

  // private saveTimeout;

  constructor() {
    window.addEventListener('message', this.handleMessage.bind(this));
    useTitle.subscribe(({showTitle}) => {
      let needsSave = false;
      if (this.meta.showTitle !== showTitle) {
        this.meta.showTitle = showTitle;
        needsSave = true;
      }
      if (needsSave) {
        this.saveNote();
      }
    });
  }

  public setChildWindow(i: number, editor: Editor, childWindow: Window) {
    const child = new ChildMediator(editor, childWindow, this.getChildData(i));
    child.post(this.registrationEvent);
    this.children[editor.key] = child;
  }

  public getAppData() {
    return this.item.content.appData;
  }

  public getChildDataByEditor(editor: Editor) {
    const i = this.getChildIndexByEditor(editor);
    return this.getChildData(i);
  }

  public getChildIndexByEditor(editor: Editor) {
    return this.meta.editors.findIndex(item => item.key === editor.key);
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
    if (this.meta.editors[index]) {
      delete this.children[this.meta.editors[index].key];
    }

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
    const data = isValidJsonString(e.data) ? JSON.parse(e.data) : e.data;

    // console.log('mediator: ', data);
    if (data.action === 'component-registered') {
      this.handleParentRegistration(e, data);
    } else if (data.action === 'stream-context-item') {
      this.handleChildDataRequest(e, data);
    } else if (data.action === 'save-items') {
      this.handleChildSaveRequest(e, data);
    } else if (data.action === 'request-permissions') {
      this.handleChildRequestPermissions(e, data);
    } else if (data.action === 'reply') {
      this.handleReply(data);
    } else if (data.action === 'themes') {
      this.handleParentThemeChange(data);
    }
  }

  private handleReply(data: any) {
    if (data.original?.action === 'stream-context-item') {
      this.item = data.data.item;
      const locked = this.item.content.appData['org.standardnotes.sn']['locked'] || false;
      useLocked.setState({locked});
      if (this.meta) {
        if (!this.item.isMetadataUpdate) {
          Object.values(this.children).forEach((child) => {
            child.handleDataUpdate(this.getChildDataByEditor(child.editor));
          });
        }
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

  private handleParentRegistration(e: MessageEvent, data: any) {
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
    Object.values(this.children).forEach(child => {
      child.post(data);
    });
  }

  private handleChildDataRequest(e: MessageEvent, data: any) {
    const child = this.getChild(e.source);
    if (child) {
      child.handleChildDataRequest(data);
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

  private handleChildSaveRequest(e: MessageEvent, data: any) {
    const child = this.getChild(e.source);
    child.post({
      action: 'reply',
      data: {},
      original: data
    });
    if (this.getSize() > 1) {
      const i = this.getChildIndexByEditor(child.editor);
      this.item.content.text[i] = data.data.items[0].content.text;
    } else {
      this.item.content.text = data.data.items[0].content.text;
    }
    this.saveNote();
  }

  private handleChildRequestPermissions(e: MessageEvent, data: any) {
    this.getChild(e.source)?.post({
      action: 'reply',
      data: {},
      original: data
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
    return Object.values(this.children).find(child => child.equals(childWindow));
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
    for (let row = rows - 1; row >= 1; row--) {
      let rowIsEmpty = true;
      for (let col = 0; col < this.getColumns(); col++) {
        const index = row * this.getColumns() + col;
        const sectionToCheck = this.meta.editors[index].id === 'plain' && this.getChildData(index);
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
      },
      clientData: {}
    };
  }
}
