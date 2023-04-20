import {Editor} from './definitions';

export const PLAIN_EDITOR = {
  id: 'plain',
  name: 'Plain',
  desc: 'A plain text editor'
};

export const BUILT_IN_EDITORS: Editor[] = [
  PLAIN_EDITOR,
  {
    id: 'block',
    url: 'http://localhost:5173/',
    name: 'BlockSuite',
    desc: ''
  },
  {
    id: 'spreadsheet',
    name: 'Spreadsheet',
    desc: 'Spreadsheet'
  },
  {
    id: 'quill',
    name: 'Rich Text',
    desc: 'Rich Text Editor using Quill'
  },
  {
    id: 'lucky',
    url: 'luckysheet.html',
    name: 'Luckysheet',
    desc: ''
  },
  {
    id: 'randombits.excalidraw',
    url: 'http://localhost:8085/',
    name: 'Excalidraw',
    desc: 'A drawing editor that uses the Excalidraw library',
    github: 'https://github.com/nienow/sn-excalidraw',
    clears: true
  },
  {
    id: 'whiteboard',
    url: 'https://antonheitz.github.io/sn-whiteboard/',
    name: 'Whiteboard',
    desc: 'Uses TLDraw Application',
    github: 'https://github.com/antonheitz/sn-whiteboard',
    clears: true
  },
  {
    id: 'com.dylanonelson.sn-scratch-editor',
    url: 'https://scratch-editor.com',
    name: 'Scratch Editor',
    desc: 'An editor for writing things down.',
    github: 'https://github.com/dylanonelson/sn-scratch-editor'
  }
].sort((a, b) => a.name > b.name ? 1 : -1);
