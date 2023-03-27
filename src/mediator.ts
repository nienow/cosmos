import {EDITOR_KEY, RANDOMBITS_DOMAIN} from './definitions';

export class FrameMediator {
  private registrationEvent;
  private origin;
  private childWindow;
  private sessionKey;
  // private itemEvent;
  private item;
  private streamOriginalEvent;
  private editor: string;
  private initialized = false;
  private editorCallbackFn: (editor: string) => void;

  constructor() {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  public setChildWindow(childWindow: Window) {
    this.childWindow = childWindow;
    this.childWindow.postMessage(this.registrationEvent, '*');
  }

  public waitForEditor(callbackFn: (editor: string) => void) {
    this.editorCallbackFn = callbackFn;
    if (this.editor) {
      callbackFn(this.editor);
    }
  }

  // public getText() {
  //   return this.itemEvent.data.item.content.text;
  // }
  //
  // public saveText(value: string) {
  //   this.itemEvent.data.item.content.text = value;
  // }

  public changeEditor(newEditor: string) {
    this.editor = newEditor;
    this.writeEditor();
    window.parent.postMessage({
      action: 'save-items',
      data: {
        items: [this.item]
      },
      messageId: crypto.randomUUID(),
      sessionKey: this.sessionKey,
      api: 'component'
    }, this.origin);
  }

  private handleMessage(e: MessageEvent) {
    const data = e.data;
    console.log('mediator: ', data);
    if (data.action === 'component-registered') {
      this.origin = e.origin;
      this.registrationEvent = data;
      this.sessionKey = data.sessionKey;
      window.parent.postMessage({
        action: 'stream-context-item',
        data: {},
        messageId: crypto.randomUUID(),
        sessionKey: this.sessionKey,
        api: 'component'
      }, this.origin);
    } else if (data.action === 'stream-context-item') {
      this.streamOriginalEvent = data;
      this.childWindow.postMessage({
        action: 'reply',
        data: {
          item: this.item
        },
        original: data
      }, '*');
    } else if (data.action === 'save-items') {
      this.item = data.data.items[0];
      this.writeEditor();
      window.parent.postMessage(data, this.origin);
    } else if (data.action === 'request-permissions') {
      this.childWindow.postMessage({
        action: 'reply',
        data: {},
        original: data
      });
    } else if (data.action === 'reply') {
      this.handleReply(data);
    }
  }

  private handleReply(data: any) {
    if (data.original?.action === 'stream-context-item') {
      if (this.initialized) {
        this.childWindow.postMessage({
          ...data,
          original: this.streamOriginalEvent
        }, '*');
      } else {
        this.item = data.data.item;
        const domainData = this.item.content.appData[RANDOMBITS_DOMAIN];
        this.editor = domainData ? domainData[EDITOR_KEY] : 'plain';
        this.initialized = true;
        if (this.editorCallbackFn) {
          this.editorCallbackFn(this.editor);
        }
      }
    } else {
      this.childWindow.postMessage(data, '*');
    }
  }

  private writeEditor() {
    this.item.content.appData[RANDOMBITS_DOMAIN] = {
      [EDITOR_KEY]: this.editor
    };
  }
}
