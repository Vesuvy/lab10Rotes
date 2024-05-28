import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [secondsLived, setSecondsLived] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (birthdate) {
          const birthDateObj = new Date(birthdate);
          const now = new Date();
          const diffInSeconds = Math.floor((now - birthDateObj) / 1000);
          setSecondsLived(diffInSeconds);
        }
      }, 1000);
  
      return () => clearInterval(timer);
    }, [birthdate]);
  
    return (
      <div>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        {birthdate && <p>Вы прожили: {secondsLived} секунд.</p>}
      </div>
    );
  };
export default AgeCalculator;  