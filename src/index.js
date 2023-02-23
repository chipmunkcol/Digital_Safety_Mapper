import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/common/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/common/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
