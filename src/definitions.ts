export const RANDOMBITS_DOMAIN = 'dev.randombits';
export const SN_DOMAIN = 'org.standardnotes.sn';
export const EDITOR_KEY = 'editor';
export const LOCKED_KEY = 'locked';

export interface CosmosData {
  cosmos: true,
  editor: string;
  data: any;
}

export const createNewData = (text?: string): CosmosData => {
  return {
    cosmos: true,
    editor: 'plain',
    data: text || ''
  };
};

export interface Editor {
  id: string;
  url: string;
  name: string;
  desc: string;
}

export const EDITORS: Editor[] = [
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
    desc: 'A drawing editor that uses the Excalidraw library'
  },
  {
    id: 'whiteboard',
    url: 'https://antonheitz.github.io/sn-whiteboard/',
    name: 'Whiteboard',
    desc: 'Uses TLDraw Application'
  },
  {
    id: 'com.dylanonelson.sn-scratch-editor',
    url: 'https://scratch-editor.com',
    name: 'Scratch Editor',
    desc: 'An editor for writing things down.'
  },
  {
    id: 'org.corvec.sn-kanban-editor',
    name: 'Kanban Editor',
    url: 'https://corvec.github.io/sn-kanban-editor/',
    desc: 'Kanban board editor using react-trello'
  }
];
