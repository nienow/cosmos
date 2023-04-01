import {Editor} from '../definitions';
import {create} from 'zustand';

const customEditors: Editor[] = JSON.parse(localStorage.getItem('cosmos.custom') || '[]');

interface CustomEditorsState {
  customEditors: Editor[];
  addCustomEditor: (editor: Editor) => void;
  removeCustomEditor: (editor: Editor) => void;
}

export const useCustomEditors = create<CustomEditorsState>((set) => ({
  customEditors,
  addCustomEditor: (editor: Editor) => {
    if (customEditors.find(item => item.id === editor.id)) {
      alert('This custom editor has already been added');
    } else {
      customEditors.push(editor);
      localStorage.setItem('cosmos.custom', JSON.stringify(customEditors));
      set(() => ({customEditors: customEditors.slice()}));
    }
  },
  removeCustomEditor: (editor: Editor) => {
    const index = customEditors.findIndex(item => item.id === editor.id);
    if (index >= 0) {
      customEditors.splice(index, 1);
      localStorage.setItem('cosmos.custom', JSON.stringify(customEditors));
      set(() => ({customEditors: customEditors.slice()}));
    }
  }
}));
