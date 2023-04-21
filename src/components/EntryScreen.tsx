import React from 'react';
import {styled} from "goober";
import About from "./About";
import AvailableEditors from "./AvailableEditors";
import {frameMediator} from "../mediator";
import {Separator} from "./common/Separator";
import {useOptions} from "../hooks/useOptions";

const Container = styled('div')`

`;

const EntryScreen = () => {

  const chooseEditor = (editor) => {
    frameMediator.changeEditor(0, editor);
    useOptions.setState({showOptions: true});
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
