import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';
import Quiz from './pages/Quiz.jsx';
import Blog from './pages/Blog.jsx';
import Advice from './pages/Advice.jsx';
import Breeds from './pages/Breeds.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/breeds" element={<Breeds />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
