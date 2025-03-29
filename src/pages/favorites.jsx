import "../css/favorites.css";
import CryptoCard from "../components/cryptocard";
import { favoritesContext } from "../context/favoritescontext";
import { useContext, useState } from "react";

function Favorites() {
  const { favoriteCoins, toggleFavorites } = useContext(favoritesContext);

  return (
    <>
      {favoriteCoins.length < 1 ? (
        <>
          <hr />
          <div className="favorite-message">"Add a coin"</div>
        </>
      ) : (
        <>
          <div className="card-section">
            <div className="header-section">
              <div>Coin</div>
              <div>Value</div>
            </div>
            {favoriteCoins.map((coin) => (
              <CryptoCard coin={coin} key={coin.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Favorites;
