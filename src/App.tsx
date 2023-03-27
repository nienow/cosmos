import React, {useEffect, useRef, useState} from 'react';
import EditorChoice from "./components/EditorChoice";
import {EDITORS} from "./definitions";
import {styled} from "goober";
import {FrameMediator} from "./mediator";

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

interface Props {
  mediator: FrameMediator;
}

const App = ({mediator}: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const [editorId, setEditorId] = useState('');
  const onIframeLoad = () => {
    mediator.setChildWindow(iframeRef.current.contentWindow);
  };

  useEffect(() => {
    mediator.waitForEditor((editor: string) => {
      setEditorId(editor);
    });
  }, []);

  const changeEditor = (newEditor: string) => {
    setEditorId(newEditor);
    mediator.changeEditor(newEditor);
  };

  const renderContent = () => {
    const editor = EDITORS.find(editor => editor.id === editorId);
    if (editor) {
      return <Frame ref={iframeRef} onLoad={onIframeLoad} src={editor.url}/>;
    } else {
      return <div>Loading...</div>
    }
  };

  return (
    <Container>
      <EditorChoice value={editorId} changeEditor={changeEditor}/>
      {renderContent()}
    </Container>
  );
}

export default App
