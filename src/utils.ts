import {Editor} from './definitions';
import {BUILT_IN_EDITORS} from './built-in-editors';

export const getBuiltInEditor = (editorId: string): Editor => {
  return BUILT_IN_EDITORS.find(editor => editor.id === editorId);
};
