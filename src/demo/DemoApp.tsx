import React, {useRef, useState} from 'react';
import {DATA_EXCALIDRAW, DATA_NEW, DATA_ONE, DATA_TWO} from "./test-data";
import {styled} from "goober";
import {MockStandardNotes} from "./mock-notes";


const Container = styled('div')`
  display: flex;
  min-height: 100vh;
`;

const Menu = styled('div')`
  width: 200px;
  flex: 0 0 auto;
  border-right: 1px solid var(--sn-stylekit-border-color);
`;

const Content = styled('div')`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled('div')`
  border-bottom: 1px solid var(--sn-stylekit-border-color);
  padding: 5px 20px;
  display: flex;
  flex: 0 0 auto;

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

const ChildFrame = styled('iframe', React.forwardRef)`
  flex: 1 1 auto;
  width: 100%;
  border: 0;
`;

const EXAMPLES = [
  {title: 'New', data: DATA_NEW},
  {title: 'Plain', data: DATA_ONE},
  {title: 'Scratch', data: DATA_TWO},
  {title: 'Excalidraw', data: DATA_EXCALIDRAW}
]

const mock = new MockStandardNotes(DATA_NEW[0], DATA_NEW[1], () => {
  const el = document.getElementById('last-saved');
  if (el) {
    el.textContent = `Last Saved: ${new Date().toLocaleTimeString()}`;
  }
});

const DemoApp = () => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const [selected, setSelected] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const changeMenuItem = (i) => {
    setSelected(i);
    const [data, editor] = EXAMPLES[i].data;
    mock.changeData(data, editor);
  };

  const renderMenuItem = (_, i) => {
    return <MenuItem className={selected === i ? 'selected' : ''} onClick={() => changeMenuItem(i)}>{EXAMPLES[i].title}</MenuItem>;
  };

  const onToggleDisabled = (e) => {
    setDisabled(e.target.checked);
    mock.toggleLock(e.target.checked);
  };

  const onFrameLoad = () => {
    mock.onReady(iframeRef.current.contentWindow);
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
          <div id="last-saved"></div>
        </ContentHeader>
        <ChildFrame key={selected} ref={iframeRef} src="index.html" onLoad={onFrameLoad}/>
      </Content>
    </Container>
  );
}

export default DemoApp
