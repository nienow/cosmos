import React from 'react';
import {styled} from "goober";
import INITIAL_DATA from './sketch-init-data.json';
import {Excalidraw} from "@excalidraw/excalidraw";

const Container = styled('div')`
  height: 100%;
`;
// return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000; < 128
const SketchEditor = ({initialText, save, isLocked}) => {
  const onPersist = (elements, appState) => {
    save(JSON.stringify({elements, appState}));
  };

  let parsedData;
  try {
    parsedData = JSON.parse(initialText);
    if (!parsedData.elements || !parsedData.appState) {
      parsedData = {
        ...INITIAL_DATA
      };
    }
  } catch (e: any) {
    parsedData = {
      ...INITIAL_DATA
    };
  }

  return (
    <Container>
      <Excalidraw initialData={parsedData} onChange={onPersist} viewModeEnabled={isLocked}/>
    </Container>
  );
};

export default SketchEditor;
