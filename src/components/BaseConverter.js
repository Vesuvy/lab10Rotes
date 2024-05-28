import React, { useState, useEffect } from 'react';

const BaseConverter = () => {
    const [number, setNumber] = useState('');
    const [base, setBase] = useState('10');
    const [convertedNumber, setConvertedNumber] = useState('');
  
    const convertNumber = () => {
      let result;
      try {
        result = parseInt(number, base).toString(10);
      } catch (error) {
        result = 'Ошибка';
      }
      setConvertedNumber(result);
    };
  
    return (
      <div>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <select onChange={(e) => setBase(e.target.value)} value={base}>
          <option value="2">2</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="16">16</option>
        </select>
        <button onClick={convertNumber}>Преобразовать</button>
        {convertedNumber && <p>Результат: {convertedNumber}</p>}
      </div>
    );
  };

  export default BaseConverter;