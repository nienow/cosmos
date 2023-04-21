import React from 'react';
import {styled} from "goober";
import About from "./About";
import AvailableEditors from "./AvailableEditors";
import {frameMediator} from "../mediator";
import {useOptions} from "../hooks/useOptions";
import {Card} from "./common/Card";

const Container = styled('div')`
  background-color: var(--sn-stylekit-contrast-background-color);

  height: 100vh;
  overflow-y: auto;
  padding: 0 30px;
`;

const EntryScreen = () => {

  const chooseEditor = (editor) => {
    frameMediator.changeEditor(0, editor);
    useOptions.setState({showOptions: true});
  };

  return (
    <Container>
      <Card>
        <AvailableEditors chooseEditor={chooseEditor}/>
      </Card>
      <Card>
        <About/>
      </Card>

    </Container>
  );
}

export default EntryScreen
