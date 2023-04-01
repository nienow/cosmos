import React, {useState} from 'react';
import {styled} from "goober";
import {useCustomEditors} from "../hooks/useCustomEditors";
import {useDialog} from "../providers/DialogProvider";
import {ActionButton} from "./ActionButton";
import ManageCustomEditors from "./ManageCustomEditors";
import {HeadingText} from "./Text";

const UrlInput = styled('input')`
  padding: 5px 10px;
`;

const AddEditor = () => {
  const {customEditors, addCustomEditor} = useCustomEditors();
  const {alert, custom} = useDialog();
  const [url, setUrl] = useState('');

  const openManageDialog = () => {
    custom(<ManageCustomEditors/>);
  };
  const onAdd = () => {
    fetch(url).then(res => res.json()).then(data => {
      if (data && data.identifier && data.content_type === 'SN|Component' && data.area === 'editor-editor' && data.url) {
        const obj = {
          id: data.identifier,
          name: data.name || data.identifier,
          desc: data.description,
          url: data.url
        }
        if (customEditors.find(item => item.id === obj.id)) {
          alert('This custom editor has already been added');
        } else {
          addCustomEditor(obj);
          setUrl('');
        }
      } else {
        alert('This is not a valid extension url');
      }
    }).catch(() => {
      alert('This is not a valid extension url');
    });
  };
  return (
    <>
      <HeadingText>Manually Add Extensions</HeadingText>
      <p>The extension url should point to a json file describing the extension. For example: <a target="_blank"
                                                                                                 href="https://nienow.github.io/sn-extension-template/ext.json">https://nienow.github.io/sn-extension-template/ext.json</a>.
        Feel free to use this url to test with.
      </p>
      <UrlInput placeholder="Enter extension url..." value={url} onChange={(e) => setUrl(e.target.value)}/>
      <ActionButton onClick={onAdd}>Install</ActionButton>
      <ActionButton onClick={openManageDialog}>Uninstall Editors</ActionButton>
    </>
  );
}

export default AddEditor
