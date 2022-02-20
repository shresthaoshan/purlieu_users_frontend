import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { GlobalStyles } from "./views/style";
import { NavBar } from "./views/layout/NavBar";
import { Footer } from "./views/layout/Footer";

ReactDOM.render(
  <>
    <GlobalStyles />

    <Router>
      <NavBar />
      <App />
      <Footer />
    </Router>
  </>,
  document.getElementById("root")
);
