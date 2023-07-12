import React, {useState} from "react";
import {styled} from "goober";
import {frameMediator} from "../mediator";
import {useTitle} from "../hooks/useTitle";
import PlainEditor from "../plain/PlainEditor";
import {useLocked} from "../hooks/useLocked";
import ArrangeOverlay from "./ArrangeOverlay";
import {useRearrange} from "../hooks/useRearrange";
import ChangeEditor from "./ChangeEditor";
import {useDialog} from "../providers/DialogProvider";
import {useOptions} from "../hooks/useOptions";

const FrameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid var(--sn-stylekit-border-color);
  border-bottom: 1px solid var(--sn-stylekit-border-color);
  position: relative;
`;

const FrameTitleWrapper = styled('div')`
  display: flex;
  align-items: stretch;
  background-color: var(--sn-stylekit-secondary-background-color);
  border-bottom: 1px solid var(--sn-stylekit-border-color);
`;

const FrameTitle = styled('input')`
  width: 100%;
  flex: 1 1 auto;
  border: none;
  outline: none;
  background-color: inherit;
  color: var(--sn-stylekit-foreground-color);
  line-height: 1.4;
  padding: 3px 10px;
`;

const FrameContent = styled('iframe', React.forwardRef)`
  border: 0;
  flex: 1 1 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const TitleButton = styled('div')`
  flex: 0 0 auto;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid var(--sn-stylekit-border-color);

  &:hover {
    background-color: var(--sn-stylekit-background-color);
  }
`;

const EDITOR_COMPONENTS = {
  'plain': PlainEditor
};

const RenderEditor = ({index, editor}) => {
  if (editor.url) {
    const onIframeLoad = (e: any) => {
      frameMediator.setChildWindow(index, editor, e.target.contentWindow);
    };
    return <FrameContent name={`cosmos-frame-${index}`} onLoad={onIframeLoad} src={editor.url}/>
  } else {
    const Editor = EDITOR_COMPONENTS[editor.id];
    if (!Editor) {
      console.error(editor);
    }
    let timeout;
    const save = (text: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        frameMediator.saveChild(index, text);
      }, 300);
    };
    const data = frameMediator.getChildData(index);
    return <Editor initialText={data} save={save} editor={editor}/>
  }
};

// let draggingIndex;
const RenderTitle = ({index, editor}) => {
  const {custom} = useDialog();
  const {showTitle} = useTitle();
  const {locked} = useLocked();
  const {showOptions} = useOptions();
  const [title, setTitle] = useState(typeof editor.title === 'undefined' ? editor.name : editor.title);
  const updateTitle = (e) => {
    setTitle(e.target.value);
    frameMediator.updateTitle(index, e.target.value as string);
  };
  const startRearrange = () => {
    useRearrange.setState({rearranging: true, startIndex: index});
  };
  const changeEditor = () => {
    const choseEditor = (editor) => {
      frameMediator.changeEditor(index, editor);
      closeDialog();
    };
    const closeDialog = custom(<ChangeEditor chooseEditor={choseEditor}/>)
  };

  const renderButtons = () => {
    if (showOptions && !locked) {
      return <>
        <TitleButton onClick={startRearrange}>Move</TitleButton>
        <TitleButton onClick={changeEditor}>Change</TitleButton>
      </>;
    }
  };

  if (showTitle || showOptions) {
    return <FrameTitleWrapper>
      <FrameTitle disabled={locked} value={title} onChange={updateTitle}/>
      {renderButtons()}
    </FrameTitleWrapper>
  }
};

const Frame = ({index, editor}) => {
  return <FrameWrapper data-frame-index={index}>
    <RenderTitle index={index} editor={editor}/>
    <RenderEditor index={index} editor={editor}/>
    <ArrangeOverlay index={index}/>
  </FrameWrapper>;
};

export default Frame;
