import {Editor} from './definitions';

export const PLAIN_EDITOR = {
  id: 'plain',
  name: 'Plain',
  desc: 'A plain text editor'
};

export const BUILT_IN_EDITORS: Editor[] = [
  PLAIN_EDITOR,
  {
    id: 'org.standardnotes.standard-sheets',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.standard-sheets/dist/index.html',
    name: 'Spreadsheet',
    cat: 'Table',
    desc: 'An excel-like editor. Uses the Kendo library.',
    preinstalled: true
  },
  {
    id: 'org.standardnotes.bold-editor',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.bold-editor/dist/index.html',
    name: 'Redactor',
    cat: 'Rich Text',
    desc: 'Uses the Redactor library.',
  },
  {
    id: 'org.standardnotes.plus-editor',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.plus-editor/dist/index.html',
    name: 'Summernote',
    cat: 'Rich Text',
    desc: 'Uses the summernote library.',
  },
  {
    id: 'randombits.quill',
    name: 'Quill',
    cat: 'Rich Text',
    desc: 'Allows markdown shortcuts. Uses the Quill library.',
    preinstalled: true
  },
  {
    id: 'org.standardnotes.simple-markdown-editor',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.simple-markdown-editor/dist/index.html',
    name: 'MarkdownIt',
    cat: 'Markdown',
    desc: 'Editor/viewer split. Uses the markdown-it library.',
    preinstalled: false
  },
  {
    id: 'org.standardnotes.advanced-markdown-editor',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.advanced-markdown-editor/dist/index.html',
    name: 'EasyMDE',
    cat: 'Markdown',
    desc: 'Toolbar controls. Uses the EasyMDE library.',
    preinstalled: true
  },
  {
    id: 'org.standardnotes.minimal-markdown-editor',
    url: 'https://app.standardnotes.com/components/assets/org.standardnotes.minimal-markdown-editor/index.html',
    name: 'Minimal Markdown',
    cat: 'Markdown',
    desc: 'The simplest markdown editor. Uses the CodeMirror library.'
  },
  {
    id: 'randombits.excalidraw',
    url: 'https://nienow.github.io/sn-excalidraw/',
    name: 'Excalidraw',
    cat: 'Drawing',
    desc: 'A drawing editor. Uses the Excalidraw library.',
    github: 'https://github.com/nienow/sn-excalidraw',
    clears: true,
    preinstalled: true
  },
  {
    id: 'whiteboard',
    url: 'https://antonheitz.github.io/sn-whiteboard/',
    name: 'Whiteboard',
    cat: 'Drawing',
    desc: 'A drawing editor. Uses the TLDraw library.',
    github: 'https://github.com/antonheitz/sn-whiteboard',
    clears: true
  }
];

//   .sort((a: Editor, b: Editor) => {
//   if (a.cat === b.cat) {
//     return a.name > b.name ? 1 : -1;
//   }
//   return a.cat > b.cat ? 1 : -1;
// });
