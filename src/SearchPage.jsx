// SearchPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
  const [coin, setCoin] = useState(null);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');

  useEffect(() => {
    if (query) {
      const fetchCoinData = async () => {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`);
          setCoin(response.data);
        }
         catch (error) {
        //   console.error('Error fetching coin data:', error);
        }
      };

      fetchCoinData();
    }
  }, [query]);

  return (
    <div>
      <h1>Search Coins</h1>
      <input
        type="text"
        placeholder="Enter coin name or symbol"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setQuery(query)}>Search</button>

      {coin && (
        <div className="coin-details">
          <h2>{coin.name}</h2>
          <img src={coin.image.small} alt={coin.name} />
          <p>Symbol: {coin.symbol.toUpperCase()}</p>
          <p>Market Cap: {coin.market_data.market_cap.usd}</p>
          {/* Display additional details based on the category */}
          {category === 'market_cap_change_24h' && (
            <p>Market Cap Change 24h: {coin.market_data.market_cap_change_24h.usd}</p>
          )}
          {/* Add more conditions for other categories */}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

