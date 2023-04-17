import {BUILT_IN_EDITORS} from '../built-in-editors';
import {RandomBitsMeta} from '../definitions';

export const DATA_EXCALIDRAW = JSON.stringify({
  elements: [{
    id: '6sVDp9mCGQTomD9Cg5w1b',
    type: 'rectangle',
    x: 202.04296875,
    y: -672.6953125,
    width: 163,
    height: 185,
    angle: 0,
    strokeColor: '#000000',
    backgroundColor: '#e64980',
    fillStyle: 'solid',
    strokeWidth: 1,
    strokeStyle: 'solid',
    roughness: 1,
    opacity: 100,
    groupIds: [],
    strokeSharpness: 'sharp',
    seed: 1640006454,
    version: 74,
    versionNonce: 1054194038,
    isDeleted: false,
    boundElements: [
      {
        type: 'text',
        id: 'MB9CSH621UIKH8MEgOhaM'
      }
    ],
    updated: 1639729535736,
    customData: {
      id: 'rect-1',
      version: '1'
    }
  }],
  appState: {},
  scrollToContent: true,
  libraryItems: [
    [
      {
        type: 'line',
        version: 1699,
        versionNonce: 1813275999,
        isDeleted: false,
        id: '1OMHrnYMU3LJ3w3IaXU_R',
        fillStyle: 'hachure',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: 209.72304760646858,
        y: 338.83587294718825,
        strokeColor: '#881fa3',
        backgroundColor: '#be4bdb',
        width: 116.42036295658873,
        height: 103.65107323746608,
        seed: 1445523839,
        groupIds: [],
        strokeSharpness: 'sharp',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [-92.28090097254909, 7.105427357601002e-15],
          [-154.72281841151394, 19.199290805487394],
          [-155.45758928571422, 79.43840749607878],
          [-99.89923520113778, 103.6510732374661],
          [-40.317783799181804, 79.1587107641305],
          [-39.037226329125524, 21.285677238400705],
          [-92.28090097254909, 7.105427357601002e-15]
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null
      }
    ]
  ]
});

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
    return BUILT_IN_EDITORS.find(item => item.id === editorId);
  }
}

const DATA_NEW = new TestData('New');

const SPLIT_PLAIN = new TestData('Split One', {columns: 2}).section('plain', 'Hello Plain')
  .section('com.dylanonelson.sn-scratch-editor', 'Hello Scratch');

const EXCALIDRAW_TEST_DATA = new TestData('Excalidraw').section('randombits.excalidraw', DATA_EXCALIDRAW);
const EXCALIDRAW_TEST_DATA2 = new TestData('Excalidraw 2').section('randombits.excalidraw', DATA_EXCALIDRAW)
  .section('randombits.excalidraw', DATA_EXCALIDRAW);

const SPLIT_FOUR = new TestData('Split 4', {columns: 2, title: true})
  .section('plain', 'One', 'Title One')
  .section('plain', 'Two')
  .section('plain', 'Three')
  .section('plain', 'Four');

const LOCKED = new TestData('Locked', {columns: 2, title: true, locked: true})
  .section('plain', 'One', 'Title One')
  .section('plain', 'Two');

const SINGLE_PLAIN = new TestData('Single', {})
  .section('plain', 'One');

export const TEST_DATA = [
  DATA_NEW,
  SPLIT_PLAIN,
  EXCALIDRAW_TEST_DATA,
  EXCALIDRAW_TEST_DATA2,
  SPLIT_FOUR,
  LOCKED,
  SINGLE_PLAIN
];
