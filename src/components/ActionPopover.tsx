import React, {useRef, useState} from 'react';
import {styled} from "goober";
import DotsIcon from "./icons/DotsIcon";
import {useDialog} from "../providers/DialogProvider";
import About from "./About";
import {Editor} from "../definitions";
import {getBuiltInEditor} from "../utils";
import Options from "./Options";
import {useTitle} from "../hooks/useTitle";
import {useLayoutMode} from "../hooks/useLayoutMode";


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
  bottom: 0;
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

const needToWarnUserAboutClearing = (editor: Editor) => {
  if (!editor.custom) {
    const {clears} = getBuiltInEditor(editor.id);
    return clears;
  }
};

const ActionPopover = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>();
  const {custom, confirm} = useDialog();
  const {toggleTitle} = useTitle();

  const openAbout = () => {
    setMenuVisible(false);
    custom(<About/>);
  };

  const changeLayout = () => {
    setMenuVisible(false);
    useLayoutMode.setState({layoutMode: true});
  };
  const toggleOptions = () => {
    setMenuVisible(!menuVisible);
  }
  const cancel = () => {
    setMenuVisible(false);
  };
  return (
    <>
      <ButtonContainer><CircleButton onClick={toggleOptions}><DotsIcon/>

      </CircleButton></ButtonContainer>
      <PopoverContainer ref={popoverRef} className={menuVisible ? 'visible' : ''}>
        <Menu>
          <MenuItem onClick={openAbout}>About</MenuItem>
          <MenuItem onClick={toggleTitle}>Toggle Title</MenuItem>
          {/*<MenuItem onClick={eraseNote}>Erase Note</MenuItem>*/}
          <MenuItem onClick={changeLayout}>Change Layout</MenuItem>
          {/*<MenuItem onClick={openOptions}>Options</MenuItem>*/}
          <MenuItem onClick={cancel}>Cancel</MenuItem>
        </Menu>
      </PopoverContainer>
    </>
  );
};

export default ActionPopover;
