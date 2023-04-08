import React from "react";
import {styled} from "goober";
import {frameMediator} from "../mediator";

const FrameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const FrameTitle = styled('input')`
  border: none;
  background-color: var(--sn-stylekit-secondary-background-color);
  outline: none;
  color: var(--sn-stylekit-foreground-color);
  line-height: 1.4;
  padding: 10px;
`;

const FrameContent = styled('iframe', React.forwardRef)`
  border: 0;
  flex: 1 1 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const Frame = ({index, editor}) => {
  const onIframeLoad = (i: number, e: any) => {
    frameMediator.setChildWindow(i, e.target.contentWindow);
  };
  return <FrameWrapper>
    {frameMediator.getTitle() ? <FrameTitle value="blah"/> : <></>}
    <FrameContent name={`cosmos-frame-${index}`} key={Math.random()} onLoad={(e) => onIframeLoad(index, e)} src={editor.url}/>
  </FrameWrapper>;
};

export default Frame;
