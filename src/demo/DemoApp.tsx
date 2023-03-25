import React, {useRef, useState} from 'react';
import {EditorProvider} from "../providers/EditorProvider";
import {DATA_ONE, DATA_TWO, DATA_UNSUPPORTED} from "./test-data";
import {setup, styled} from "goober";

setup(React.createElement);


const Container = styled('div')`
  display: flex;
`;

const Menu = styled('div')`
  width: 200px;
  flex: 0 0 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const Content = styled('div')`
  flex: 1 1 auto;
`;

const ContentHeader = styled('div')`
  border-bottom: 1px solid var(--sn-stylekit-border-color);
  padding: 5px 20px;
  display: flex;

  div {
    margin-right: 20px;
  }
`;

const MenuItem = styled('div')`
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--sn-stylekit-border-color);

  &.selected {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;

const EXAMPLES = [
  {title: 'One', data: DATA_ONE},
  {title: 'Two', data: DATA_TWO},
  {title: 'Unsupported', data: DATA_UNSUPPORTED}
]

const DemoApp = () => {
  const lastSavedRef = useRef<HTMLDivElement>();
  const [selected, setSelected] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const renderMenuItem = (_, i) => {
    return <MenuItem className={selected === i ? 'selected' : ''} onClick={() => setSelected(i)}>{EXAMPLES[i].title}</MenuItem>;
  };

  const onToggleDisabled = (e) => {
    setDisabled(e.target.checked);
  };

  const save = () => {
    if (lastSavedRef.current) {
      lastSavedRef.current.textContent = `Last Saved: ${new Date().toLocaleTimeString()}`;
    }
  };
  return (
    <Container>
      <Menu>
        {
          EXAMPLES.map(renderMenuItem)
        }
      </Menu>
      <Content>
        <ContentHeader>
          <div><input id="editingDisabled" type="checkbox" value={'' + disabled} onChange={onToggleDisabled}></input><label
            htmlFor="editingDisabled"> Editing Disabled</label></div>
          <div ref={lastSavedRef}></div>
        </ContentHeader>
        <EditorProvider text={EXAMPLES[selected].data} save={save} isLocked={disabled}/>
      </Content>
    </Container>
  );
}

export default DemoApp
