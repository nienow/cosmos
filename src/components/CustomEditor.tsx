import React from 'react';
import TextArea from "./TextArea";
import {styled} from "goober";

const Container = styled('div')`
  padding: 20px;
`;

const CustomEditor = ({}) => {
  return (
    <Container>
      <div>Custom Editor</div>
      <TextArea/>
    </Container>
  );
}

export default CustomEditor
