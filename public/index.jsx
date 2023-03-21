
import App from "../src/App.jsx"

import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store.js";

const root = ReactDOM.createRoot(
    document.getElementById("app")
  );
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);