// import React, { useState } from 'react';
// import './PaginatedCoinDetails.css';

// const PaginatedCoinDetails = ({ coins }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const coinsPerPage = 4;
//   const indexOfLastCoin = currentPage * coinsPerPage;
//   const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
//   const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

//   const handleNextPage = () => {
//     if (indexOfLastCoin < coins.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="paginated-coin-details-container">
//       <div className="paginated-coin-details">
//         {currentCoins.map((coin, index) => (
//           <div key={coin.id} className="paginated-coin-detail">
//             <img src={coin.image} alt={coin.name} />
//             <p>{coin.name}</p>
//             <p>24h Low: {coin.low_24h.toLocaleString()}</p>
//             <p>24h High: {coin.high_24h.toLocaleString()}</p>
//           </div>
//         ))}
//       </div>
//       <div className="pagination-controls">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <button onClick={handleNextPage} disabled={indexOfLastCoin >= coins.length}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginatedCoinDetails;


import React, { useState } from 'react';
import './PaginatedCoinDetails.css';

const PaginatedCoinDetails = ({ coins }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 4;
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const handleNextPage = () => {
    if (indexOfLastCoin < coins.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="paginated-coin-details-container">
      <div className="paginated-coin-details">
        {currentCoins.map((coin) => (
          <div key={coin.id} className="paginated-coin-detail">
            <img src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            <p>24h Low: {coin.low_24h.toLocaleString()}</p>
            <p>24h High: {coin.high_24h.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={indexOfLastCoin >= coins.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedCoinDetails;
