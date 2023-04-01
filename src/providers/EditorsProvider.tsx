import React, {createContext, useContext, useState} from 'react';
import {Editor} from "../definitions";

const EditorsContext = createContext({});

export const useEditors = () => useContext(EditorsContext);

const CUSTOM_EDITORS: Editor[] = JSON.parse(localStorage.getItem('cosmos.custom') || '[]');


export const EditorsProvider = ({children}) => {
  const [customEditors, setCustomEditors] = useState(CUSTOM_EDITORS);

  const addCustomEditor = (editor: Editor) => {
    if (customEditors.find(item => item.id === editor.id)) {
      alert('This custom editor has already been added');
    } else {
      customEditors.push(editor);
      localStorage.setItem('cosmos.custom', JSON.stringify(customEditors));
      setCustomEditors(customEditors.slice());
    }
  };
  const removeCustomEditor = (editor: Editor) => {
    const index = customEditors.findIndex(item => item.id === editor.id);
    if (index >= 0) {
      customEditors.splice(index, 1);
      localStorage.setItem('cosmos.custom', JSON.stringify(customEditors));
      setCustomEditors(customEditors.slice());
    }
  };

  return (
    <EditorsContext.Provider value={{customEditors, addCustomEditor, removeCustomEditor}}>
      {children}
    </EditorsContext.Provider>
  );
};
