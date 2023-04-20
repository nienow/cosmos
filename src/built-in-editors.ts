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
    id: 'simple-markdown',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.simple-markdown-editor/dist/index.html',
    name: 'Simple Markdown',
    desc: ''
  },
  {
    id: 'advanced-markdown',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.advanced-markdown-editor/dist/index.html',
    name: 'Advanced markdown',
    desc: ''
  },
  {
    id: 'visual-markdown',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.markdown-visual-editor/build/index.html',
    name: 'Alternative Markdown',
    desc: ''
  },
  {
    id: 'minimal-markdown',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.minimal-markdown-editor/index.html',
    name: 'Minimal Markdown',
    desc: ''
  },
  {
    id: 'tasks',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.simple-task-editor/dist/index.html',
    name: 'Simple Task',
    desc: ''
  },
  {
    id: 'code',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.code-editor/index.html',
    name: 'Code',
    desc: ''
  },
  {
    id: 'bold',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.bold-editor/dist/index.html',
    name: 'Bold',
    desc: ''
  },
  {
    id: 'sheets',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.standard-sheets/dist/index.html',
    name: 'Sheets',
    desc: '',
  },
  {
    id: 'math',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.fancy-markdown-editor/index.html',
    name: 'Math markdown',
    desc: ''
  },
  {
    id: 'plus',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.plus-editor/dist/index.html',
    name: 'Rich Text Plus',
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
