import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
        <div className="result-container">
          <span id="resultNumber">0</span>
        </div>
        <div className="body-container">
          <span className="symbol-1">AC</span>
          <span className="symbol-1">+/-</span>
          <span className="symbol-1">%</span>
          <span className="symbol-2">÷</span>
        </div>
        <div className="body-container">
          <span className="symbol-1">7</span>
          <span className="symbol-1">8</span>
          <span className="symbol-1">9</span>
          <span className="symbol-2">×</span>
        </div>
        <div className="body-container">
          <span className="symbol-1">4</span>
          <span className="symbol-1">5</span>
          <span className="symbol-1">6</span>
          <span className="symbol-2">-</span>
        </div>
        <div className="body-container">
          <span className="symbol-1">1</span>
          <span className="symbol-1">2</span>
          <span className="symbol-1">3</span>
          <span className="symbol-2">+</span>
        </div>
        <div className="body-container">
          <span className="symbol-1-zero">0</span>
          <span className="symbol-1">.</span>
          <span className="symbol-2">=</span>
        </div>
      </div>
    );
  }
}

export default Calculator;
