export const parseEditorData = (text: string) => {
  if (text.indexOf('{') === 0) {
    try {
      const parsedData = JSON.parse(text);
      if (parsedData.editor && parsedData.editor === 'my-editor') {
        return parsedData;
      }
    } catch (e) {
      console.error(e);
    }
  }
};

export const createNewData = () => {
  return {
    editor: 'my-editor',
    text: ''
  };
};
