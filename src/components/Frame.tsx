import React from "react";
import {styled} from "goober";
import {frameMediator} from "../mediator";
import {useTitle} from "../hooks/useTitle";
import PlainEditor from "../plain/PlainEditor";
import {useLocked} from "../hooks/useLocked";

const FrameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const FrameTitle = styled('input')`
  border: none;
  background-color: var(--sn-stylekit-secondary-background-color);
  outline: none;
  color: var(--sn-stylekit-foreground-color);
  line-height: 1.4;
  padding: 5px 10px;
  border-bottom: 1px solid var(--sn-stylekit-border-color);
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

const Frame = ({index, editor}) => {
  const {title, titles, updateTitles} = useTitle();
  const {locked} = useLocked();
  const updateTitle = (e) => {
    updateTitles(index, e.target.value as string);
  };
  return <FrameWrapper>
    {title ? <FrameTitle disabled={locked} value={titles[index] || ''} onChange={updateTitle}/> : <></>}
    <RenderEditor index={index} editor={editor}/>
  </FrameWrapper>;
};

export default Frame;
