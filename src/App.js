import React from "react";
import "./App.css";
import Calculator from "./components/calculator.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Calculator />;
  }
}

export default App;
