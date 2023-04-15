import NumberControl from "./common/NumberControl";
import {frameMediator} from "../mediator";
import {styled} from "goober";
import ToggleButton from "./common/ToggleButton";
import {useTitle} from "../hooks/useTitle";
import {useDialog} from "../providers/DialogProvider";
import {useLocked} from "../hooks/useLocked";
import {useOptions} from "../hooks/useOptions";

const HeaderContainer = styled('div')`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--sn-stylekit-border-color);
`

const Options = () => {
  const {showOptions} = useOptions();
  const {title, toggleTitle} = useTitle();
  const {locked} = useLocked();
  const {confirm} = useDialog();
  const increaseColumns = () => {
    frameMediator.setColumns(frameMediator.getColumns() + 1);
  };
  const decreaseColumns = () => {
    frameMediator.setColumns(frameMediator.getColumns() - 1);
  };

  const addRow = () => {
    if (locked) return;
    frameMediator.addRow();
  };

  const checkLastRow = () => {
    if (locked) return;
    if (frameMediator.getSize() <= frameMediator.getColumns()) return; // only 1 row
    const startChecking = frameMediator.getSize() - frameMediator.getColumns();
    let hasContent = false;
    for (let i = startChecking; i < frameMediator.getSize(); i++) {
      if (frameMediator.getChildData(i)) {
        hasContent = true;
        break;
      }
    }
    if (hasContent) {
      confirm('Removing a row will delete content? Are you sure?', () => {
        frameMediator.deleteRow();
      })
    } else {
      frameMediator.deleteRow();
    }
  };

  const columns = frameMediator.getColumns();
  const rows = frameMediator.getRows();

  if (showOptions && !locked) {
    return <HeaderContainer>
      <NumberControl increase={increaseColumns} decrease={decreaseColumns} display={columns + " column(s)"}/>
      <NumberControl increase={addRow} decrease={checkLastRow} display={rows + ' row(s)'}></NumberControl>
      <ToggleButton label="Always Show Title" initialValue={title} onToggle={toggleTitle}/>
    </HeaderContainer>
  }
};

export default Options;
