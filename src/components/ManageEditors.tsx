import React from 'react';
import {styled} from "goober";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./EditorCard";
import {Editor} from "../definitions";
import {useDialog} from "../providers/DialogProvider";
import {useInstalled} from "../hooks/useInstalled";
import {Tag} from "./Tag";
import {BUILT_IN_EDITORS} from "../built-in-editors";
import InstallCustom from "./InstallCustom";

const Container = styled('div')`
`;

const EditorAction = styled('div')`
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const ManageEditors = ({}) => {
  const {confirm} = useDialog();
  const {installedEditors, installEditor, uninstallEditor} = useInstalled();
  const remove = (editor: Editor) => {
    confirm(`Uninstall the editor: ${editor.name}?`, () => {
      uninstallEditor(editor);
    });
  };

  const install = (editor: Editor) => {
    installEditor(editor);
  };

  const availableEditors = BUILT_IN_EDITORS.filter(editor => {
    return !installedEditors.find(installedEditor => installedEditor.id === editor.id);
  });

  return (
    <Container>
      <h2>Installed Editors</h2>
      <Editors>
        {
          installedEditors.map(editor => {
            const tag = editor.custom ? <Tag>Custom Added</Tag> : <></>;
            return <EditorCard key={editor.id}>
              <EditorTitle>{editor.name} {tag}</EditorTitle>
              <EditorDesc>{editor.desc}</EditorDesc>
              <EditorAction onClick={() => remove(editor)}>Uninstall</EditorAction>
            </EditorCard>;
          })
        }
      </Editors>
      <h2>Available Editors</h2>
      <Editors>
        {
          availableEditors.map(editor => {
            return <EditorCard key={editor.id}>
              <EditorTitle>{editor.name}</EditorTitle>
              <EditorDesc>{editor.desc}</EditorDesc>
              <EditorAction onClick={() => install(editor)}>Install</EditorAction>
            </EditorCard>;
          })
        }
      </Editors>
      <InstallCustom/>
    </Container>
  );
}

export default ManageEditors
