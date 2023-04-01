import React from 'react';
import {Tldraw, TldrawApp} from '@tldraw/tldraw';
import {styled} from "goober";
import INITIAL_DATA from './draw-init-data.json';

const Container = styled('div')`
  height: 100%;
`;
// return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000; < 128
const DrawEditor = ({initialText, save, isLocked}) => {
  const onPersist = (app: TldrawApp) => {
    save(JSON.stringify(app.document));
  };

  let parsedData;
  try {
    parsedData = JSON.parse(initialText);
    if (!parsedData.id || !parsedData.pages) {
      parsedData = {
        ...INITIAL_DATA,
        version: TldrawApp.version
      };
    }
  } catch (e: any) {
    parsedData = {
      ...INITIAL_DATA,
      version: TldrawApp.version
    };
  }

  return (
    <Container>
      <Tldraw document={parsedData} readOnly={isLocked} showPages={true} showMenu={true} darkMode={true} onPersist={onPersist}/>
    </Container>
  );
};

export default DrawEditor;
