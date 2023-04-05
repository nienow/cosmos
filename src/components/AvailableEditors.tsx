import React from 'react';
import {styled} from "goober";
import {EditorCard, EditorDesc, Editors, EditorTitle} from "./common/EditorCard";
import {useInstalled} from "../hooks/useInstalled";
import {Tag} from "./common/Tag";
import {HeadingText} from "./common/Text";
import {ActionButton} from "./common/ActionButton";
import {useDialog} from "../providers/DialogProvider";
import ManageEditors from "./ManageEditors";

export const ClickableEditorCard = styled(EditorCard)`
  cursor: pointer;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;

const ManageEditorButtons = styled(ActionButton)`
  margin-left: 30px;
`;

const AvailableEditors = ({chooseEditor}) => {
  const {installedEditors} = useInstalled();
  const {custom} = useDialog();

  const openManageEditors = () => {
    custom(<ManageEditors/>);
  };

  return (
    <>
      <HeadingText>Choose an editor <ManageEditorButtons onClick={openManageEditors}>Manage Editors</ManageEditorButtons></HeadingText>
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
    </>
  );
}

export default AvailableEditors
