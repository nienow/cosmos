import React from 'react';

import './stylesheets/main.scss';
import {createRoot} from "react-dom/client";
import {EditorProvider} from "./providers/EditorProvider";
import ComponentRelay from "@standardnotes/component-relay";
import {AppDataField} from "@standardnotes/models";
import {setup} from "goober";

setup(React.createElement);


let currentNote;

const componentRelay = new ComponentRelay({
  targetWindow: window,
  options: {
    coallesedSaving: true,
    coallesedSavingDelay: 400,
    debug: true
  }
});

componentRelay.streamContextItem((note) => {
  currentNote = note;
  // Only update UI on non-metadata updates.
  if (note.isMetadataUpdate) {
    return;
  }
  const text = note.content?.text || '';
  const isLocked = componentRelay.getItemAppDataValue(note, AppDataField.Locked);

  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <EditorProvider text={text} save={save} isLocked={isLocked}/>
    </React.StrictMode>
  );
});

const save = (data: any) => {
  componentRelay.saveItemWithPresave(currentNote, () => {
    currentNote.content.text = JSON.stringify(data);
    currentNote.content.preview_plain = data.text;
  });
};
