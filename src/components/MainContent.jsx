import React from 'react';
import './MainContent.css';
import Encyklopednia from '../assets/encyklopedia.png';
import Wyszukiwanie from '../assets/wyszukiwanie.png';
import Quiz from '../assets/quiz.png';
import Blog from '../assets/blog.png';
import Porady from '../assets/porady.png';
import Tlo from '../assets/tlo.png';

function MainContent() {
  return (
<div className="main-content">
      <div className="content-wrapper">
        <div className="cards-section">
          <div className="intro">
            <h1>Witamy w E-Dog!</h1>
            <p>Miejscu stworzonym z myślą o psach i ich właścicielach</p>
          </div>


          <div className="card-layout">
            <div className="row">
              <div className="card large-card">
                <h3>Encyklopedia</h3>
                <p>Przeglądaj i porównuj wszystkie rasy psów</p>
                <img src={Encyklopednia} alt="Psy - Encyklopedia" />
              </div>
              <div className="card small-card">
                <h3>Wyszukiwanie zaawansowane</h3>
                <p>Kiedy już wiesz jakiej rasy psa szukasz</p>
                <img src={Wyszukiwanie} alt="Wyszukiwanie" />
              </div>
            </div>

            <div className="row">
              <div className="card full-width-card">
                <h3>Quiz</h3>
                <p>Kiedy jeszcze nie wiesz jaka rasa jest dla Ciebie odpowiednia i potrzebujesz pomocy</p>
                <img src={Quiz} alt="Quiz" />
              </div>
            </div>

            <div className="row">
              <div className="card half-width-card">
                <h3>Blog</h3>
                <p>Wszystkie najnowsze informacje o pieskim życiu</p>
                <img src={Blog} alt="Blog" />
              </div>
              <div className="card half-width-card">
                <h3>Porady</h3>
                <p>Odpowiedzi na wszystkie pytania</p>
                <img src={Porady} alt="Porady" />
              </div>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img src={Tlo} alt="Pies machający łapą" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
