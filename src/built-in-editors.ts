import {Editor} from './definitions';

export const BUILT_IN_EDITORS: Editor[] = [
  {
    id: 'plain',
    url: 'plain.html',
    name: 'Plain',
    desc: 'A plain text editor'
  },
  {
    id: 'randombits.excalidraw',
    url: 'https://nienow.github.io/sn-excalidraw/',
    name: 'Excalidraw',
    desc: 'A drawing editor that uses the Excalidraw library',
    github: 'https://github.com/nienow/sn-excalidraw'
  },
  {
    id: 'whiteboard',
    url: 'https://antonheitz.github.io/sn-whiteboard/',
    name: 'Whiteboard',
    desc: 'Uses TLDraw Application',
    github: 'https://github.com/antonheitz/sn-whiteboard'
  },
  {
    id: 'com.dylanonelson.sn-scratch-editor',
    url: 'https://scratch-editor.com',
    name: 'Scratch Editor',
    desc: 'An editor for writing things down.',
    github: 'https://github.com/dylanonelson/sn-scratch-editor'
  },
  {
    id: 'org.corvec.sn-kanban-editor',
    name: 'Kanban Editor',
    url: 'https://corvec.github.io/sn-kanban-editor/',
    desc: 'Kanban board editor using react-trello',
    github: 'https://github.com/corvec/sn-kanban-editor'
  }
].sort((a, b) => a.name > b.name ? 1 : -1);
