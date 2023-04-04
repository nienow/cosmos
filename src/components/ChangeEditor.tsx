import React from 'react';
import {styled} from "goober";
import {HeadingText} from "./common/Text";
import AvailableEditors from "./AvailableEditors";

const Container = styled('div')`
`;

const ChangeEditor = ({chooseEditor}) => {
  return (
    <Container>
      <HeadingText>Choose an editor</HeadingText>
      <AvailableEditors chooseEditor={chooseEditor}/>
    </Container>
  );
}

export default ChangeEditor
