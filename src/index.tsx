import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Spyfall from "./Spyfall";
import * as serviceWorker from "./serviceWorker";

import { SocketService } from "./SocketService";
import { SpyfallContext } from "./SpyfallContext";

const game = new SocketService();

ReactDOM.render(
  <SpyfallContext.Provider value={game}>
    <Spyfall />
  </SpyfallContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
