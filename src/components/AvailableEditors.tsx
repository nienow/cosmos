import {styled} from "goober";
import {ListCell, ListRow, ListTitle, TableList} from "./common/EditorList";
import {ActionButton} from "./common/ActionButton";
import {useDialog} from "../providers/DialogProvider";
import ManageEditors from "./ManageEditors";
import {CardTitle, OverflowingCard} from "./common/Card";
import {useInstalled} from "../hooks/useInstalled";
import {PLAIN_EDITOR} from "../editor-list";

export const ClickableEditorCard = styled(ListRow)`
  cursor: pointer;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;

const ManageEditorButtons = styled(ActionButton)`
  margin-left: 30px;
  color: var(--sn-stylekit-foreground-color);
`;

const EditorCat = ({editor}) => {
  if (editor.custom) {
    return 'Custom';
  } else {
    return editor.cat || '';
  }
};

const AvailableEditors = ({chooseEditor}) => {
  const {installedEditors} = useInstalled();
  const {custom} = useDialog();

  const openManageEditors = () => {
    custom(<ManageEditors/>);
  };

  return (
    <OverflowingCard>
      <CardTitle>Choose an editor <ManageEditorButtons onClick={openManageEditors}>Manage Editors</ManageEditorButtons></CardTitle>
      <TableList>
        {
          [PLAIN_EDITOR, ...installedEditors].map(editor => {
            return <ClickableEditorCard key={editor.id} onClick={() => chooseEditor(editor)}>
              <ListTitle>{editor.name}</ListTitle>
              <ListCell><EditorCat editor={editor}/></ListCell>
              <ListCell>{editor.desc}</ListCell>
            </ClickableEditorCard>;
          })
        }
      </TableList>
    </OverflowingCard>
  );
};

export default AvailableEditors;
