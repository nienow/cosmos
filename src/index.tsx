import React from 'react';

import './stylesheets/main.scss';
import {setup} from "goober";
import {createRoot} from "react-dom/client";
import App from "./App";
import {FrameMediator} from "./mediator";

setup(React.createElement);

// const componentRelay = new ComponentRelay({
//   targetWindow: window,
//   options: {
//     coallesedSaving: true,
//     coallesedSavingDelay: 400,
//     debug: true
//   }
// });
//
// componentRelay.streamContextItem((note) => {

const mediator = new FrameMediator();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App mediator={mediator}/>
  </React.StrictMode>
);

// const onReady = (editorId, iframeWindow) => {
//   mediator.setChildWindow(editorId, iframeWindow);
// };


