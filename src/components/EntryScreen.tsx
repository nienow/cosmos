import React from 'react';
import {styled} from "goober";
import About from "./About";
import {EditorCard} from "./EditorCard";
import {HeadingText} from "./common/Text";
import {ActionButton} from "./common/ActionButton";
import {useDialog} from "../providers/DialogProvider";
import ManageEditors from "./ManageEditors";
import AvailableEditors from "./AvailableEditors";
import {frameMediator} from "../mediator";
import {Separator} from "./common/Separator";

const Container = styled('div')`

`;

export const ClickableEditorCard = styled(EditorCard)`
  cursor: pointer;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;


const ManageEditorButtons = styled(ActionButton)`
  margin-left: 30px;
`;

const EntryScreen = () => {
  const {custom} = useDialog();

  const openManageEditors = () => {
    custom(<ManageEditors/>);
  };

  const chooseEditor = (editor) => {
    frameMediator.changeEditor(editor);
  };

  return (
    <Container>
      <HeadingText>Choose an editor<ManageEditorButtons onClick={openManageEditors}>Manage Editors</ManageEditorButtons></HeadingText>
      <AvailableEditors chooseEditor={chooseEditor}/>
      <Separator/>
      <About/>

    </Container>
  );
}

export default EntryScreen
