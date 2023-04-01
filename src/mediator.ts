import {Editor, EDITOR_KEY, RANDOMBITS_DOMAIN} from './definitions';
import {ThemeManager} from './theme-manager';

enum FrameState {
  START,
  REGISTERED_PARENT,
  RECEIVED_DATA,
  REGISTERED_CHILD,
  SENT_DATA_TO_CHILD,
  CHANGING_EDITOR
}

export class FrameMediator {
  private registrationEvent;
  private parentOrigin: string;
  private childWindow;
  private sessionKey;
  private item;
  private streamOriginalEvent;
  private editor: Editor;
  private editorCallbackFn: (editor: Editor) => void;
  private themeManager = new ThemeManager();
  private state = FrameState.START;

  constructor() {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  public setChildWindow(childWindow: Window) {
    this.childWindow = childWindow;
    this.childWindow.postMessage(this.registrationEvent, '*');
    this.state = FrameState.REGISTERED_CHILD;
  }

  public waitForEditor(callbackFn: (editor: Editor) => void) {
    this.editorCallbackFn = callbackFn;
    if (this.editor) {
      callbackFn(this.editor);
    }
  }

  public changeEditor(newEditor: Editor) {
    this.state = FrameState.CHANGING_EDITOR;
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
    }, this.parentOrigin);
  }

  private handleMessage(e: MessageEvent) {
    const data = e.data;
    console.log('mediator: ', data);
    if (data.action === 'component-registered') {
      this.handleParentRegistration(e);
    } else if (data.action === 'stream-context-item') {
      this.handleChildDataRequest(data);
    } else if (data.action === 'save-items') {
      this.handleChildSaveRequest(data);
    } else if (data.action === 'request-permissions') {
      this.handleChildRequestPermissions(data);
    } else if (data.action === 'reply') {
      this.handleReply(data);
    } else if (data.action === 'themes') {
      this.handleParentThemeChange(data);
    }
  }

  private handleReply(data: any) {
    if (data.original?.action === 'stream-context-item') {
      if (this.state === FrameState.SENT_DATA_TO_CHILD) {
        this.childWindow.postMessage({
          ...data,
          original: this.streamOriginalEvent
        }, '*');
      } else if (this.state === FrameState.REGISTERED_PARENT) {
        this.state = FrameState.RECEIVED_DATA;
        this.item = data.data.item;
        const domainData = this.item.content.appData[RANDOMBITS_DOMAIN];
        this.editor = domainData ? domainData[EDITOR_KEY] : null;
        if (this.editorCallbackFn) {
          this.editorCallbackFn(this.editor);
        }
      } else {
        // ignore
      }
    } else if (data.original?.action === 'save-items') {
      if (this.state === FrameState.SENT_DATA_TO_CHILD) {
        this.childWindow.postMessage(data, '*');
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
    this.state = FrameState.REGISTERED_PARENT;
  }

  private handleParentThemeChange(data: any) {
    this.themeManager.activateThemes(data.data.themes);
    if (this.childWindow) {
      this.childWindow.postMessage(data, '*');
    }
  }

  private handleChildDataRequest(data: any) {
    this.streamOriginalEvent = data;
    this.item.isMetadataUpdate = false;
    this.childWindow.postMessage({
      action: 'reply',
      data: {
        item: this.item
      },
      original: data
    }, '*');
    if (this.themeManager.activeThemes.length > 0) {
      this.childWindow.postMessage({
        action: 'themes',
        data: {
          themes: this.themeManager.activeThemes
        }
      }, '*');
    }
    this.state = FrameState.SENT_DATA_TO_CHILD;
  }

  private handleChildSaveRequest(data: any) {
    this.item = data.data.items[0];
    this.writeEditor();
    window.parent.postMessage(data, this.parentOrigin);
  }

  private handleChildRequestPermissions(data: any) {
    this.childWindow.postMessage({
      action: 'reply',
      data: {},
      original: data
    });
  }

  private writeEditor() {
    this.item.content.appData[RANDOMBITS_DOMAIN] = {
      [EDITOR_KEY]: this.editor
    };
  }
}
