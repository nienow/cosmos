import React, {useEffect} from 'react';
import {styled} from "goober";

import './quill.css';
import {MarkdownShortcuts} from "./quill-markdown";

const Container = styled('div')`
  height: 100%;
`;

const QuillEditor = ({initialText, save}) => {
  useEffect(() => {
    import('quill').then(({default: Quill}) => {
      Quill.register('modules/markdown', MarkdownShortcuts);
      const quill = new Quill("#quill-editor", {
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
    <Container id="quill-editor">
    </Container>
  );
};

export default QuillEditor;
