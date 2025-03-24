import {useState} from 'react';
import {styled} from "goober";
import {useInstalled} from "../hooks/useInstalled";
import {useDialog} from "../providers/DialogProvider";
import {ActionButton} from "./common/ActionButton";
import {HeadingText} from "./common/Text";
import {Editor} from "../definitions";

const UrlInput = styled('input')`
  padding: 5px 10px;
`;

const InstallCustom = () => {
  const {installedEditors, installEditor} = useInstalled();
  const {alert} = useDialog();
  const [url, setUrl] = useState('');

  const onAdd = () => {
    fetch(url).then(res => res.json()).then(data => {
      if (data && data.identifier && data.content_type === 'SN|Component' && data.area === 'editor-editor' && data.url) {
        const obj: Editor = {
          id: data.identifier,
          name: data.name || data.identifier,
          desc: data.description,
          url: data.url,
          custom: true
        };
        if (installedEditors.find(item => item.id === obj.id)) {
          alert('This custom editor has already been added');
        } else {
          installEditor(obj);
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
      <HeadingText>Install Custom Editor</HeadingText>
      <p>The extension url should point to a json file describing the extension. For example: <a target="_blank"
                                                                                                 href="https://nienow.github.io/sn-extension-template/ext.json">https://nienow.github.io/sn-extension-template/ext.json</a>.
        Feel free to use this url to test with.
      </p>
      <UrlInput placeholder="Enter extension url..." value={url} onChange={(e) => setUrl(e.target.value)}/>
      <ActionButton onClick={onAdd}>Install</ActionButton>
    </>
  );
};

export default InstallCustom;
