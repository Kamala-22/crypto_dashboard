

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Coin from './Coin';
// import Sidebar from './Sidebar';
// import LineChart from './LineChart';
// import CoinDetails from './CoinDetails';
// // import React from 'react';
// import PaginatedCoinDetails from './PaginatedCoinDetails';
// import './App.css';

// function CoinList() {
//   const [coins, setCoins] = useState([]);
//   const [search, setSearch] = useState('');
//   const [error, setError] = useState(null);
//   const coinsPerPage = 11;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//           params: {
//             vs_currency: 'usd',
//             ids: 'bitcoin',
//             category: 'layer-1'
//           }
//         });
//         setCoins(response.data);
//         localStorage.setItem('coins', JSON.stringify(response.data));
//       } catch (error) {
//         console.error('Error fetching data from API', error);
//         setError('Error fetching data from API');
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const storedCoins = localStorage.getItem('coins');
//     if (storedCoins) {
//       setCoins(JSON.parse(storedCoins));
//     }
//   }, []);

//   const handleSearchChange = async (e) => {
//     setSearch(e.target.value);
//     setCurrentPage(1);

//     if (e.target.value) {
//       try {
//         const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${e.target.value}/market_chart`, {
//           params: {
//             vs_currency: 'usd',
//             days: 7,
//             interval: 'daily'
//           }
//         });
//         console.log('API response:', response.data); // Log the response to check the structure

//         const data = response.data.market_caps.map(cap => cap[1]);
//         console.log('Chart data:', data); // Log the chart data

//         setChartData(data);
//       } catch (error) {
//         console.error('Error fetching chart data', error);
//         setError('Error fetching chart data');
//       }
//     } else {
//       setChartData([]);
//     }
//   };

//   const filteredCoins = coins.filter(coin =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const indexOfLastCoin = currentPage * coinsPerPage;
//   const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
//   const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(filteredCoins.length / coinsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="App">
//       <Sidebar />
//       <div className="content">
//         <h1>Currency</h1>
//         {error && <p>Error: {error}</p>}
//         <form className="coin-search">
//           <input
//             type="text"
//             placeholder="Search currency"
//             className="coin-input"
//             onChange={handleSearchChange}
//           />
//         </form>
//         {chartData.length > 0 && <LineChart data={chartData} />}
//         <div className="coin-list">
//           {currentCoins.map(coin => (
//             <div key={coin.id} className="coin-wrapper">
//               <Coin
//                 name={coin.name}
//                 image={coin.image}
//                 symbol={coin.symbol}
//                 price={coin.current_price}
//                 volume={coin.total_volume}
//                 marketCapChangePercentage={coin.market_cap_change_percentage_24h}
//               />
//             </div>
//           ))}
//         </div>
//         <CoinDetails coins={currentCoins} />
//         <div className="pagination">
//           {pageNumbers.map(number => (
//             <button
//               key={number}
//               onClick={() => setCurrentPage(number)}
//               className={`page-item ${currentPage === number ? 'active' : ''}`}
//             >
//               {number}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="app">
//       <PaginatedCoinDetails coins={coins} />
//     </div>

//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CoinList />} />
//         <Route path="/market_cap_change_24h" element={<h2>Market Cap Change 24h</h2>} />
//         <Route path="/market_cap_change_percentage_24h" element={<h2>Market Cap Change Percentage 24h</h2>} />
//         <Route path="/market_cap_rank" element={<h2>Market Cap Rank</h2>} />
//         <Route path="/ath" element={<h2>ATH</h2>} />
//         <Route path="/ath_change_percentage" element={<h2>ATH Change Percentage</h2>} />
//         <Route path="/atl" element={<h2>ATL</h2>} />
//         <Route path="/atl_change_percentage" element={<h2>ATL Change Percentage</h2>} />
//         <Route path="/circulating_supply" element={<h2>Circulating Supply</h2>} />
//         <Route path="/max_supply" element={<h2>Max Supply</h2>} />
//         <Route path="/price_change_24h" element={<h2>Price Change 24h</h2>} />
//         <Route path="/price_change_percentage_24h" element={<h2>Price Change Percentage 24h</h2>} />
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;




// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import LineChart from './LineChart';
import Coin from './Coin';
import CoinDetails from './CoinDetails';
import PaginatedCoinDetails from './PaginatedCoinDetails';
import './App.css';
import SearchPage from './SearchPage';

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const coinsPerPage = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin',
            category: 'layer-1'
          }
        });
        setCoins(response.data);
        localStorage.setItem('coins', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching data from API', error);
        setError('Error fetching data from API');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedCoins = localStorage.getItem('coins');
    if (storedCoins) {
      setCoins(JSON.parse(storedCoins));
    }
  }, []);

  const handleSearchChange = async (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);

    if (e.target.value) {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${e.target.value}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: 7,
            interval: 'daily'
          }
        });
        const data = response.data.market_caps.map(cap => cap[1]);
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data', error);
        setError('Error fetching chart data');
      }
    } else {
      setChartData([]);
    }
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCoins.length / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1>Currency</h1>
        {error && <p>Error: {error}</p>}
        <form className="coin-search">
          <input
            type="text"
            placeholder="Search currency"
            className="coin-input"
            onChange={handleSearchChange}
          />
        </form>
        {chartData.length > 0 && <LineChart data={chartData} />}
        <div className="coin-list">
          {currentCoins.map(coin => (
            <div key={coin.id} className="coin-wrapper">
              <Coin
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.total_volume}
                marketCapChangePercentage={coin.market_cap_change_percentage_24h}
              />
            </div>
          ))}
        </div>
        <CoinDetails coins={currentCoins} />
        <div className="pagination">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`page-item ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          ))}
        </div>
        <PaginatedCoinDetails coins={coins} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/market_cap_change_24h" element={<h2>Market Cap Change 24h</h2>} />
        <Route path="/market_cap_change_percentage_24h" element={<h2>Market Cap Change Percentage 24h</h2>} />
        <Route path="/market_cap_rank" element={<h2>Market Cap Rank</h2>} />
        <Route path="/ath" element={<h2>ATH</h2>} />
        <Route path="/ath_change_percentage" element={<h2>ATH Change Percentage</h2>} />
        <Route path="/atl" element={<h2>ATL</h2>} />
        <Route path="/atl_change_percentage" element={<h2>ATL Change Percentage</h2>} />
        <Route path="/circulating_supply" element={<h2>Circulating Supply</h2>} />
        <Route path="/max_supply" element={<h2>Max Supply</h2>} />
        <Route path="/price_change_24h" element={<h2>Price Change 24h</h2>} />
        <Route path="/price_change_percentage_24h" element={<h2>Price Change Percentage 24h</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
