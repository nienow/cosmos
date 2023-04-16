import React from "react";
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
  position: relative;
`;

const FrameTitleWrapper = styled('div')`
  display: flex;
  align-items: stretch;
  background-color: var(--sn-stylekit-secondary-background-color);
  border-bottom: 1px solid var(--sn-stylekit-border-color);
`;

const FrameTitle = styled('input')`
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

const RenderEditor = ({index, editor}) => {
  if (editor.id === 'plain') {
    const save = (text: string) => {
      frameMediator.saveChild(index, text);
    };
    const data = frameMediator.getChildData(index);
    return <PlainEditor initialText={data} save={save}/>
  } else {
    const onIframeLoad = (i: number, e: any) => {
      frameMediator.setChildWindow(i, editor, e.target.contentWindow);
    };
    return <FrameContent name={`cosmos-frame-${index}`} key={editor.id + '_' + index} onLoad={(e) => onIframeLoad(index, e)}
                         src={editor.url}/>
  }

};

// let draggingIndex;
const RenderTitle = ({index, editor}) => {
  const {custom} = useDialog();
  const {title, titles, updateTitles} = useTitle();
  const {locked} = useLocked();
  const {showOptions} = useOptions();
  const updateTitle = (e) => {
    updateTitles(index, e.target.value as string);
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

  if (title || showOptions) {
    return <FrameTitleWrapper>
      <FrameTitle disabled={locked} value={titles[index] || editor.name} onChange={updateTitle}/>
      {renderButtons()}
      {/*<OptionPopover index={index}/>*/}
      {/*<FrameTitleOptions onClick={openMenu}><DotsIcon/></FrameTitleOptions>*/}
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
