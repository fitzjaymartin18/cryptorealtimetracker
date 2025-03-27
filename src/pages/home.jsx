import CryptoCard from "../components/cryptocard";
import "../css/home.css";
import { getCoins } from "../services/api";
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

  useEffect(() => {
    setLoading(true);
    const fetchSearchCoins = async () => {
      if (search.trim() === "") {
        const getLoadCoins = await getCoins();
        setCoins(getLoadCoins);
      } else {
        try {
          const getSearchCoins = await getCoins();
          const filteredCoinsID = getSearchCoins.filter((coin) =>
            coin.id.toLowerCase().startsWith(search.toLowerCase())
          );

          const filteredCoinsSymbol = getSearchCoins.filter((coin) =>
            coin.symbol.toLowerCase().startsWith(search.toLowerCase())
          );

          // if (filteredCoinsID.length > 0 && filteredCoinsSymbol.length > 0) {
          //   setCoins([...filteredCoinsSymbol, ...filteredCoinsID]);
          // } else {
            setCoins(
              filteredCoinsID.length > 0 ? filteredCoinsID : filteredCoinsSymbol
            );
          // }
        } catch (err) {
          console.log(err);
          setError("Coin not available");
        } finally {
          setLoading(false);
        }
      }
    };

    const delaySearch = setTimeout(() => {
      fetchSearchCoins();
    }, 100);

    return () => clearTimeout(delaySearch);
  }, [search]);

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
