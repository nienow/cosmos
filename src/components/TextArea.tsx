import React, {useEffect, useState} from 'react';
import {styled} from "goober";
import {useEditor} from "../providers/EditorProvider";

const TextAreaField = styled('textarea')`
  background-color: inherit;
  outline: none;
  padding: 10px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  line-height: 1.4;
  resize: none;
  color: var(--sn-stylekit-foreground-color);
`;

const TextArea = ({}) => {
  const {data, saveNote, isLocked} = useEditor();

  const [text, setText] = useState('');

  useEffect(() => {
    setText(data.text);
  }, [data]);

  const onLocalChange = (e) => {
    setText(e.target.value);
    data.text = e.target.value;
    saveNote();
  };

  return (
    <TextAreaField disabled={isLocked} value={text} onChange={onLocalChange}></TextAreaField>
  );
}

export default TextArea
