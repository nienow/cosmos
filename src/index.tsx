import React from 'react';

import './stylesheets/main.scss';
import {setup} from "goober";
import {createRoot} from "react-dom/client";
import App from "./App";
import {FrameMediator} from "./mediator";
import {DialogProvider} from "./providers/DialogProvider";

setup(React.createElement);

const mediator = new FrameMediator();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DialogProvider>
      <App mediator={mediator}/>
    </DialogProvider>
  </React.StrictMode>
);

