import React, {useState} from 'react';
import {styled} from "goober";
import {useDialog} from "../providers/DialogProvider";
import About from "./About";
import GearIcon from "./icons/GearIcon";
import ChangeEditor from "./ChangeEditor";
import {frameMediator} from "../mediator";


const ButtonContainer = styled('div')`
  position: relative;
  width: 15px;
  padding: 0 10px;
  //height: 100%;
  cursor: pointer;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

// const CircleButton = styled('div')`
//   position: relative;
//   cursor: pointer;
//   transform: rotate(0deg);
//   width: 15px;
// `;

const Overlay = styled('div')`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;

  &.visible {
    display: block;
  }
`;

const PopoverContainer = styled('div')`
  display: none;
  background-color: var(--sn-stylekit-background-color);;
  border: 1px solid var(--sn-stylekit-border-color);;
  top: 0;
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
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--sn-stylekit-border-color);

  &:hover {
    background-color: var(--sn-stylekit-contrast-background-color);
  }
`;

const OptionPopover = ({index}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const {custom} = useDialog();
  // const {toggleTitle} = useTitle();

  const openAbout = (e) => {
    e.stopPropagation();
    setMenuVisible(false);
    custom(<About/>);
  };
  // const eraseNote = () => {
  //   setMenuVisible(false);
  //   confirm('Are you sure you want erase this note?', () => {
  //     // frameMediator.eraseNote();
  //   })
  // };

  // useEffect(() => {
  //   const iframe = document.getElementById('cosmos-editor') as HTMLIFrameElement;
  //   iframe.contentWindow.document.addEventListener('click', () => {
  //     console.log('click');
  //     setMenuVisible(false);
  //
  //   });
  // }, []);

  // const changeLayout = () => {
  //   useLayoutMode.setState({layoutMode: true});
  // };
  // const openOptions = () => {
  //   custom(<Options/>)
  // };
  const toggleOptions = () => {
    setMenuVisible(true);
  }
  const cancel = () => {
    setMenuVisible(false);
  };

  const changeEditor = () => {
    const choseEditor = (editor) => {
      frameMediator.changeEditor(index, editor);
      closeDialog();
    };
    const closeDialog = custom(<ChangeEditor chooseEditor={choseEditor}/>)
  };

  const deleteSection = () => {
    frameMediator.deleteSection(index);
  };

  const removeColumn = () => {
    frameMediator.deleteColumn(index);
  };

  const removeRow = () => {
    frameMediator.deleteRow(index);
  };

  return (
    <>
      <Overlay onClick={cancel} className={menuVisible ? 'visible' : ''}/>
      <ButtonContainer onClick={toggleOptions}><GearIcon/>

        <PopoverContainer className={menuVisible ? 'visible' : ''}>
          <Menu>
            <MenuItem onClick={changeEditor}>Change Editor</MenuItem>
            <MenuItem onClick={deleteSection}>Delete Section</MenuItem>
            <MenuItem onClick={openAbout}>Add Column to the Left</MenuItem>
            <MenuItem onClick={openAbout}>Add Column to the Right</MenuItem>
            <MenuItem onClick={openAbout}>Add Row Above</MenuItem>
            <MenuItem onClick={openAbout}>Add Row Below</MenuItem>
            <MenuItem onClick={removeColumn}>Remove Column</MenuItem>
            <MenuItem onClick={removeRow}>Remove Row</MenuItem>
          </Menu>
        </PopoverContainer>

      </ButtonContainer>

    </>
  );
};

export default OptionPopover;
