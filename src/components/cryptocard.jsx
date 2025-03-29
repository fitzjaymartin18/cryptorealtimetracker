import "../css/cryptocard.css";
import { favoritesContext } from "../context/favoritescontext";
import { useContext, useState } from "react";

function CryptoCard({ coin }) {
  const {favoriteCoins, toggleFavorites} = useContext(favoritesContext);

  function AddFavorites({ currency }) {
    alert("Added to favorites");
  }

  const priceStyle = { color: coin.current_price < 0 ? "red" : "green" };
  const percentageStyle = {
    color: coin.market_cap_change_percentage_24h < 0 ? "red" : "green",
  };
  const starStyle = {
    color: favoriteCoins.some((c) => c.id === coin.id) ? "rgb(255, 187, 0)" : "grey", // ✅ Correct
    cursor: "pointer",
  };

  const price = parseFloat(coin.current_price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const percentage = parseFloat(coin.market_cap_change_percentage_24h).toFixed(
    4
  );

  return (
    <>
      <div className="cryptoCard">
        <div className="cryptoCategory">
          <div
            className="starBtn"
            onClick={() => toggleFavorites(coin)}
            style={starStyle}
          >
            ★
          </div>
          <div className="cryptoLogo">
            <img src={coin.image} alt="" />
          </div>
          <div className="cryptoNames">
            <div className="cryptoSymbol">{coin.symbol.toUpperCase()}</div>
            <div className="cryptoTitle">{coin.name.toUpperCase()}</div>
          </div>
        </div>

        <div className="cryptoValue">
          <div className="cyrptoPrice" style={priceStyle}>
            ${price}
          </div>
          <div className="cryptoPercentage" style={percentageStyle}>
            {coin.market_cap_change_percentage_24h > 0
              ? `+${percentage}`
              : percentage}
            %
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoCard;
