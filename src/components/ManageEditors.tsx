import {styled} from "goober";
import {ListCell, ListRow, ListTitle, TableList} from "./common/EditorList";
import {Editor} from "../definitions";
import {useDialog} from "../providers/DialogProvider";
import {useInstalled} from "../hooks/useInstalled";
import {BUILT_IN_EDITORS} from "../editor-list";
import InstallCustom from "./InstallCustom";
import {HeadingText} from "./common/Text";
import {Card, CardTitle, OverflowingCard} from "./common/Card";

const Container = styled('div')`
`;

const ListAction = styled(ListCell)`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 20px;
`;

const EditorCat = ({editor}) => {
  if (editor.custom) {
    return 'Custom';
  } else {
    return editor.cat || '';
  }
};

const ManageEditors = ({}) => {
  const {confirm} = useDialog();
  const {installedEditors, installEditor, uninstallEditor} = useInstalled();
  const remove = (editor: Editor) => {
    if (editor.custom) {
      confirm(`Uninstall the editor: ${editor.name}?`, () => {
        uninstallEditor(editor);
      });
    } else {
      uninstallEditor(editor);
    }

  };

  const install = (editor: Editor) => {
    installEditor(editor);
  };

  const availableEditors = BUILT_IN_EDITORS.filter(editor => {
    return !installedEditors.find(installedEditor => installedEditor.id === editor.id);
  });

  const renderInstalled = () => {
    if (installedEditors.length > 0) {
      return <TableList>
        {
          installedEditors.map(editor => {
            return <ListRow key={editor.id}>
              <ListAction onClick={() => remove(editor)}>Uninstall</ListAction>
              <ListTitle>{editor.name}</ListTitle>
              <ListCell><EditorCat editor={editor}/></ListCell>
              <ListCell>{editor.desc}</ListCell>
            </ListRow>;
          })
        }
      </TableList>;
    } else {
      return <div>No installed editors</div>;
    }
  };

  const renderMarketplace = () => {
    if (availableEditors.length > 0) {
      return <TableList>
        {
          availableEditors.map(editor => {
            return <ListRow key={editor.id}>
              <ListAction onClick={() => install(editor)}>Install</ListAction>
              <ListTitle>{editor.name}</ListTitle>
              <ListCell>{editor.cat}</ListCell>

              <ListCell>{editor.desc}</ListCell>
            </ListRow>;
          })
        }
      </TableList>;
    } else {
      return <div>All editors are already installed</div>;
    }
  };

  return (
    <Container>
      <OverflowingCard>
        <CardTitle>Installed Editors</CardTitle>
        {renderInstalled()}
      </OverflowingCard>

      <OverflowingCard>
        <HeadingText>Marketplace</HeadingText>
        {renderMarketplace()}
      </OverflowingCard>
      <Card>
        <InstallCustom/>
      </Card>
    </Container>
  );
};

export default ManageEditors;
