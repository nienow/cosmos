import {Editor, RANDOMBITS_DOMAIN, RandomBitsMeta} from './definitions';
import {ThemeManager} from './theme-manager';
import {PLAIN_EDITOR} from './built-in-editors';
import {useTitle} from './hooks/useTitle';
import {useLocked} from './hooks/useLocked';
import {swapArrayIndexes} from './utils';

// enum ChildState {
//   START,
//   REGISTERED,
//   CHANGING_EDITOR
// }

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
    useTitle.subscribe(({title, titles}) => {
      let needsSave = false;
      if (this.meta.title !== title) {
        this.meta.title = title;
        needsSave = true;
      }
      if (this.meta.titles !== titles) {
        this.meta.titles = titles;
        needsSave = true;
      }
      if (needsSave) {
        this.saveNote();
      }
    });
  }

  public setChildWindow(i: number, childWindow: Window) {
    this.children[i].init(childWindow, this.getChildData(i));
    this.children[i].post(this.registrationEvent);
  }

  public getChildData(i: number) {
    if (this.children.length > 1) {
      return this.item.content.text[i] || '';
    } else if (this.children.length === 1) {
      return this.item.content.text || '';
    } else {
      return '';
    }
  }

  public saveChild(i: number, text: string) {
    if (this.children.length > 1) {
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
    if (Array.isArray(this.meta.editor)) {
      this.meta.editor[index] = editor;
    } else {
      this.meta.editor = editor;
    }
    this.saveNote();
    this.editorCallbackFn(this.meta);
  }

  public deleteSection(index: number) {
    this.meta.editor[index] = PLAIN_EDITOR;
    this.meta.titles[index] = '';
    this.item.content.text[index] = '';
    this.makeEditorsFillRows();
    this.editorCallbackFn(this.meta);
  }

  public deleteColumn(index: number) {
    // index is editor index
    const columnIndex = this.meta.columns - this.meta.columns % index;
    const editors = this.meta.editor as Editor[];
    for (let i = editors.length - columnIndex; i >= 0; i -= this.meta.columns) {
      editors.splice(i, 1);
      this.meta.titles.splice(i, 1);
      this.item.content.text.splice(i, 1);
    }
    this.meta.columns--;
    this.editorCallbackFn(this.meta);
  }

  public deleteRow() {
    const startIndex = this.getSize() - this.getColumns();
    (this.meta.editor as Editor[]).splice(startIndex, this.getColumns());
    this.meta.titles.splice(startIndex, this.getColumns());
    this.item.content.text.splice(startIndex, this.getColumns());
    this.editorCallbackFn(this.meta);
  }

  public addRow() {
    const columns = this.meta.columns || 1;
    if (!Array.isArray(this.meta.editor)) {
      this.meta.editor = [this.meta.editor];
      this.item.content.text = [this.item.content.text];
    }

    for (let i = 0; i < columns; i++) {
      this.meta.editor.push({...PLAIN_EDITOR});
      this.meta.titles.push('');
      this.item.content.text.push('');
    }

    this.editorCallbackFn(this.meta);
  }

  public swapPositions(index1: number, index2: number) {
    swapArrayIndexes(this.meta.editor as Editor[], index1, index2);
    swapArrayIndexes(this.meta.titles, index1, index2);
    swapArrayIndexes(this.item.content.text, index1, index2);
    this.editorCallbackFn(this.meta);
  }

  public setColumns(col: number) {
    this.meta.columns = col;
    this.makeEditorsFillRows();
    this.editorCallbackFn(this.meta);
  }

  public getColumns() {
    return this.meta.columns || 1;
  }

  public getRows() {
    return this.getSize() / this.getColumns();
  }

  public getEditors() {
    if (this.meta.editor) {
      if (Array.isArray(this.meta.editor)) {
        return this.meta.editor;
      } else {
        return [this.meta.editor];
      }
    } else {
      return [];
    }
  }

  public getSize() {
    if (this.meta.editor) {
      if (Array.isArray(this.meta.editor)) {
        return this.meta.editor.length;
      } else {
        return 1;
      }
    }
    return 0;
  }

  // public getTitle() {
  //   return this.meta.title || false;
  // }

  // public eraseNote() {
  //   this.item.content.text = '';
  //   this.item.content.preview_plain = '';
  //   this.item.content.preview_html = '';
  //   this.saveNote();
  //   console.log(this.streamOriginalEvent);
  //   this.childWindow.postMessage({
  //     action: 'reply',
  //     data: {
  //       item: this.item
  //     },
  //     original: this.streamOriginalEvent
  //   }, '*');
  // }

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
        this.children.forEach(child => {
          child.handleDataUpdate(e.data);
        });
      } else {
        this.meta = this.item.content.appData[RANDOMBITS_DOMAIN];
        useTitle.setState({title: this.meta.title || false, titles: this.meta.titles || []});
        this.createChildMediators();
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
    if (this.children.length > 1) {
      this.item.content.text[i] = data.data.items[0].content.text;
    } else {
      this.item.content.text = data.data.items[0].content.text;
    }
    this.saveNote();
    // data.data.items[0] = this.item;
    // window.parent.postMessage(data, this.parentOrigin);
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

  private createChildMediators() {
    if (this.meta.editor) {
      const editors = Array.isArray(this.meta.editor) ? this.meta.editor : [this.meta.editor];
      editors.forEach(editor => {
        this.children.push(new ChildMediator(editor));
      });
    }
  }

  private getChild(childWindow) {
    return this.children.find(child => child.equals(childWindow));
  }

  private getChildIndex(childWindow) {
    return this.children.findIndex(child => child.equals(childWindow));
  }

  private makeEditorsFillRows() {
    const editors = this.getEditors();
    //
    // // delete empty plain editors
    // const startIndexOfLonely = editors.length - lonelySections - 1;
    // // check if all editors in bottom row are empty
    // for (let i = editors.length - 1; i >= startIndexOfLonely; i--) {
    //   if (editors[i].id === 'plain' && !this.getChildData(i)) {
    //     this.removeEditor(i);
    //     lonelySections--;
    //   } else {
    //     break;
    //   }
    // }

    let lonelySections = editors.length % this.getColumns();
    if (lonelySections) {

      // otherwise fill remaining slots in bottom row
      const fillCount = this.getColumns() - lonelySections;
      for (let i = 0; i < fillCount; i++) {
        editors.push(PLAIN_EDITOR);
        if (!Array.isArray(this.item.text)) {
          this.item.text = [this.item.text];
        }
        this.item.text.push('');
        this.children.push(new ChildMediator(PLAIN_EDITOR));
      }
    }
  }

  // private removeEditor(i: number) {
  //   if (Array.isArray(this.meta.editor)) {
  //     this.meta.editor.splice(i, 1);
  //     this.item.content.text.splice(i, 1);
  //     if (this.meta.editor.length === 1) {
  //       this.meta.editor = this.meta.editor[0];
  //       this.item.content.text = this.item.content.text[0];
  //     }
  //   } else {
  //     delete this.meta.editor;
  //     this.item.content.text = '';
  //   }
  //   this.children.splice(i, 1);
  // }
}

export const frameMediator = new FrameMediator();

export class ChildMediator {
  private childWindow: Window;
  // private state: ChildState = ChildState.START;
  private dataRequestEvent: any;
  private item: any;

  constructor(public editor: Editor) {
  }

  public init(window: Window, data: any) {
    this.childWindow = window;
    this.item = {
      isMetadataUpdate: false,
      content: {
        text: data
      }
    };
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
    // this.state = ChildState.REGISTERED;
  }

  public handleDataUpdate(data: any) {
    if (this.childWindow) {
      this.post({
        ...data,
        original: this.dataRequestEvent
      });
    }

  }

  // public handleSaveReply(data: any) {
  //   if (this.state === ChildState.REGISTERED) {
  //     this.post(data);
  //   }
  // }

  public equals(window: Window) {
    return this.childWindow === window;
  }
}
