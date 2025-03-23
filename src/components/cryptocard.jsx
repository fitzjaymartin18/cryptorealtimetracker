import "../css/cryptocard.css";
import { useState } from "react";

function CryptoCard() {
  function AddFavorites({ currency }) {
    alert("Added to favorites");
  }

  return (
    <>
      <div className="cryptoCard">
        <div className="cryptoCategory">
          <div className="starBtn" onClick={AddFavorites}>
            ★
          </div>
          <div className="cryptoLogo">dfsdf</div>
          <div className="cryptoTitle">BTC</div>
        </div>

        <div className="cryptoValue">
          <div className="cyrptoPrice">$1000</div>
          <div className="cryptoPercentage">-0.27%</div>
        </div>
      </div>
    </>
  );
}

export default CryptoCard;
