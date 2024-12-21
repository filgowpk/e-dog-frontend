import './Loader.css';
import React from 'react';

const Loader = () => {
    return (
      <div className="loader" data-testid="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  };
  
  export default Loader;