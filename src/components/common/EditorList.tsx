import {styled} from "goober";

export const TableList = styled('table')`
  border-spacing: 0;
  margin: 0 -20px -10px;
`;

export const ListRow = styled('tr')`

`;


export const ListCell = styled('td')`
  border-top: 1px solid var(--sn-stylekit-border-color);
  width: 1px;
  white-space: nowrap;

  &:last-child {
    width: 100%;
  }

  padding: 15px 20px;
`;

export const ListTitle = styled(ListCell)`

  font-weight: bold;
`;


