import React from 'react';
import {styled} from "goober";
import About from "./About";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./EditorCard";
import {useInstalled} from "../hooks/useInstalled";
import {HeadingText} from "./Text";
import {Tag} from "./Tag";
import {ActionButton} from "./ActionButton";
import {useDialog} from "../providers/DialogProvider";
import ManageEditors from "./ManageEditors";

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

const ManageEditorButtons = styled(ActionButton)`
  margin-left: 30px;
`;

const EntryScreen = ({changeEditor}) => {
  const {installedEditors} = useInstalled();
  const {custom} = useDialog();

  const openManageEditors = () => {
    custom(<ManageEditors/>);
  };

  return (
    <Container>
      <HeadingText>Choose an editor<ManageEditorButtons onClick={openManageEditors}>Manage Editors</ManageEditorButtons></HeadingText>
      <Editors>
        {
          installedEditors.map(editor => {
            const tag = editor.custom ? <Tag>Custom Added</Tag> : <></>;
            return <ClickableEditorCard key={editor.id} onClick={() => changeEditor(editor)}>
              <EditorTitle>{editor.name} {tag}</EditorTitle>
              <EditorDesc>{editor.desc}</EditorDesc>
            </ClickableEditorCard>;
          })
        }
      </Editors>
      <Separator/>
      {/*<AddEditor/>*/}
      {/*<Separator/>*/}
      <About/>

    </Container>
  );
}

export default EntryScreen
