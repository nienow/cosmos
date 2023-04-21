import {DATA_EXCALIDRAW, DATA_EXCALIDRAW_2} from './excalidraw-data';
import {TestData} from './test-data';
import {QUILL_DATA} from './quill-data';

const DATA_NEW = new TestData('New');

const SPLIT_PLAIN = new TestData('Split One', {columns: 2}).section('plain', 'Hello Plain')
  .section('randombits.quill', 'Hello Quill');

const EXCALIDRAW_TEST_DATA = new TestData('Excalidraw').section('randombits.excalidraw', DATA_EXCALIDRAW);
const EXCALIDRAW_TEST_DATA2 = new TestData('Excalidraw 2').section('randombits.excalidraw', DATA_EXCALIDRAW)
  .section('randombits.excalidraw', DATA_EXCALIDRAW_2);

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

const QUILL = new TestData('Quill', {})
  .section('randombits.quill', JSON.stringify(QUILL_DATA));

// const LUCKY = new TestData('Lucky', {}).section('lucky', JSON.stringify(LUCKY_ONE));

export const TEST_DATA = [
  DATA_NEW,
  SPLIT_PLAIN,
  EXCALIDRAW_TEST_DATA,
  EXCALIDRAW_TEST_DATA2,
  SPLIT_FOUR,
  LOCKED,
  SINGLE_PLAIN,
  QUILL
];
