import React from 'react';
import {styled} from "goober";
import {frameMediator} from "../mediator";
import {useRearrange} from "../hooks/useRearrange";

interface Props {
  index: number;
}

const Overlay = styled('div')`
  background-color: var(--sn-stylekit-background-color);
  display: flex;
  align-items: center;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;

  &:hover {
    background-color: var(--sn-stylekit-contrast-background-color);
  }
`;

const MoveHere = styled('div')`
  flex: 1 1 auto;
`;

const ArrangeOverlay = ({index}: Props) => {
  const {rearranging, startIndex} = useRearrange();

  const onChoose = () => {
    useRearrange.setState({rearranging: false});
    if (index !== startIndex) {
      frameMediator.swapPositions(index, startIndex);
    }
  };

  if (rearranging) {
    return (
      <Overlay onClick={onChoose}>
        <MoveHere>Move Here</MoveHere>
      </Overlay>
    );
  }
}

export default ArrangeOverlay
