import {styled} from "goober";

export const ActionButton = styled('button')`
  background-color: var(--sn-stylekit-background-color);
  border: 1px solid var(--sn-stylekit-border-color);
  color: inherit;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 10px;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`

export const BigActionButton = styled(ActionButton)`
  padding: 10px 20px;
  width: 100%;
`;
