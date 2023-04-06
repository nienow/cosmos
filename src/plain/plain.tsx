import React from 'react';

import {createRoot} from "react-dom/client";
import ComponentRelay from "@standardnotes/component-relay";
import {AppDataField} from "@standardnotes/models";
import PlainEditor from "./PlainEditor";
import {setup} from "goober";
import '../stylesheets/main.scss';


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

window.addEventListener('message', (e: MessageEvent) => {
  console.log('plain: ', e);
});

componentRelay.streamContextItem((note) => {
  console.log('plain', note);
  currentNote = note;
  // Only update UI on non-metadata updates.
  if (note.isMetadataUpdate) {
    return;
  }
  const text = note.content?.text || '';
  const isLocked = componentRelay.getItemAppDataValue(note, AppDataField.Locked);

  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <PlainEditor initialText={text} save={save} isLocked={isLocked}/>
    </React.StrictMode>
  );
});

const save = (text) => {
  componentRelay.saveItemWithPresave(currentNote, () => {
    currentNote.content.text = text;
    currentNote.content.preview_plain = text;
  });
};
