import logo from "./logo.svg";
import "./App.css";
import "../src/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albumpage/:songID" element={<AlbumPage />} />
        <Route path="/artistpage/:artistID" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
