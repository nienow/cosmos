import React from 'react';
import {styled} from "goober";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./EditorCard";
import {useInstalled} from "../hooks/useInstalled";
import {Tag} from "./common/Tag";

export const ClickableEditorCard = styled(EditorCard)`
  cursor: pointer;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;

const AvailableEditors = ({chooseEditor}) => {
  const {installedEditors} = useInstalled();

  return (
    <Editors>
      {
        installedEditors.map(editor => {
          const tag = editor.custom ? <Tag>Custom Added</Tag> : <></>;
          return <ClickableEditorCard key={editor.id} onClick={() => chooseEditor(editor)}>
            <EditorTitle>{editor.name} {tag}</EditorTitle>
            <EditorDesc>{editor.desc}</EditorDesc>
          </ClickableEditorCard>;
        })
      }
    </Editors>
  );
}

export default AvailableEditors
