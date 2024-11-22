import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import reducers from "./reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//command to run frontend : node --openssl-legacy-provider node_modules/react-scripts/scripts/start.js
