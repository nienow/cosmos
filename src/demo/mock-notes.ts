import registeredData from './registered.json';
import sampleStreamResponse from './stream-response.json';
import {RANDOMBITS_DOMAIN} from '../definitions';
import {TestData} from './test-data';

export class MockStandardNotes {
  private childWindow;
  private streamEvent;
  private streamData;

  constructor(data: TestData, private onSave: () => void) {
    this.updateStream(data);
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  public onReady(childWindow) {
    this.childWindow = childWindow;
    childWindow.postMessage(registeredData);
  }

  public toggleLock(isLocked: boolean) {
    this.streamData.item.content.appData['org.standardnotes.sn']['locked'] = isLocked;
    this.childWindow.postMessage({
      action: 'reply',
      data: this.streamData,
      original: this.streamEvent
    }, '*');
  }

  public toggleTheme(isDark: boolean) {
    const themes = isDark ? ['dark.css'] : [];
    this.childWindow.postMessage({
      action: 'themes',
      data: {
        themes
      }
    }, '*');
  }

  public changeData(data: TestData) {
    this.updateStream(data);
    console.log(this.streamData);
    this.childWindow.postMessage({
      action: 'reply',
      data: this.streamData,
      original: this.streamEvent
    }, '*');
  }

  private handleMessage(e: MessageEvent) {
    const data = e.data;
    // console.log('mock: ', data);
    if (data.action === 'stream-context-item') {
      this.streamEvent = data;
      this.childWindow.postMessage({
        action: 'reply',
        data: this.streamData,
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

  private updateStream(data: TestData) {
    this.streamData = JSON.parse(JSON.stringify(sampleStreamResponse.data));
    this.streamData.item.content.text = data.getText();
    this.streamData.item.content.appData[RANDOMBITS_DOMAIN] = data.getMetadata();
  }
}
