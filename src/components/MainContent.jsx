import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';
import Encyklopednia from '../assets/encyklopedia.png';
import Wyszukiwanie from '../assets/wyszukiwanie.png';
import Quiz from '../assets/quiz.png';
import Blog from '../assets/blog.png';
import Porady from '../assets/porady.png';
import Tlo from '../assets/tlo.png';

function MainContent() {
  const navigate = useNavigate();

  return (
    <div className='main-content'>
        <div className="intro">
          <h1>Witamy w E-Dog!</h1>
          <p>Miejscu stworzonym z myślą o psach i ich właścicielach</p>
        </div>

        <div className="container">
          <div className="left">
              <div className="row">
                <div className="card large-card" onClick={() => navigate('/breeds')}>
                  <div className="card-content">
                    <h2>Encyklopedia</h2>
                    <p>Przeglądaj i porównuj wszystkie rasy psów</p>
                  </div>
                  <img src={Encyklopednia} alt="Karta 1" className="card-image" />
                </div>
              <div className="card small-card">
                <div className="card-content">
                  <h2>Wyszukiwanie zaawansowane</h2>
                  <p>Kiedy już wiesz,<br /> jakiej rasy psa szukasz</p>
                </div>
                <div className='image-container'>
                  <img src={Wyszukiwanie} alt="Karta 2" className="card-image" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card full-width-card">
                <div className="card-content" onClick={() => navigate('/quiz')}>
                  <h2>Quiz</h2>
                  <p>Kiedy jeszcze nie wiesz, jaka rasa jest dla Ciebie odpowiednia i potrzebujesz pomocy</p>
                </div>
                <img src={Quiz} alt="Karta 3" className="card-image" />
              </div>
            </div>
            <div className="row">
              <div className="card half-width-card" onClick={() => navigate('/blog')}>
                <div className="card-content">
                  <h2>Blog</h2>
                  <p>Wszystkie najnowsze informacje o pieskim życiu</p>
                </div>
                <img src={Blog} alt="Karta 4" className="card-image" />
              </div>
              <div className="card half-width-card" onClick={() => navigate('/advice')}>
                <div className="card-content">
                  <h2>Porady</h2>
                  <p>Odpowiedzi na wszystkie pytania</p>
                </div>
                <img src={Porady} alt="Karta 5" className="card-image" />
              </div>
            </div>
          </div>

          <div className="right">
            <img src={Tlo} alt="Pies" className="responsive-image" />
          </div>
        </div>
    </div>
  );
}

export default MainContent;
