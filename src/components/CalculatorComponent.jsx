// Exercise 6:

import React, { useState, useRef } from 'react';

function Calculator() {
  const formRef = useRef(null); // 1. Create the ref
  const [result, setResult] = useState('');
  const calculate = (op) => {
    const data = new FormData(formRef.current);
    const formObject = Object.fromEntries(data.entries());
    console.log('formObject', formObject);
    const num1 = parseFloat(formObject.input1);
    const num2 = parseFloat(formObject.input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let calculatedResult;

      switch (op) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '/':
          if (num2 !== 0) {
            calculatedResult = num1 / num2;
          } else {
            calculatedResult = 'Division by zero!';
          }
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        default:
          calculatedResult = 'Invalid operator';
      }
      setResult(calculatedResult);
    } else {
      setResult('Invalid input');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <div>
      <form ref={formRef} className="calc componentBox">
        <label htmlFor="input1">Input 1:</label>
        <br />
        <input type="text" id="input1" name="input1" />
        <br />
        <label htmlFor="input2">Input 2:</label>
        <br />
        <input type="text" id="input2" name="input2" />
        <br />
        <label htmlFor="result">Result:</label>
        <br />
        <input type="text" id="result" name="result" value={result} readOnly />
        <br />
        <div className="button">
          <button type="button" onClick={() => calculate('+')}>
            +
          </button>
          <button type="button" onClick={() => calculate('-')}>
            -
          </button>
          <br />
          <button type="button" onClick={() => calculate('/')}>
            /
          </button>
          <button type="button" onClick={() => calculate('*')}>
            X
          </button>
        </div>
        <input type="reset" value="Reset" onClick={clearResult} />
      </form>
    </div>
  );
}

export default Calculator;
