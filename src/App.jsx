// component imports
import Home from "./components/pages/Home";
import Favorites from './components/pages/Favorites'
import NavBar from "./components/NavBar";

import "./css/App.css";
import { Routes, Route } from "react-router-dom";

//importing provider
import { MovieProvider } from "./contexts/MovieContext";


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
