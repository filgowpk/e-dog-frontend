import React, { useState, useEffect } from 'react';
import './Advice.css';
import Loader from '../components/Loader.jsx';

function Advice() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="advice-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="quiz-message">
          <p>Strona z poradami będzie wkrótce dostępna!</p>
        </div>
      )}
    </div>
  );
}

export default Advice;
