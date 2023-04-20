export class MarkdownShortcuts {
  private ignoreTags = ['PRE'];
  private matches = [{
    name: 'header',
    pattern: /^(#){1,6}\s/g,
    action: (text, selection, pattern) => {
      var match = pattern.exec(text);
      if (!match) {
        return;
      }
      const size = match[0].length;
      // Need to defer this action https://github.com/quilljs/quill/issues/1134
      setTimeout(() => {
        this.quill.formatLine(selection.index, 0, 'header', size - 1);
        this.quill.deleteText(selection.index - size, size);
      }, 0);
    }
  },
    {
      name: 'blockquote',
      pattern: /^(>)\s/g,
      action: (text, selection) => {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(() => {
          this.quill.formatLine(selection.index, 1, 'blockquote', true);
          this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    },
    {
      name: 'code-block',
      pattern: /^`{3}(?:\s|\n)/g,
      action: (text, selection) => {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(() => {
          this.quill.formatLine(selection.index, 1, 'code-block', true);
          this.quill.deleteText(selection.index - 4, 4);
        }, 0);
      }
    },
    {
      name: 'bolditalic',
      pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text);

        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;

        if (text.match(/^([*_ \n]+)$/g)) {
          return;
        }

        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {bold: true, italic: true});
          this.quill.format('bold', false);
        }, 0);
      }
    },
    {
      name: 'bold',
      pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text);

        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;

        if (text.match(/^([*_ \n]+)$/g)) {
          return;
        }

        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {bold: true});
          this.quill.format('bold', false);
        }, 0);
      }
    },
    {
      name: 'italic',
      pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text);

        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;

        if (text.match(/^([*_ \n]+)$/g)) {
          return;
        }

        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {italic: true});
          this.quill.format('italic', false);
        }, 0);
      }
    },
    {
      name: 'strikethrough',
      pattern: /(?:~~)(.+?)(?:~~)/g,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text);

        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;

        if (text.match(/^([*_ \n]+)$/g)) {
          return;
        }

        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {strike: true});
          this.quill.format('strike', false);
        }, 0);
      }
    },
    {
      name: 'code',
      pattern: /(?:`)(.+?)(?:`)/g,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text);

        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;

        if (text.match(/^([*_ \n]+)$/g)) {
          return;
        }

        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {code: true});
          this.quill.format('code', false);
          this.quill.insertText(this.quill.getSelection(), ' ');
        }, 0);
      }
    },];

  constructor(private quill) {
    // Handler that looks for insert deltas that match specific characters
    this.quill.on('text-change', (delta) => {
      for (let i = 0; i < delta.ops.length; i++) {
        if (delta.ops[i].hasOwnProperty('insert')) {
          if (delta.ops[i].insert === ' ') {
            this.onSpace();
          }
        }
      }
    });
  }

  isValid(text, tagName) {
    return (
      typeof text !== 'undefined' &&
      text &&
      this.ignoreTags.indexOf(tagName) === -1
    );
  }

  onSpace() {
    const selection = this.quill.getSelection();
    if (!selection) {
      return;
    }
    const [line, offset] = this.quill.getLine(selection.index);
    const text = line.domNode.textContent;
    const lineStart = selection.index - offset;
    if (this.isValid(text, line.domNode.tagName)) {
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern);
        if (matchedText) {
          // We need to replace only matched text not the whole line
          match.action(text, selection, match.pattern, lineStart);
          return;
        }
      }
    }
  }

  // onEnter () {
  //   let selection = this.quill.getSelection()
  //   if (!selection) return
  //   const [line, offset] = this.quill.getLine(selection.index)
  //   const text = line.domNode.textContent + ' '
  //   const lineStart = selection.index - offset
  //   selection.length = selection.index++
  //   if (this.isValid(text, line.domNode.tagName)) {
  //     for (let match of this.matches) {
  //       const matchedText = text.match(match.pattern)
  //       if (matchedText) {
  //         match.action(text, selection, match.pattern, lineStart)
  //         return
  //       }
  //     }
  //   }
  // }
}
