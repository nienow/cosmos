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
`;

const EntryScreenWrapper = styled('div')`
  height: 100vh;
  overflow-y: auto;
  padding: 0 30px;
`;

// const FrameWrapper = styled('div')`
//   display: flex;
//   flex-direction: column;
//   flex: 1 0 auto;
// `;
//
// const FrameTitle = styled('input')`
//   border: none;
//   background-color: var(--sn-stylekit-secondary-background-color);
//   outline: none;
//   color: var(--sn-stylekit-foreground-color);
//   line-height: 1.4;
//   padding: 10px;
// `;
//
// const Frame = styled('iframe', React.forwardRef)`
//   border: 0;
//   flex: 1 1 auto;
//   border-right: 1px solid var(--sn-stylekit-border-color);
// `;

const FramesWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled('div')`
  border-bottom: 1px solid var(--sn-stylekit-border-color);
  display: flex;
  flex: 1;
`

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
  // const onIframeLoad = (i: number, e: any) => {
  //   frameMediator.setChildWindow(i, e.target.contentWindow);
  // };

  useEffect(() => {
    frameMediator.waitForEditor((meta: RandomBitsMeta) => {
      setMeta({...meta});
      setInitialized(true);
    });
  }, []);

  const renderContent = () => {


    if (initialized) {
      if (meta.editor) {
        const columns = frameMediator.getColumns();
        const rows = frameMediator.getRows();
        const editors = frameMediator.getEditors();
        return <FramesWrapper>
          {
            [...Array(rows)].map((_, i) => {
              return <Row key={i}>
                {
                  [...Array(columns)].map((_, j) => {
                    const index = i * columns + j;
                    const editor = editors[index];
                    return <Frame key={Math.random()} index={index} editor={editor}/>
                  })
                }
              </Row>
            })
          }
          <Options/>
          <CornerButton/>

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
