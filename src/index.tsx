import React from 'react';

import './stylesheets/main.scss';
import {setup} from "goober";
import {createRoot} from "react-dom/client";
import App from "./App";
import {DialogProvider} from "./providers/DialogProvider";

setup(React.createElement);

window.addEventListener('error', (e) => {
  console.log(e);
  document.getElementById('errors').innerText += '\n' + e.message;
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DialogProvider>
      <App/>
    </DialogProvider>
  </React.StrictMode>
);

