import {Editor} from '../definitions';
import {create} from 'zustand';

const installedEditors = JSON.parse(localStorage.getItem('cosmos.installed') || '[]');

const sortedInstalledEditors = () => {
  return installedEditors.slice().sort((a, b) => a.name > b.name ? 1 : -1);
};

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
      localStorage.setItem('cosmos.installed', JSON.stringify(installedEditors));
      set(() => ({installedEditors: sortedInstalledEditors()}));
    }
  },
  uninstallEditor: (editor: Editor) => {
    const index = installedEditors.findIndex(item => item.id === editor.id);
    if (index >= 0) {
      installedEditors.splice(index, 1);
      localStorage.setItem('cosmos.installed', JSON.stringify(installedEditors));
      set(() => ({installedEditors: sortedInstalledEditors()}));
    }
  }
}));
