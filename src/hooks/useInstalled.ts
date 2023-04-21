import {Editor} from '../definitions';
import {create} from 'zustand';
import {BUILT_IN_EDITORS, PLAIN_EDITOR} from '../editor-list';

const storageString = localStorage.getItem('cosmos.installed');
let installedEditors;
if (storageString) {
  installedEditors = JSON.parse(storageString);
} else {
  installedEditors = BUILT_IN_EDITORS.filter(editor => editor.preinstalled)
    .map(({id, name, desc, url}) => ({id, name, url}));
  localStorage.setItem('cosmos.installed', JSON.stringify(installedEditors));
}

// const sortedInstalledEditors = () => {
//   return [
//     PLAIN_EDITOR,
//     ...installedEditors.sort((a, b) => a.name > b.name ? 1 : -1)
//   ];
// };

interface InstalledState {
  installedEditors: Editor[];
  availableEditors: () => Editor[];
  installEditor: (editor: Editor) => void;
  uninstallEditor: (editor: Editor) => void;
}

export const useInstalled = create<InstalledState>(set => ({
  installedEditors,
  availableEditors: () => {
    const fullEditorData = installedEditors.map(({id}) => {
      return BUILT_IN_EDITORS.find(editor => editor.id === id);
    });
    return [
      PLAIN_EDITOR,
      ...fullEditorData.sort((a, b) => a.name > b.name ? 1 : -1)
    ];
  },
  installEditor: (editor: Editor) => {
    if (installedEditors.find(item => item.id === editor.id)) {
      alert('This editor has already been installed');
    } else {
      installedEditors.push(editor);
      localStorage.setItem('cosmos.installed', JSON.stringify(installedEditors));
      set(() => ({...installedEditors}));
    }
  },
  uninstallEditor: (editor: Editor) => {
    const index = installedEditors.findIndex(item => item.id === editor.id);
    if (index >= 0) {
      installedEditors.splice(index, 1);
      localStorage.setItem('cosmos.installed', JSON.stringify(installedEditors));
      set(() => ({...installedEditors}));
    }
  }
}));
