import React from 'react';
import {styled} from "goober";
import {Editor} from "../definitions";
import {BUILT_IN_EDITORS} from "../built-in-editors";

const SelectBox = styled('select')`
  background-color: inherit;
  color: inherit;
  outline: none;
  padding: 2px 10px;
  border: 1px solid var(--sn-stylekit-border-color);
  margin: 3px;
  border-radius: 3px;
`;

const Option = styled('option')`
  background-color: var(--sn-stylekit-background-color);
  color: var(--sn-stylekit-foreground-color);
`;

interface Props {
  value: string;
  changeEditor: (newValue: Editor) => void;
  isLocked?: boolean;
}

const EditorChoice = ({value, changeEditor, isLocked = false}: Props) => {
  const onSelectEditor = (e) => {
    const editor = BUILT_IN_EDITORS.find(editor => editor.id === e.target.value);
    changeEditor(editor);
  };
  return (
    <SelectBox value={value} onChange={onSelectEditor} disabled={isLocked}>
      {
        BUILT_IN_EDITORS.map(editor => {
          return <Option value={editor.id}>{editor.name}</Option>
        })
      }
    </SelectBox>
  );
}

export default EditorChoice
