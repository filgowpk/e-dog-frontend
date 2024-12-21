import React, { useState, useEffect } from 'react';
import './Quiz.css';
import Loader from '../components/Loader.jsx';

function Quiz() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="quiz-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="quiz-message">
          <p>Strona z quizami o psach będzie wkrótce dostępna!</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
