import {Editor} from './definitions';

export const PLAIN_EDITOR: Editor = {
  id: 'plain',
  name: 'Plain',
  desc: '',
  preinstalled: true
};

export const BUILT_IN_EDITORS: Editor[] = [
  {
    id: 'org.standardnotes.standard-sheets',
    url: 'https://nienow.github.io/cosmos/sheets.html',
    name: 'Spreadsheet',
    cat: 'Table',
    desc: 'An excel-like editor. Uses the Kendo library.',
    preinstalled: true
  },
  {
    id: 'randombits.quill',
    url: 'https://nienow.github.io/sn-quill/',
    name: 'Quill',
    cat: 'Rich Text',
    desc: 'Allows markdown shortcuts. Uses the Quill library.',
    preinstalled: true
  },
  {
    id: 'randombits.excalidraw',
    url: 'https://nienow.github.io/sn-excalidraw/',
    name: 'Excalidraw',
    cat: 'Drawing',
    desc: 'Uses the Excalidraw library.',
    github: 'https://github.com/nienow/sn-excalidraw',
    clears: true,
    preinstalled: true
  },
  {
    id: 'whiteboard',
    url: 'https://antonheitz.github.io/sn-whiteboard/',
    name: 'Whiteboard',
    cat: 'Drawing',
    desc: 'Uses the TLDraw library.',
    github: 'https://github.com/antonheitz/sn-whiteboard',
    clears: true
  },
  {
    id: 'mermaid',
    url: 'https://nienow.github.io/sn-mermaid/',
    name: 'Mermaid',
    cat: 'Drawing',
    desc: 'Diagrams and Charts with the Mermaid library',
    github: 'https://github.com/nienow/sn-mermaid'
  }
].sort((a: Editor, b: Editor) => {
  return a.name > b.name ? 1 : -1;
});
