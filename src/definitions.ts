export const RANDOMBITS_DOMAIN = 'dev.randombits';
export const EDITOR_KEY = 'editor';

export interface Editor {
  id: string;
  url: string;
  name: string;
  desc: string;
  custom?: boolean;
  github?: string;
  clears?: boolean;
}

export interface RandomBitsMeta {
  columns?: number;
  editor?: Editor[] | Editor;
  title?: boolean;
}
