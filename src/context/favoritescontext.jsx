import { createContext, useState, useEffect } from "react";

export const favoritesContext = createContext();

function UserFavorites({ children }) {
    const [favoriteCoins, setFavoriteCoins] = useState(() => {
        const storedFavorites = localStorage.getItem("favoriteCoins");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favoriteCoins", JSON.stringify(favoriteCoins));
    });

    function toggleFavorites(coin) {
        setFavoriteCoins((prevCoins) => {
            if (prevCoins.some((c) => c.id === coin.id)) {
                return prevCoins.filter((c) => c.id !== coin.id);
            } else {
                return [...prevCoins, coin];
            }
        });
    }

    return (
        <favoritesContext.Provider value={{ favoriteCoins, toggleFavorites }}>
            {children}
        </favoritesContext.Provider>
    );
}

export default UserFavorites;
