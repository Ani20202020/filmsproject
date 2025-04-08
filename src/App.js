import React, { useContext } from "react";
import { Header } from "./components/header/hedaer.jsx";
import { SearchMovies } from "./pages/search-movies/search-movies.jsx";
import { Movies } from "./pages/movies/movies.jsx";
import { Quiz } from "./pages/quiz/quiz";
import { MoviesProvider, tab, MoviesContext } from "./context/moves-context.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./components/footer/footer.jsx"

import AiBot from './components/ai-bot/ai-bot.jsx';




const Tabs = () => {
  const { setActiveTab, activeTab } = useContext(MoviesContext);

  return (
    <div className="tabs-container d-flex justify-content-center mt-5">
      <ul className="nav nav-tabs custom-tabs">
        <li className="nav-item">
          <button
            onClick={() => setActiveTab(tab.search)}
            className={`nav-link custom-tab-button ${activeTab === tab.search ? "active" : ""}`}
          >
            🔍 Search Movies
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setActiveTab(tab.movies)}
            className={`nav-link custom-tab-button ${activeTab === tab.movies ? "active" : ""}`}
          >
            🎬 My Movie List
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setActiveTab(tab.quiz)}
            className={`nav-link custom-tab-button ${activeTab === tab.quiz ? "active" : ""}`}
          >
            ❓ Quiz
          </button>
        </li>
       
        <li className="nav-item">
  <button
    onClick={() => setActiveTab(tab.aiBot)}
    className={`nav-link custom-tab-button ${activeTab === tab.aiBot ? "active" : ""}`}
  >
    🤖 AI Bot
  </button>
</li>

      </ul>
    </div>
  );
};

const Layout = () => {
  const { activeTab } = useContext(MoviesContext);

  return (
    <div className="content-container text-center mt-5">
      {activeTab === tab.search && <SearchMovies />}
      {activeTab === tab.movies && <Movies />}
      {activeTab === tab.quiz && <Quiz />}
      {activeTab === tab.aiBot && <AiBot />}

    </div>
  );
};


function App() {
  return (
    <MoviesProvider>
      <div className="app-container text-center">
        <Header />
        <Tabs />
        <Layout />
        <Footer />
      </div>
    </MoviesProvider>
  );
}

export default App;

