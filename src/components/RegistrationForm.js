import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
    const handleRegistration = () => {
      // Проверка логина
      if (!login || login.length < 6 || login.length > 20 || !/^[a-zA-Z0-9]+$/.test(login)) {
        setLoginError('Логин должен содержать от 6 до 20 символов и состоять из латинских букв и цифр.');
        return;
      } else {
        setLoginError('');
      }
  
      // Проверка пароля
      if (!password) {
        setPasswordError('Пароль обязателен.');
        return;
      } else {
        setPasswordError('');
      }
  
      // Проверка совпадения пароля и его подтверждения
      if (password !== confirmPassword) {
        setConfirmPasswordError('Пароли не совпадают.');
        return;
      } else {
        setConfirmPasswordError('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        {loginError && <p className="error">{loginError}</p>}
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}
        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        <button onClick={handleRegistration}>Зарегистрироваться</button>
      </div>
    );
  };

  export default RegistrationForm;