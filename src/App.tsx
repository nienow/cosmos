import React, {useEffect, useRef, useState} from 'react';
import EditorChoice from "./components/EditorChoice";
import {Editor} from "./definitions";
import {styled} from "goober";
import {FrameMediator} from "./mediator";
import EntryScreen from "./components/EntryScreen";

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Frame = styled('iframe', React.forwardRef)`
  flex: 1 1 auto;
  width: 100%;
  border: 0;
`;

const Header = styled('div')`
  flex: 0 0 auto;
`;

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
          <Header>
            <EditorChoice value={editor.id} changeEditor={changeEditor}/>
            <button onClick={() => changeEditor(null)}>Clear</button>
          </Header>
          <Frame ref={iframeRef} onLoad={onIframeLoad} src={editor.url}/>
        </>;
      } else {
        return <EntryScreen changeEditor={changeEditor}/>
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
