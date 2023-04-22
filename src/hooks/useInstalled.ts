import {Editor} from '../definitions';
import {create} from 'zustand';
import {BUILT_IN_EDITORS} from '../editor-list';

const sortedInstalledEditors = (): Editor[] => {
  return installedEditors.slice().sort((a, b) => a.name > b.name ? 1 : -1);
};

const saveToStorage = () => {
  const editorsToSave = installedEditors.map(({id, name, url, desc, custom}) => {
    if (custom) {
      return {id, name, url, desc, custom};
    } else {
      return {id, name, url};
    }
  });
  localStorage.setItem('cosmos.installed', JSON.stringify(editorsToSave));
};

// initialize from storage
const storageString = localStorage.getItem('cosmos.installed');
let installedEditors;
if (storageString) {
  const reducedInfo = JSON.parse(storageString);
  installedEditors = reducedInfo.map(item => {
    if (item.custom) {
      return item;
    } else {
      return BUILT_IN_EDITORS.find(editor => editor.id === item.id) || item;
    }
  });
} else {
  installedEditors = BUILT_IN_EDITORS.filter(editor => editor.preinstalled);
  saveToStorage();
}

interface InstalledState {
  installedEditors: Editor[];
  installEditor: (editor: Editor) => void;
  uninstallEditor: (editor: Editor) => void;
}

export const useInstalled = create<InstalledState>(set => ({
  installedEditors: sortedInstalledEditors(),
  installEditor: (editor: Editor) => {
    if (installedEditors.find(item => item.id === editor.id)) {
      alert('This editor has already been installed');
    } else {
      installedEditors.push(editor);
      saveToStorage();
      set(() => ({installedEditors: sortedInstalledEditors()}));
    }
  },
  uninstallEditor: (editor: Editor) => {
    const index = installedEditors.findIndex(item => item.id === editor.id);
    if (index >= 0) {
      installedEditors.splice(index, 1);
      saveToStorage();
      set(() => ({installedEditors: sortedInstalledEditors()}));
    }
  }
}));
