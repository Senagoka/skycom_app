import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ProductProvider } from "./context";
import UserProvider from "./UserContext";
ReactDOM.render(
  <ProductProvider>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </ProductProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
