import CryptoCard from "../components/cryptocard";
import "../css/home.css";
import { getCoins, searchCoins } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCoins = async () => {
      try {
        const getLoadCoins = await getCoins();
        setCoins(getLoadCoins);
      } catch (err) {
        console.log(err);
        setError("Failed to load...");
      } finally {
        setLoading(false);
      }
    };

    loadCoins();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      alert(search);
    }
  };

  return (
    <>
      <div className="home-body">
        Market Overview
        <input
          type="text"
          placeholder="Search"
          className="home-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div className="card-section">
        <div className="header-section">
          <div>Coin</div>
          <div>Value</div>
        </div>
        {coins.map((coin) => (
          <CryptoCard coin={coin} key={coin.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
