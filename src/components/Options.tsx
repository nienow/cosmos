import {HeadingText} from "./common/Text";
import {useState} from "react";
import NumberControl from "./common/NumberControl";
import {frameMediator} from "../mediator";

const Options = () => {
  const [columns, setColumns] = useState(frameMediator.getColumns());
  const increase = () => {
    frameMediator.setColumns(columns + 1);
    setColumns(columns + 1)
  };
  const decrease = () => {
    frameMediator.setColumns(columns - 1);
    setColumns(columns - 1)
  };
  return <>
    <HeadingText>Options</HeadingText>
    <NumberControl increase={increase} decrease={decrease} display={'' + columns}/>
  </>
};

export default Options;
