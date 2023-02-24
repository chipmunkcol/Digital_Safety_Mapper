import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/common/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <GlobalStyles />
        <App />
    </Router>
  </React.StrictMode>
);
