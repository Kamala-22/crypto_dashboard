


import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, marketCapChangePercentage }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt={name} />
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${ price.toLocaleString()}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className={`coin-market-cap ${marketCapChangePercentage < 0 ? 'red' : 'green'}`}>
            {marketCapChangePercentage.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;


