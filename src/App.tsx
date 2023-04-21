import React, {useEffect, useState} from 'react';
import {RandomBitsMeta} from "./definitions";
import {styled} from "goober";
import {frameMediator} from "./mediator";
import EntryScreen from "./components/EntryScreen";
import Frame from "./components/Frame";
import CornerButton from "./components/CornerButton";
import Options from "./components/Options";

const Container = styled('div')`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;


const GridLayout = styled('div')`
  display: grid;
  grid-auto-rows: 1fr;
  height: 100%;
`;

const App = () => {
  const [meta, setMeta] = useState<RandomBitsMeta>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    frameMediator.waitForEditor((meta: RandomBitsMeta) => {
      setMeta({...meta});
      setInitialized(true);
    });
  }, []);

  const renderContent = () => {


    if (initialized) {
      if (frameMediator.getSize() > 0) {
        const columns = frameMediator.getColumns();
        const editors = frameMediator.getEditors();
        const style = {
          'grid-template-columns': `repeat(${columns}, 1fr)`
        };
        return <>
          <GridLayout style={style}>
            {
              editors.map((editor, index) => {
                editor.key = editor.key || crypto.randomUUID();
                return <Frame key={editor.key} index={index} editor={editor}/>
              })
            }
          </GridLayout>
          <Options/>
          <CornerButton/>
        </>;
      } else {
        return <EntryScreen/>
      }
    }
  };

  return (
    <Container>
      {renderContent()}
    </Container>
  );
}

export default App
