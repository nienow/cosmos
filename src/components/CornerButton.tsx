import React from 'react';
import {styled} from "goober";
import DotsIcon from "./icons/DotsIcon";
import {useOptions} from "../hooks/useOptions";
import {useLocked} from "../hooks/useLocked";


const ButtonContainer = styled('div')`
  position: fixed;
  bottom: -10px;
  right: -20px;
  width: 70px;
  height: 30px;
  border-top: 1px solid var(--sn-stylekit-border-color);
  background-color: var(--sn-stylekit-contrast-background-color);
  transform: rotate(-45deg);
  text-align: center;

`;

const CircleButton = styled('div')`
  position: relative;
  cursor: pointer;
  transform: rotate(0deg);
  width: 30px;
  margin-top: -5px;
  margin-left: 25px;
`;

const CornerButton = () => {
  const {toggleOptions} = useOptions();
  const {locked} = useLocked();

  if (!locked) {
    return (
      <ButtonContainer>
        <CircleButton onClick={toggleOptions}><DotsIcon/></CircleButton>
      </ButtonContainer>
    );
  }

};

export default CornerButton;
