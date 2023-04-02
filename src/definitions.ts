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
  custom?: boolean;
  github?: string;
}
