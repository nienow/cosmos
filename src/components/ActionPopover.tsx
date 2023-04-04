import React, {useRef, useState} from 'react';
import {styled} from "goober";
import {ActionButton} from "./common/ActionButton";
import DotsIcon from "./icons/DotsIcon";
import {useDialog} from "../providers/DialogProvider";
import About from "./About";
import ManageEditors from "./ManageEditors";
import ChangeEditor from "./ChangeEditor";
import {frameMediator} from "../mediator";

const ButtonContainer = styled('div')`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const CircleButton = styled(ActionButton)`
  position: relative;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

// const SvgWrapper = styled('svg')`
//   fill: var(--sn-stylekit-foreground-color);
// `;
//
// const DotsIcon = styled('image')`
//   width: 20px;
//   fill: var(--sn-stylekit-foreground-color);
// `;

const PopoverContainer = styled('div')`
  display: none;
  background-color: var(--sn-stylekit-background-color);;
  border: 1px solid var(--sn-stylekit-border-color);;
  bottom: 50px;
  right: 0;
  position: absolute;
  min-width: 200px;

  &.visible {
    display: block;
  }
`;

const Menu = styled('div')`

`;

const MenuItem = styled('div')`
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--sn-stylekit-border-color);

  &:hover {
    background-color: var(--sn-stylekit-contrast-background-color);
  }
`;

const ActionPopover = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>();
  const {custom} = useDialog();

  const openAbout = () => {
    custom(<About/>);
  };
  const eraseNote = () => {

  };
  const manageEditors = () => {
    custom(<ManageEditors/>);
  };
  const changeEditor = () => {
    const chooseEditor = (editor) => {
      frameMediator.changeEditor(editor);
      closeEditor();
    };
    const closeEditor = custom(<ChangeEditor chooseEditor={chooseEditor}/>)
  };
  const toggleOptions = () => {
    setMenuVisible(!menuVisible);
  }
  return (
    <ButtonContainer><CircleButton onClick={toggleOptions}><DotsIcon/>
      <PopoverContainer ref={popoverRef} className={menuVisible ? 'visible' : ''}>
        <Menu>
          <MenuItem onClick={openAbout}>About</MenuItem>
          <MenuItem onClick={manageEditors}>Manage Editors</MenuItem>
          <MenuItem onClick={eraseNote}>Erase Note</MenuItem>
          <MenuItem onClick={changeEditor}>Change Editor</MenuItem>
        </Menu>
      </PopoverContainer>
    </CircleButton></ButtonContainer>
  );
};

export default ActionPopover;
