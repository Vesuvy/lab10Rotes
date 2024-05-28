import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);
  
    const calculate = () => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let res;
  
      switch (operation) {
        case '+':
          res = n1 + n2;
          break;
        case '-':
          res = n1 - n2;
          break;
        case '*':
          res = n1 * n2;
          break;
        case '/':
          res = n1 / n2;
          break;
        default:
          res = 'Ошибка';
      }
      setResult(`${n1} ${operation} ${n2} = ${res}`);
    };
  
    return (
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select onChange={(e) => setOperation(e.target.value)} value={operation}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={calculate}>Рассчитать</button>
        {result && <p>{result}</p>}
      </div>
    );
  };

  export default Calculator;