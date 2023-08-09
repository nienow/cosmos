import {Editor} from '../definitions';
import {create} from 'zustand';
import {BUILT_IN_EDITORS} from '../editor-list';
import {frameMediator} from '../mediator';

const sortedInstalledEditors = (installedEditors): Editor[] => {
  return installedEditors.slice().sort((a, b) => a.name > b.name ? 1 : -1);
};

const saveToStorage = (installedEditors) => {
  const editorsToSave = installedEditors.map(({id, name, url, desc, custom}) => {
    if (custom) {
      return {id, name, url, desc, custom};
    } else {
      return {id, name, url};
    }
  });

  frameMediator.setInstalled(editorsToSave);
};

interface InstalledState {
  installedEditors: Editor[];
  initInstalled: (data: any) => void;
  installEditor: (editor: Editor) => void;
  uninstallEditor: (editor: Editor) => void;
}

export const useInstalled = create<InstalledState>(set => ({
  installedEditors: [],
  initInstalled: (data) => {
    let installedEditors;
    if (data) {
      installedEditors = data.map(item => {
        if (item.custom) {
          return item;
        } else {
          return BUILT_IN_EDITORS.find(editor => editor.id === item.id) || item;
        }
      });
    } else {
      installedEditors = BUILT_IN_EDITORS.filter(editor => editor.preinstalled);
      saveToStorage(installedEditors);
    }
    set(() => ({installedEditors: sortedInstalledEditors(installedEditors)}));
  },
  installEditor: (editor: Editor) => {
    set(({installedEditors}) => {
      if (installedEditors.find(item => item.id === editor.id)) {
        alert('This editor has already been installed');
      } else {
        installedEditors.push(editor);
        saveToStorage(installedEditors);
      }
      return {installedEditors: sortedInstalledEditors(installedEditors)};
    });
  },
  uninstallEditor: (editor: Editor) => {
    set(({installedEditors}) => {
      const index = installedEditors.findIndex(item => item.id === editor.id);
      if (index >= 0) {
        installedEditors.splice(index, 1);
        saveToStorage(installedEditors);
      }
      return {installedEditors: sortedInstalledEditors(installedEditors)};
    });
  }
}));
