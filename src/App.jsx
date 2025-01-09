import React, { useEffect } from "react";
import { login } from "./api/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import Quiz from "./pages/Quiz.jsx";
import Blog from "./pages/Blog.jsx";
import Advice from "./pages/Advice.jsx";
import Breeds from "./pages/Breeds.jsx";
import "./App.css";
import BgSvg from "./assets/vector4.svg";
import { Breed } from "./pages/Breed.jsx";
function App() {
  useEffect(() => {
    const authenticate = async () => {
      try {
        const data = await login();
        //console.log("Login successful:", data);
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };

    authenticate();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="bg-container">
            <img src={BgSvg} className="bg" />
          </div>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breed/:id" element={<Breed />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
