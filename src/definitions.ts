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
    desc: ''
  },
  {
    id: 'whiteboard',
    url: 'https://antonheitz.github.io/sn-whiteboard/',
    name: 'Whiteboard',
    desc: 'Uses TLDraw Application'
  },
  {
    id: 'template',
    // url: 'https://nienow.github.io/sn-extension-template/',
    url: 'http://localhost:8081/',
    name: 'Template',
    desc: ''
  },
  {
    id: 'scratch',
    url: 'https://scratch-editor.com',
    name: 'Scratch',
    desc: ''
  }
];
