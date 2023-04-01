import React from 'react';

import {createRoot} from "react-dom/client";
import ComponentRelay from "@standardnotes/component-relay";
import {AppDataField} from "@standardnotes/models";
import {setup} from "goober";
import '../stylesheets/main.scss';
import SketchEditor from "./SketchEditor";

// setup goober
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

  console.log('rendering');
  try {
    createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <SketchEditor initialText={text} save={save} isLocked={isLocked}/>
      </React.StrictMode>
    );
  } catch (e) {
    console.log(e);
  }

});


const save = (text) => {
  componentRelay.saveItemWithPresave(currentNote, () => {
    currentNote.content.text = text;
    currentNote.content.preview_plain = text;
  });
};
