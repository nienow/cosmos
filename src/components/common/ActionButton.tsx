import {styled} from "goober";

export const ActionButton = styled('button')`
  background-color: var(--sn-stylekit-background-color);
  border: 1px solid var(--sn-stylekit-border-color);
  color: inherit;
  cursor: pointer;
  margin: 0 5px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 15px;

  &:hover {
    background-color: var(--sn-stylekit-secondary-background-color);
  }
`;
