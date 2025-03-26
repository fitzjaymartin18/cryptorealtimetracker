import "../css/cryptocard.css";

function CryptoCard({ coin }) {
  function AddFavorites({ currency }) {
    alert("Added to favorites");
  }

  const priceStyle = { color: coin.current_price < 0 ? "red" : "green" };
  const percentageStyle = {
    color: coin.market_cap_change_percentage_24h < 0 ? "red" : "green",
  };

  return (
    <>
      <div className="cryptoCard">
        <div className="cryptoCategory">
          <div className="starBtn" onClick={AddFavorites}>
            ★
          </div>
          <div className="cryptoLogo">
            <img src={coin.image} alt="" />
          </div>
          <div className="cryptoTitle">{coin.symbol.toUpperCase()}</div>
        </div>

        <div className="cryptoValue">
          <div className="cyrptoPrice" style={priceStyle}>
            ${coin.current_price}
          </div>
          <div className="cryptoPercentage" style={percentageStyle}>
            {coin.market_cap_change_percentage_24h}%
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoCard;
