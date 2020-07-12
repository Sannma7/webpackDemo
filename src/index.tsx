import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";

import { App } from "./app";

function icon() {
  const icon = require('./icon.png');
  const element = document.createElement("link");

  element.setAttribute('rel', 'icon');
  element.setAttribute('href', icon.default);
  return element;
}

document.head.appendChild(icon())

ReactDOM.render(<App />, document.getElementById("root"));
