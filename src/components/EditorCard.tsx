import {styled} from "goober";

export const Editors = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const EditorCard = styled('div')`
  padding: 15px 20px;
  border: 1px solid var(--sn-stylekit-border-color);
  margin: 10px;
  min-width: 200px;
  max-width: 500px;
  border-radius: 5px;
`;

export const EditorTitle = styled('div')`
  font-weight: bold;
`;

export const EditorDesc = styled('div')`
  margin-top: 10px;
`;
