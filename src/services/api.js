const API_KEY = "CG-crBqZvoawm7kAVqYPnmRqu1W";
const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": API_KEY,
  },
};
const URL = `${BASE_URL}?vs_currency=usd`;

export const getCoins = async () => {
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
};

export const searchCoins = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}?vs_currency=usd&ids=${encodeURIComponent(query)}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
};
''