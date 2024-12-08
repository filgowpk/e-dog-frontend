import React, { useState, useEffect } from 'react';
import './Blog.css';
import Loader from '../components/Loader.jsx';

function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="blog-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="quiz-message">
          <p>Strona z blogami będzie wkrótce dostępna!</p>
        </div>
      )}
    </div>
  );
}

export default Blog;
