import "./App.css";
import Navbar from "../src/components/navbar";
import Favorites from "./pages/favorites";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="appMain">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
