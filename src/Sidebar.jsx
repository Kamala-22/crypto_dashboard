


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [showMarketCap, setShowMarketCap] = useState(false);
//   const [showAth, setShowAth] = useState(false);
//   const [showAtl, setShowAtl] = useState(false);
//   const [showSupply, setShowSupply] = useState(false);
//   const [showPriceChange, setShowPriceChange] = useState(false);

//   return (
//     <div className="sidebar">
//       <Link to="/">Home</Link>
//       <div>
//         <button onClick={() => setShowMarketCap(!showMarketCap)}>
//           Market Cap {showMarketCap ? '▲' : '▼'}
//         </button>
//         {showMarketCap && (
//           <div className="dropdown">
//             <Link to="/market_cap_change_24h">Market Cap Change 24h</Link>
//             <Link to="/market_cap_change_percentage_24h">Market Cap Change % 24h</Link>
//             <Link to="/market_cap_rank">Market Cap Rank</Link>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={() => setShowAth(!showAth)}>
//           ATH {showAth ? '▲' : '▼'}
//         </button>
//         {showAth && (
//           <div className="dropdown">
//             <Link to="/ath">ATH</Link>
//             <Link to="/ath_change_percentage">ATH Change Percentage</Link>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={() => setShowAtl(!showAtl)}>
//           ATL {showAtl ? '▲' : '▼'}
//         </button>
//         {showAtl && (
//           <div className="dropdown">
//             <Link to="/atl">ATL</Link>
//             <Link to="/atl_change_percentage">ATL Change Percentage</Link>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={() => setShowSupply(!showSupply)}>
//           Supply {showSupply ? '▲' : '▼'}
//         </button>
//         {showSupply && (
//           <div className="dropdown">
//             <Link to="/circulating_supply">Circulating Supply</Link>
//             <Link to="/max_supply">Max Supply</Link>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={() => setShowPriceChange(!showPriceChange)}>
//           Price Change {showPriceChange ? '▲' : '▼'}
//         </button>
//         {showPriceChange && (
//           <div className="dropdown">
//             <Link to="/price_change_24h">Price Change 24h</Link>
//             <Link to="/price_change_percentage_24h">Price Change Percentage 24h</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [showMarketCap, setShowMarketCap] = useState(false);
  const [showAth, setShowAth] = useState(false);
  const [showAtl, setShowAtl] = useState(false);
  const [showSupply, setShowSupply] = useState(false);
  const [showPriceChange, setShowPriceChange] = useState(false);

  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <div>
        <button onClick={() => setShowMarketCap(!showMarketCap)}>
          Market Cap {showMarketCap ? '▲' : '▼'}
        </button>
        {showMarketCap && (
          <div className="dropdown">
            <Link to="/search?category=market_cap_change_24h">Market Cap Change 24h</Link>
            <Link to="/search?category=market_cap_change_percentage_24h">Market Cap Change % 24h</Link>
            <Link to="/search?category=market_cap_rank">Market Cap Rank</Link>
          </div>
        )}
      </div>
      {/* Repeat for other sections */}
      <div>
        <button onClick={() => setShowAth(!showAth)}>
          ATH {showAth ? '▲' : '▼'}
        </button>
        {showAth && (
          <div className="dropdown">
            <Link to="/search?category=ath">ATH</Link>
            <Link to="/search?category=ath_change_percentage">ATH Change Percentage</Link>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setShowAtl(!showAtl)}>
          ATL {showAtl ? '▲' : '▼'}
        </button>
        {showAtl && (
          <div className="dropdown">
            <Link to="/search?category=atl">ATL</Link>
            <Link to="/search?category=atl_change_percentage">ATL Change Percentage</Link>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setShowSupply(!showSupply)}>
          Supply {showSupply ? '▲' : '▼'}
        </button>
        {showSupply && (
          <div className="dropdown">
            <Link to="/search?category=circulating_supply">Circulating Supply</Link>
            <Link to="/search?category=max_supply">Max Supply</Link>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setShowPriceChange(!showPriceChange)}>
          Price Change {showPriceChange ? '▲' : '▼'}
        </button>
        {showPriceChange && (
          <div className="dropdown">
            <Link to="/search?category=price_change_24h">Price Change 24h</Link>
            <Link to="/search?category=price_change_percentage_24h">Price Change Percentage 24h</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
