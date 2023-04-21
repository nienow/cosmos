import {BUILT_IN_EDITORS, PLAIN_EDITOR} from '../../editor-list';
import {RandomBitsMeta} from '../../definitions';

export class TestData {
  private data = [];
  private editor = [];
  private titles = [];

  constructor(public name: string, private options: { columns?: number, title?: boolean, locked?: boolean } = {}) {
  }

  public section(editorId: string, text: string, title = '') {
    this.editor.push(editorId);
    this.data.push(text);
    this.titles.push(title);
    return this;
  }

  public getMetadata(): RandomBitsMeta {
    const meta: RandomBitsMeta = {
      showTitle: this.options.title || false
    };
    meta.editors = this.editor.map(editorId => {
      return {...this.getFullEditorData(editorId)};
    });
    meta.columns = this.options.columns;
    return meta;
  }

  public getText() {
    if (this.data.length > 1) {
      return this.data;
    } else if (this.data.length === 1) {
      return this.data[0];
    } else {
      return '';
    }
  }

  public isLocked() {
    return this.options.locked || false;
  }

  private getFullEditorData(editorId: string) {
    if (editorId === 'plain') {
      return PLAIN_EDITOR;
    }
    return BUILT_IN_EDITORS.find(item => item.id === editorId);
  }
}


