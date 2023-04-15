import React from 'react';
import {styled} from "goober";
import {useOptions} from "../hooks/useOptions";
import {useLocked} from "../hooks/useLocked";
import LeftIcon from "./icons/LeftIcon";
import RightIcon from "./icons/RightIcon";


const ButtonContainer = styled('div')`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 34px;
  border: 1px solid var(--sn-stylekit-border-color);
  background-color: var(--sn-stylekit-contrast-background-color);
  text-align: center;
  display: flex;
  align-items: center;
`;

const CircleButton = styled('div')`
  cursor: pointer;
  flex: 1;
  padding: 2px;
`;

const CornerButton = () => {
  const {showOptions, toggleOptions} = useOptions();
  const {locked} = useLocked();

  const icon = showOptions ? <RightIcon/> : <LeftIcon/>;

  if (!locked) {
    return (
      <ButtonContainer title="Show Options">
        <CircleButton onClick={toggleOptions}>{icon}</CircleButton>
      </ButtonContainer>
    );
  }

};

export default CornerButton;
