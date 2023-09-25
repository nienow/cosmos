import {DATA_EXCALIDRAW} from './excalidraw-data';
import {TestData} from './test-data';
import {QUILL_DATA} from './quill-data';

const DATA_NEW = new TestData('New');

const SPLIT_COLUMNS = new TestData('Split Columns', {columns: 2}).section('plain', 'Hello Column 1')
  .section('plain', 'Hello Column 2');

const SPLIT_ROWS = new TestData('Split Rows', {columns: 1}).section('plain', 'Hello Row 1')
  .section('plain', 'Hello Row 2');

const EXCALIDRAW_TEST_DATA = new TestData('Excalidraw').section('randombits.excalidraw', DATA_EXCALIDRAW);

const SPLIT_FOUR = new TestData('Split 4', {columns: 2, title: true})
  .section('plain', 'Text One', 'Title One')
  .section('plain', 'Text Two', 'Title Two')
  .section('plain', 'Text Three', 'Title Three')
  .section('plain', 'Text Four', 'Title Four');

const LOCKED = new TestData('Locked', {columns: 2, title: true, locked: true})
  .section('plain', 'One', 'Title One')
  .section('plain', 'Two');

const QUILL = new TestData('Quill', {})
  .section('randombits.quill', JSON.stringify(QUILL_DATA));

const COMPLEX = new TestData('Complex', {columns: 2})
  .section('plain', 'Plain')
  .section('randombits.quill', 'Quill')
  .section('org.standardnotes.standard-sheets', '')
  .section('randombits.excalidraw', '');

export const TEST_DATA = [
  DATA_NEW,
  SPLIT_COLUMNS,
  SPLIT_ROWS,
  SPLIT_FOUR,
  EXCALIDRAW_TEST_DATA,
  QUILL,
  COMPLEX,
  LOCKED
];
