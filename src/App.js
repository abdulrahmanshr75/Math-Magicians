import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Calculator from "./pages/Calculator.js";
import Navbar from "./pages/Navbar.js";
import Qoute from "./pages/Qoute.js";
import Home from "./pages/Home.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/qoute">
          <Qoute />
        </Route>
      </>
    );
  }
}

export default App;
