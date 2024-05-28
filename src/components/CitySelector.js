import React, { useState, useEffect } from 'react';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div>
      <select onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Выберите город</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Рио">Рио-де-Жанейро</option>
        <option value="Нью-Йорк">Нью-Йорк</option>
      </select>
      {selectedCity && selectedCity !== 'Рио' && (
        <p>Нет, это не Рио-де-Жанейро!</p>
      )}
    </div>
  );
};

export default CitySelector;