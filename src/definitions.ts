export const RANDOMBITS_DOMAIN = 'dev.randombits';
export const EDITOR_KEY = 'editor';

export interface Editor {
  id: string;
  url?: string;
  name: string;
  desc: string;
  custom?: boolean;
  github?: string;
  clears?: boolean;
  key?: string;
  title?: string;
  cat?: string;
  preinstalled?: boolean;
}

export interface RandomBitsMeta {
  columns?: number;
  editors?: Editor[];
  showTitle?: boolean;
  // titles?: string[];
}
