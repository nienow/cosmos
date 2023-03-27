import registeredData from './registered.json';
import streamResponse from './stream-response.json';
import {LOCKED_KEY, SN_DOMAIN} from '../definitions';

export class MockStandardNotes {
  private childWindow;
  private streamEvent;

  constructor(private onSave: () => void) {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  public onReady(childWindow) {
    this.childWindow = childWindow;
    childWindow.postMessage(registeredData);
  }

  public toggleLock(isLocked: boolean) {
    const data = JSON.parse(JSON.stringify(streamResponse.data));
    data.item.content.appData[SN_DOMAIN][LOCKED_KEY] = isLocked;
    this.childWindow.postMessage({
      action: 'reply',
      data: data,
      original: this.streamEvent
    }, '*');
  }

  private handleMessage(e: MessageEvent) {
    const data = e.data;
    console.log('mock: ', data);
    if (data.action === 'stream-context-item') {
      this.streamEvent = data;
      this.childWindow.postMessage({
        action: 'reply',
        data: streamResponse.data,
        original: data
      }, '*');
    } else if (data.action === 'save-items') {
      this.onSave();
      this.childWindow.postMessage({
        action: 'reply',
        data: {},
        original: data
      }, '*');
    }
  }
}
