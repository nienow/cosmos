import React, {useState} from 'react';
import {styled} from "goober";

import ReactDataSheet from "react-datasheet";
import './spreadsheet.css';

const Container = styled('div')`
  height: 100%;
`;


const SpreadsheetEditor = ({initialText, save}) => {

  const [data, setData] = useState([
    [{value: 'One'}, {value: 'Three'}],
    [{value: 'Four'}, {value: 'Four'}],
  ]);

  const onChange = (changes) => {
    const grid = data.map(row => [...row]);
    changes.forEach(({row, col, value}) => {
      grid[row][col] = {...grid[row][col], value};
    });
    setData(grid);
  };

  return (
    <Container>
      <ReactDataSheet data={data} valueRenderer={cell => cell.value} onCellsChanged={onChange}>
      </ReactDataSheet>
    </Container>
  );
};

export default SpreadsheetEditor;
