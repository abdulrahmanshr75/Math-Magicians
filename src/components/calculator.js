import React, { useState } from "react";
import calculate from "../logic/calculate.js";

const Calculator = () => {
  const [state, setState] = useState({});

  const Calculate = (e) => {
    setState(calculate(state, e.target.value));
  };

  const Display = () => {
    const { total, next } = state;
    if (total === null && next == null) {
      return 0;
    }
    if (next == null) {
      return total;
    }
    return next;
  };

  return (
    <div className="main-container">
      <div className="result-container">
        <span id="resultNumber">{Display() || 0}</span>
      </div>
      <div className="body-container">
        <button
          onClick={Calculate}
          type="button"
          value="AC"
          className="symbol-1"
        >
          AC
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="+/-"
          className="symbol-1"
        >
          +/-
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="%"
          className="symbol-1"
        >
          %
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="÷"
          className="symbol-2"
        >
          ÷
        </button>
      </div>
      <div className="body-container">
        <button
          onClick={Calculate}
          type="button"
          value="7"
          className="symbol-1"
        >
          7
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="8"
          className="symbol-1"
        >
          8
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="9"
          className="symbol-1"
        >
          9
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="x"
          className="symbol-2"
        >
          ×
        </button>
      </div>
      <div className="body-container">
        <button
          onClick={Calculate}
          type="button"
          value="4"
          className="symbol-1"
        >
          4
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="5"
          className="symbol-1"
        >
          5
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="6"
          className="symbol-1"
        >
          6
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="-"
          className="symbol-2"
        >
          -
        </button>
      </div>
      <div className="body-container">
        <button
          onClick={Calculate}
          type="button"
          value="1"
          className="symbol-1"
        >
          1
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="2"
          className="symbol-1"
        >
          2
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="3"
          className="symbol-1"
        >
          3
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="+"
          className="symbol-2"
        >
          +
        </button>
      </div>
      <div className="body-container">
        <button
          onClick={Calculate}
          type="button"
          value="0"
          className="symbol-1-zero"
        >
          0
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="."
          className="symbol-1"
        >
          .
        </button>
        <button
          onClick={Calculate}
          type="button"
          value="="
          className="symbol-2"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
