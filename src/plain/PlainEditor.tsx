import React, {useState} from 'react';
import {styled} from "goober";
import {useLocked} from "../hooks/useLocked";

const SectionTextArea = styled('textarea')`
  background-color: inherit;
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  box-sizing: border-box;
  flex: 1 1 auto;
  line-height: 1.4;
  resize: none;
  color: var(--sn-stylekit-foreground-color);
`;

interface Props {
  initialText: string;
  save: (text: string) => void;
}

const PlainEditor = ({initialText, save}: Props) => {
  const {locked} = useLocked();
  const [text, setText] = useState(initialText);
  const onChange = (e) => {
    setText(e.target.value);
    save(e.target.value);
  };
  return (
    <>
      <SectionTextArea disabled={locked} value={text} onChange={onChange}/>
    </>
  );
};

export default PlainEditor
