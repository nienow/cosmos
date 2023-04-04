import React, {useEffect, useRef, useState} from 'react';
import {Editor} from "./definitions";
import {styled} from "goober";
import {FrameMediator} from "./mediator";
import ActionPopover from "./components/ActionPopover";
import EntryScreen from "./components/EntryScreen";

const Container = styled('div')`
  height: 100vh;
  overflow: hidden;
`;

const EntryScreenWrapper = styled('div')`
  padding: 0 30px;
`;

const Frame = styled('iframe', React.forwardRef)`
  height: 100%;
  width: 100%;
  border: 0;
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

interface Props {
  mediator: FrameMediator;
}

const App = ({mediator}: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const [editor, setEditor] = useState<Editor>(null);
  const [initialized, setInitialized] = useState(false);
  const onIframeLoad = () => {
    mediator.setChildWindow(iframeRef.current.contentWindow);
  };

  useEffect(() => {
    mediator.waitForEditor((editor: Editor) => {
      setEditor(editor);
      setInitialized(true);
    });
  }, []);

  const changeEditor = (newEditor: Editor) => {
    setEditor(newEditor);
    setInitialized(true);
    mediator.changeEditor(newEditor);
  };

  const renderContent = () => {
    if (initialized) {
      if (editor?.url) {
        return <>
          <Frame ref={iframeRef} onLoad={onIframeLoad} src={editor.url}/>
          <ActionPopover/>
        </>;
      } else {
        return <EntryScreenWrapper><EntryScreen changeEditor={changeEditor}/></EntryScreenWrapper>
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
