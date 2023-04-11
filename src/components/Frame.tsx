import React from "react";
import {styled} from "goober";
import {frameMediator} from "../mediator";
import {useTitle} from "../hooks/useTitle";
import PlainEditor from "../plain/PlainEditor";
import {useLocked} from "../hooks/useLocked";
import {useLayoutMode} from "../hooks/useLayoutMode";
import {ActionButton} from "./common/ActionButton";
import DotsIcon from "./icons/DotsIcon";
import {useRightClick} from "../providers/RightClickProvider";

const FrameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const FrameTitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  background-color: var(--sn-stylekit-secondary-background-color);
`;

const FrameTitle = styled('input')`
  flex: 1 1 auto;
  border: none;
  outline: none;
  background-color: inherit;
  color: var(--sn-stylekit-foreground-color);
  line-height: 1.4;
  padding: 5px 10px;
  border-bottom: 1px solid var(--sn-stylekit-border-color);
`;

const FrameTitleOptions = styled('div')`
  flex: 0 0 auto;
  width: 20px;
  height: 100%;
  cursor: pointer;
`;

const FrameContent = styled('iframe', React.forwardRef)`
  border: 0;
  flex: 1 1 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
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
      frameMediator.setChildWindow(i, e.target.contentWindow);
    };
    return <FrameContent name={`cosmos-frame-${index}`} key={editor.id + '_' + index} onLoad={(e) => onIframeLoad(index, e)}
                         src={editor.url}/>
  }

};

const RenderTitle = ({index}) => {
  const {title, titles, updateTitles} = useTitle();
  const {locked} = useLocked();
  const updateTitle = (e) => {
    updateTitles(index, e.target.value as string);
  };
  if (title) {
    return <FrameTitleWrapper>
      <FrameTitle disabled={locked} value={titles[index] || ''} onChange={updateTitle}/>
      <FrameTitleOptions><DotsIcon/></FrameTitleOptions>
    </FrameTitleWrapper>
  }
};

const Frame = ({index, editor}) => {
  const {layoutMode} = useLayoutMode();
  const {popover} = useRightClick();

  const rightClick = (e) => {
    e.preventDefault();
    popover(e);
  };

  if (layoutMode) {
    return <FrameWrapper>
      <div>Editor: {editor.name}</div>
      <ActionButton>Change Editor</ActionButton>
      <ActionButton>Delete</ActionButton>
    </FrameWrapper>;
  } else {
    return <FrameWrapper data-frame-index={index} onContextMenu={rightClick}>
      <RenderTitle index={index}/>
      <RenderEditor index={index} editor={editor}/>
    </FrameWrapper>;
  }


};

export default Frame;
