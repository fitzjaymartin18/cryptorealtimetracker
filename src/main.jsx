import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserFavorites from "./context/favoritescontext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserFavorites>
        <App />
      </UserFavorites>
    </BrowserRouter>
  </StrictMode>
);
