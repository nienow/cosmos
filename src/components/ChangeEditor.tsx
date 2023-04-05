import React from 'react';
import {styled} from "goober";
import AvailableEditors from "./AvailableEditors";

const Container = styled('div')`
`;

const ChangeEditor = ({chooseEditor}) => {
  return (
    <Container>
      <AvailableEditors chooseEditor={chooseEditor}/>
    </Container>
  );
}

export default ChangeEditor
