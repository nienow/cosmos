import React from 'react';
import {styled} from "goober";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./EditorCard";
import {Editor} from "../definitions";
import {useDialog} from "../providers/DialogProvider";
import {useCustomEditors} from "../hooks/useCustomEditors";

const Container = styled('div')`
  padding: 20px;
`;

const EditorDelete = styled('div')`
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const ManageCustomEditors = ({}) => {
  const {confirm} = useDialog();
  const {customEditors, removeCustomEditor} = useCustomEditors();
  const remove = (editor: Editor) => {
    confirm(`Delete the editor: ${editor.name}?`, () => {
      removeCustomEditor(editor);
    });
  };
  return (
    <Container>
      <h2>Uninstall Editors</h2>
      <Editors>
        {
          customEditors.map(editor => {
            return <EditorCard key={editor.id}>
              <EditorTitle>{editor.name}</EditorTitle>
              <EditorDesc>{editor.desc}</EditorDesc>
              <EditorDelete onClick={() => remove(editor)}>Uninstall</EditorDelete>
            </EditorCard>;
          })
        }
      </Editors>
    </Container>
  );
}

export default ManageCustomEditors
