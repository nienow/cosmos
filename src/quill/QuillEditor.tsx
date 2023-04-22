import React, {useEffect} from 'react';
import {styled} from "goober";

import './quill.css';
import {MarkdownShortcuts} from "./quill-markdown";
import {useLocked} from "../hooks/useLocked";

const Container = styled('div')`
  position: relative;
  height: 100%;
`;

const Container2 = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const QuillEditor = ({editor, initialText, save}) => {
  const {locked} = useLocked();

  useEffect(() => {
    import('quill').then(({default: Quill}) => {
      Quill.register('modules/markdown', MarkdownShortcuts);
      const quill = new Quill(`#quill-${editor.key}`, {
        readOnly: locked,
        modules: {
          toolbar: [
            [{'header': '1'}, {'header': '2'}, 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code', 'link', {'list': 'ordered'}, {'list': 'bullet'}, 'clean'],
          ],
          markdown: {}
        },
        theme: 'snow'
      });
      if (initialText) {
        try {
          const data = JSON.parse(initialText);
          if (data.ops) {
            quill.setContents(data);
          } else {
            quill.setText(initialText);
          }
        } catch {
          quill.setText(initialText);
        }
      }
      quill.on('text-change', () => {
        save(JSON.stringify(quill.getContents()));
      });
    });
  }, []);

  return (
    <Container>
      <Container2>
        <div id={'quill-' + editor.key}></div>
      </Container2>
    </Container>
  );
};

export default QuillEditor;
