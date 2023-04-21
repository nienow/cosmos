import React from 'react';
import {styled} from "goober";
import AvailableEditors from "./AvailableEditors";
import {Card} from "./common/Card";

const Container = styled('div')`
`;

const ChangeEditor = ({chooseEditor}) => {
  return (
    <Container>
      <Card>
        <AvailableEditors chooseEditor={chooseEditor}/>
      </Card>
    </Container>
  );
}

export default ChangeEditor
