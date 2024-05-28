import React, { useState, useEffect } from 'react';

const ProfileEditForm = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = {};
  
      // Проверка наличия имени
      if (!firstName.trim()) {
        errors.firstName = 'Имя обязательно для заполнения';
      }
  
      // Проверка наличия отчества
      if (!middleName.trim()) {
        errors.middleName = 'Отчество обязательно для заполнения';
      }
  
      // Проверка наличия фамилии
      if (!lastName.trim()) {
        errors.lastName = 'Фамилия обязательна для заполнения';
      }
  
      // Проверка формата даты рождения (если введена)
      if (birthdate.trim() && !/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        errors.birthdate = 'Некорректный формат даты. Используйте ДД.ММ.ГГГГ';
      }
  
      setErrors(errors);
  
      // Если ошибок нет, можно отправить форму
      if (Object.keys(errors).length === 0) {
        // Отправка данных формы...
      }
    };
  
    return (
      <div>
        <h2>Форма редактирования профиля</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Имя:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div>
            <label>Отчество:</label>
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            {errors.middleName && <p className="error">{errors.middleName}</p>}
          </div>
          <div>
            <label>Фамилия:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div>
            <label>Дата рождения:</label>
            <input
              type="text"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            {errors.birthdate && <p className="error">{errors.birthdate}</p>}
          </div>
          <div>
            <label>Адрес:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  };

  export default ProfileEditForm;