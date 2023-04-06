import React, {useEffect, useState} from 'react';
import {RandomBitsMeta} from "./definitions";
import {styled} from "goober";
import {frameMediator} from "./mediator";
import EntryScreen from "./components/EntryScreen";

const Container = styled('div')`
  height: 100vh;
  overflow: hidden;
`;

const EntryScreenWrapper = styled('div')`
  height: 100vh;
  overflow-y: auto;
  padding: 0 30px;
`;

const Frame = styled('iframe', React.forwardRef)`
  height: 100%;
  border: 0;
  flex: 1 0 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const FramesWrapper = styled('div')`
  display: flex;
  height: 100%;
`;

// const Header = styled('div')`
//   flex: 0 0 auto;
// `;

// const GridContainer = styled('div')`
//   display: flex;
//   flex-direction: column;
//   flex: 1 1 auto;
// `
//
// const GridRow = styled('div')`
//   border-bottom: 1px solid var(--sn-stylekit-border-color);
//   display: flex;
//   flex: 1 0 auto;
// `
//
// const GridSection = styled('div')`
//   border-right: 1px solid var(--sn-stylekit-border-color);
//   display: flex;
//   flex-direction: column;
//   flex: 1 0 auto;
// `

const App = () => {
  const [meta, setMeta] = useState<RandomBitsMeta>(null);
  const [initialized, setInitialized] = useState(false);
  const onIframeLoad = (i: number, e: any) => {
    frameMediator.setChildWindow(i, e.target.contentWindow);
  };

  useEffect(() => {
    frameMediator.waitForEditor((meta: RandomBitsMeta) => {
      setMeta(meta);
      setInitialized(true);
    });
  }, []);

  const renderContent = () => {
    if (initialized) {
      if (meta.editor) {
        const editors = Array.isArray(meta.editor) ? meta.editor : [meta.editor];
        return <FramesWrapper>
          {editors.map((editor, i) => <>
            <Frame name={`cosmos-frame-${i}`} key={editor.url} onLoad={(e) => onIframeLoad(i, e)} src={editor.url}/>
            {/*<ActionPopover/>*/}
          </>)}
        </FramesWrapper>;
      } else {
        return <EntryScreenWrapper><EntryScreen/></EntryScreenWrapper>
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
