//App.jsx
// Akshay Santhosh
// 301499987
// 04.02.2025 (dd.mm.yyyy)

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import { ThemeProvider } from "@material-ui/core/styles";
import MainRouter from "../MainRouter";
//import Contact from "./contact";
//import theme from "./theme";
//import { hot } from "react-hot-loader";

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;