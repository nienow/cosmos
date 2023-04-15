import React, {createContext, useContext, useState} from 'react';
import {createPortal} from "react-dom";
import {styled} from "goober";
import {useTitle} from "../hooks/useTitle";
import {useDialog} from "./DialogProvider";
import ChangeEditor from "../components/ChangeEditor";
import {frameMediator} from "../mediator";

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
`;

const PopoverContainer = styled('div')`
  background-color: var(--sn-stylekit-background-color);;
  border: 1px solid var(--sn-stylekit-border-color);;
  position: fixed;
`;

const Menu = styled('div')`

`;

const MenuItem = styled('div')`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--sn-stylekit-border-color);

  &:hover {
    background-color: var(--sn-stylekit-contrast-background-color);
  }
`;

interface IPopoverContext {
  popover: (index: number, e: any) => void;
}

const RightClickContext = createContext<IPopoverContext>({
  popover: null,
});

export const useRightClick = () => useContext(RightClickContext);

let currentEvent;
let currentIndex;
export const RightClickProvider = ({children}) => {
  const [open, setOpen] = useState(false);

  const closePopover = () => {
    setOpen(false);
  };

  const popover = (index, e: any) => {
    currentEvent = e;
    console.log(e);
    currentIndex = index;
    setOpen(true);
  };
  const renderPopover = () => {
    const {toggleTitle} = useTitle();
    const {custom} = useDialog();

    const changeEditor = () => {
      const choseEditor = (editor) => {
        frameMediator.changeEditor(currentIndex, editor);
      };
      custom(<ChangeEditor chooseEditor={choseEditor}/>)
    };

    if (open) {

      return createPortal(
        <Overlay onClick={closePopover}>
          <PopoverContainer style={{'top': currentEvent.y + 'px', 'right': currentEvent.x + 'px'}}>
            <Menu>
              <MenuItem onClick={changeEditor}>Change Editor</MenuItem>
              <MenuItem onClick={toggleTitle}>Toggle Title</MenuItem>
            </Menu>
          </PopoverContainer>
        </Overlay>,
        document.body
      );
    }
  };

  return (
    <RightClickContext.Provider value={{popover}}>
      {renderPopover()}
      {children}
    </RightClickContext.Provider>
  );
};
