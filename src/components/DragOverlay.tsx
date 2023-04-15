import React from 'react';
import {styled} from "goober";
import {frameMediator} from "../mediator";
import {useDrag} from "../hooks/useDrag";

interface Props {
  index: number;
}

const Overlay = styled('div')`
  background-color: transparent;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover {
    border: 1px solid blue;

  }
`;

const DragOverlay = ({index}: Props) => {
  const {dragging, dragIndex} = useDrag();
  const onDragOver = (e) => {
    // console.log(draggingIndex, index);
    if (index !== dragIndex) {
      e.preventDefault();
    }
  };

  const onDrop = () => {
    // console.log(draggingIndex, index);
    useDrag.setState({dragging: false});
    if (index !== dragIndex) {
      frameMediator.swapPositions(index, dragIndex);
    }
  };

  const onChoose = () => {
    useDrag.setState({dragging: false});
    if (index !== dragIndex) {
      frameMediator.swapPositions(index, dragIndex);
    }
  };

  if (dragging) {
    return (
      <Overlay onClick={onChoose} onDragOver={onDragOver} onDrop={onDrop}></Overlay>
    );
  }
}

export default DragOverlay
