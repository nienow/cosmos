import {Editor, RANDOMBITS_DOMAIN, RandomBitsMeta} from './definitions';
import {ThemeManager} from './theme-manager';

// enum FrameState {
//   START,
//   REGISTERED_PARENT,
//   RECEIVED_DATA,
//   REGISTERED_CHILD,
//   SENT_DATA_TO_CHILD,
//   CHANGING_EDITOR
// }

enum ChildState {
  START,
  // REGISTERED,
  REGISTERED,
  CHANGING_EDITOR
}

class FrameMediator {
  private registrationEvent;
  private parentOrigin: string;
  // private childWindows = [];
  private children: ChildMediator[] = [];
  private sessionKey;
  private item;
  // private streamOriginalEvent;
  private meta: RandomBitsMeta;
  private editorCallbackFn: (meta: RandomBitsMeta) => void;
  private themeManager = new ThemeManager();

  // private state = FrameState.START;

  constructor() {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  public setChildWindow(i: number, childWindow: Window) {
    let childData = '';
    if (this.children.length > 1) {
      childData = this.item.content.text[i] || '';
    } else if (this.children.length === 1) {
      childData = this.item.content.text || '';
    }

    this.children[i].init(childWindow, childData);
    this.children[i].post(this.registrationEvent);
  }

  public waitForEditor(callbackFn: (meta: RandomBitsMeta) => void) {
    this.editorCallbackFn = callbackFn;
    if (this.meta) {
      callbackFn(this.meta);
    }
  }

  public changeEditor(newMeta: RandomBitsMeta) {
    // this.state = FrameState.CHANGING_EDITOR;
    this.meta = newMeta;
    this.writeMeta();
    this.saveNote();
    this.editorCallbackFn(newMeta);
  }

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
      if (this.meta) {
        this.children.forEach(child => {
          child.handleDataUpdate(e.data);
        });
      } else {
        this.item = e.data.data.item;
        this.meta = this.item.content.appData[RANDOMBITS_DOMAIN];
        this.createChildMediators();
        if (this.editorCallbackFn) {
          this.editorCallbackFn(this.meta);
        }
      }
    }
    // } else if (e.data.original?.action === 'save-items') {
    //   this.getChild(e.source)?.handleSaveReply(e.data);
    // }
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
    data.data.items[0] = this.item;
    window.parent.postMessage(data, this.parentOrigin);
  }

  private handleChildRequestPermissions(e: MessageEvent) {
    this.getChild(e.source)?.post({
      action: 'reply',
      data: {},
      original: e.data
    });
  }

  private writeMeta() {
    this.item.content.appData[RANDOMBITS_DOMAIN] = this.meta;
  }

  private saveNote() {
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
}

export const frameMediator = new FrameMediator();

export class ChildMediator {
  private childWindow: Window;
  private state: ChildState = ChildState.START;
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
    this.childWindow.postMessage(event, '*');
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
    this.state = ChildState.REGISTERED;
  }

  public handleDataUpdate(data: any) {
    this.post({
      ...data,
      original: this.dataRequestEvent
    });
  }

  public handleSaveReply(data: any) {
    if (this.state === ChildState.REGISTERED) {
      this.post(data);
    }
  }

  public equals(window: Window) {
    return this.childWindow === window;
  }
}
