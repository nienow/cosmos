import React from 'react';
import {styled} from "goober";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./EditorCard";
import {useInstalled} from "../hooks/useInstalled";
import {HeadingText} from "./Text";
import {Tag} from "./Tag";

const Container = styled('div')`
`;

export const ClickableEditorCard = styled(EditorCard)`
  cursor: pointer;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;

const ChangeEditor = () => {
  const {installedEditors} = useInstalled();

  return (
    <Container>
      <HeadingText>Choose an editor</HeadingText>
      <Editors>
        {
          installedEditors.map(editor => {
            const tag = editor.custom ? <Tag>Custom Added</Tag> : <></>;
            return <ClickableEditorCard key={editor.id} onClick={() => {
            }}>
              <EditorTitle>{editor.name} {tag}</EditorTitle>
              <EditorDesc>{editor.desc}</EditorDesc>
            </ClickableEditorCard>;
          })
        }
      </Editors>
    </Container>
  );
}

export default ChangeEditor
