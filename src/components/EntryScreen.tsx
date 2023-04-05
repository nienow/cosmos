import React from 'react';
import {styled} from "goober";
import About from "./About";
import {EditorCard} from "./common/EditorCard";
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

const EntryScreen = () => {

  const chooseEditor = (editor) => {
    frameMediator.changeEditor(editor);
  };

  return (
    <Container>
      <AvailableEditors chooseEditor={chooseEditor}/>
      <Separator/>
      <About/>

    </Container>
  );
}

export default EntryScreen
