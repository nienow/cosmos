import React, {useState} from 'react';
import {styled} from "goober";

// const SectionTitle = styled.input`
//   border: none;
//   background-color: var(--sn-stylekit-secondary-background-color);
//   outline: none;
//   color: var(--sn-stylekit-foreground-color);
//   line-height: 1.4;
//   padding: 10px;
// `;

const SectionTextArea = styled('textarea')`
  flex: 1 1 auto;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 1.4;
  resize: none;
  color: var(--sn-stylekit-foreground-color);
`;

interface Props {
  initialText: string;
  save: (text: string) => void;
  isLocked: boolean;
}

const PlainEditor = ({initialText, save, isLocked}: Props) => {
  const [text, setText] = useState(initialText);
  const onChange = (e) => {
    setText(e.target.value);
    save(e.target.value);
  };
  return (
    <>
      <SectionTextArea disabled={isLocked} value={text} onChange={onChange}/>
    </>
  );
};

export default PlainEditor
