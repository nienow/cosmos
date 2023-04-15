import React, {useRef} from 'react';
import {ActionButton} from "./common/ActionButton";
import {Editor} from "../definitions";
import GearIcon from "./icons/GearIcon";
import {styled} from "goober";
import {frameMediator} from "../mediator";

interface Props {
  index: number;
  editor: Editor;
}

const DragHere = styled('div')`
  width: 30px;
`


const FrameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid var(--sn-stylekit-border-color);

  &.onDragOver {
    border: 1px solid blue;
  }
`;
var currentDragOverFrame;
var draggingIndex;

const LayoutMode = ({index, editor}: Props) => {
  const onDragStart = () => {
    draggingIndex = index;
  };
  const frameRef = useRef<HTMLDivElement>();

  const onDragOver = (e) => {
    e.preventDefault();
    if (currentDragOverFrame !== e.currentTarget) {
      currentDragOverFrame = e.currentTarget;
      e.currentTarget.className += ' onDragOver';
      console.log(index);
    }
  };

  const onDrop = () => {
    frameMediator.swapPositions(index, draggingIndex);
  };
  return (
    <FrameWrapper ref={frameRef} onDragOver={onDragOver} onDrop={onDrop}>
      <div>Editor: {editor.name} {frameMediator.getChildData(index)}</div>
      <ActionButton>Change Editor</ActionButton>
      <ActionButton>Delete</ActionButton>
      <DragHere draggable={true} onDragStart={onDragStart}><GearIcon/> Drag Here</DragHere>
    </FrameWrapper>
  );
}

export default LayoutMode
