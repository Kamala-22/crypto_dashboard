
import React, { useState } from 'react';
import './CoinDetails.css';
import LineChart from './LineChart'; // Import your LineChart component

const CoinDetails = ({ coins }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const colors = [
    'rgba(255, 0, 0, 0.3)', // Transparent red
    'rgba(0, 255, 0, 0.3)', // Transparent green
    'rgba(0, 0, 255, 0.3)', // Transparent blue
    'rgba(255, 255, 0, 0.3)' // Transparent yellow
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Dummy data for the line chart (replace with actual data fetching logic)
  const getChartData = (coin) => {
    return [
      // Example data for 7 days
      coin.market_cap_change_percentage_24h,
      coin.price_change_24h,
      coin.total_volume,
      coin.circulating_supply,
      coin.max_supply,
      coin.current_price,
      coin.fully_diluted_valuation
    ];
  };

  return (
    <div className="coin-details-container">
      <div className="coin-details">
        {coins.slice(0, 4).map((coin, index) => (
          <div
            key={coin.id}
            className={`coin-detail ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundColor: colors[index % colors.length] }}
            onClick={() => handleClick(index)}
          >
            <img src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            <p>Total Supply: {coin.total_supply ? coin.total_supply.toLocaleString() : 'N/A'}</p>
            <p>Max Supply: {coin.max_supply ? coin.max_supply.toLocaleString() : 'N/A'}</p>
          </div>
        ))}
      </div>
      <div className="charts-container">
        {activeIndex !== null && (
          <div className="chart-section">
            <LineChart data={getChartData(coins[activeIndex])} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinDetails;

