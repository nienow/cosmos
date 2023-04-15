import React, {useState} from "react";
import {styled} from "goober";
import {frameMediator} from "../mediator";
import {useTitle} from "../hooks/useTitle";
import PlainEditor from "../plain/PlainEditor";
import {useLocked} from "../hooks/useLocked";
import {useLayoutMode} from "../hooks/useLayoutMode";
import OptionPopover from "./OptionPopover";
import LayoutMode from "./LayoutMode";
import ArrowsIcon from "./icons/ArrowsIcon";
import DragOverlay from "./DragOverlay";
import {useDrag} from "../hooks/useDrag";

const FrameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid var(--sn-stylekit-border-color);
  position: relative;
`;

const FrameDragOverlay = styled('div')`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
//
// const FrameTitleOptions = styled('div')`
//   flex: 0 0 auto;
//   width: 20px;
//   height: 100%;
//   cursor: pointer;
// `;

const FrameContent = styled('iframe', React.forwardRef)`
  border: 0;
  flex: 1 1 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const FrameDrag = styled('div')`
  flex: 0 0 auto;
  width: 15px;
  padding: 0 10px;
  display: flex;
  align-items: center;
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

// let draggingIndex;
const RenderTitle = ({index, editor}) => {
  const {title, titles, updateTitles} = useTitle();
  const {locked} = useLocked();
  const updateTitle = (e) => {
    updateTitles(index, e.target.value as string);
  };
  const onDragStart = (e) => {
    // const clone = e.target.cloneNode(true);
    setTimeout(() => {
      useDrag.setState({dragging: true, dragIndex: index});

    });
    // draggingIndex = index;
    const ghost = document.getElementById('ghost').cloneNode(true) as HTMLElement;
    ghost.innerText = 'Drop in new position';
    ghost.setAttribute('style', 'padding: 5px; width: 150px; border: 1px solid black');
    // ghost.prepend(clone);
    e.dataTransfer.setDragImage(ghost, 0, 28);
  };
  const startRearrange = () => {
    useDrag.setState({dragging: true, dragIndex: index});
  };
  if (title || true) {
    return <FrameTitleWrapper>
      <FrameTitle disabled={locked} value={titles[index] || editor.name} onChange={updateTitle}/>
      <FrameDrag onClick={startRearrange} draggable={true} onDragStart={onDragStart}><ArrowsIcon/></FrameDrag>
      <OptionPopover index={index}/>
      {/*<FrameTitleOptions onClick={openMenu}><DotsIcon/></FrameTitleOptions>*/}
    </FrameTitleWrapper>
  }
};

const Frame = ({index, editor}) => {
  const {layoutMode} = useLayoutMode();
  const [dragMode, setDragMode] = useState(false);

  // const onDragOver = (e) => {
  //   // console.log(draggingIndex, index);
  //   // if (index !== draggingIndex) {
  //   e.preventDefault();
  //   // }
  // };
  //
  // const onDrop = () => {
  //   // console.log(draggingIndex, index);
  //   if (index !== draggingIndex) {
  //     frameMediator.swapPositions(index, draggingIndex);
  //   }
  // };

  console.log('render frame');

  if (dragMode) {
    return <FrameDragOverlay data-frame-index={index}>

    </FrameDragOverlay>;
  } else if (layoutMode) {
    return <LayoutMode index={index} editor={editor}/>
  } else {
    return <FrameWrapper data-frame-index={index}>
      <RenderTitle index={index} editor={editor}/>
      <RenderEditor index={index} editor={editor}/>
      <DragOverlay index={index}/>
    </FrameWrapper>;
  }


};

export default Frame;
