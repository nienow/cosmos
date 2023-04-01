import React from 'react';
import {styled} from "goober";
import {EDITORS} from "../definitions";
import AddEditor from "./AddEditor";
import About from "./About";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./EditorCard";
import {useCustomEditors} from "../hooks/useCustomEditors";
import {HeadingText} from "./Text";

const Container = styled('div')`
  padding: 0 30px;
`;

export const ClickableEditorCard = styled(EditorCard)`
  cursor: pointer;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;


const Separator = styled('div')`
  margin-top: 20px;
  border-top: 1px solid var(--sn-stylekit-border-color);
`;

const EntryScreen = ({changeEditor}) => {
  const {customEditors} = useCustomEditors();

  const allEditors = EDITORS.concat(customEditors);

  return (
    <Container>
      <HeadingText>Choose an editor to get started</HeadingText>
      <Editors>
        {
          allEditors.map(editor => {
            return <ClickableEditorCard key={editor.id} onClick={() => changeEditor(editor)}>
              <EditorTitle>{editor.name}</EditorTitle>
              <EditorDesc>{editor.desc}</EditorDesc>
            </ClickableEditorCard>;
          })
        }
      </Editors>
      <Separator/>
      <AddEditor/>
      <Separator/>
      <About/>

    </Container>
  );
}

export default EntryScreen
