import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const handleInput = (e) => {
    setDisplay(display + e.currentTarget.dataset.number);
  };

  const handleCalculate = (e) => {
    const results = eval(display);
    setResult(results);
  };

  const handleClear = () => {
    setDisplay("");
    setResult("");
  };
  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="operation">{display}</div>
          <div className="result">{result}</div>
        </div>

        <div>
          <table>
            <tr>
              <td>
                <button className="yellow" onClick={handleClear}>
                  C
                </button>
              </td>
              <td>
                <button data-number="(" onClick={handleInput}>
                  (
                </button>
              </td>
              <td>
                <button data-number=")" onClick={handleInput}>
                  )
                </button>
              </td>
              <td>
                <button
                  className="light-red"
                  data-number="*"
                  onClick={handleInput}
                >
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button data-number="7" onClick={handleInput}>
                  7
                </button>
              </td>
              <td>
                <button data-number="8" onClick={handleInput}>
                  8
                </button>
              </td>
              <td>
                <button data-number="9" onClick={handleInput}>
                  9
                </button>
              </td>
              <td>
                <button
                  className="light-red"
                  data-number="/"
                  onClick={handleInput}
                >
                  :
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button data-number="4" onClick={handleInput}>
                  4
                </button>
              </td>
              <td>
                <button data-number="5" onClick={handleInput}>
                  5
                </button>
              </td>
              <td>
                <button data-number="6" onClick={handleInput}>
                  6
                </button>
              </td>
              <td>
                <button
                  className="light-red"
                  data-number="-"
                  onClick={handleInput}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button data-number="1" onClick={handleInput}>
                  1
                </button>
              </td>
              <td>
                <button data-number="2" onClick={handleInput}>
                  2
                </button>
              </td>
              <td>
                <button data-number="3" onClick={handleInput}>
                  3
                </button>
              </td>
              <td>
                <button
                  className="light-red"
                  data-number="+"
                  onClick={handleInput}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button data-number="0" onClick={handleInput}>
                  0
                </button>
              </td>
              <td>
                <button data-number="." onClick={handleInput}>
                  .
                </button>
              </td>
              <td>
                <button className="dark-grey backspace" onClick={handleDelete}>
                  <i class="fa fa-backspace"></i>
                </button>
              </td>
              <td>
                <button className="red" onClick={handleCalculate}>
                  =
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
