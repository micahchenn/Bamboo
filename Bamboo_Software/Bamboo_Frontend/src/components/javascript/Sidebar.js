import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater'; // Import the icon for market watchlist
import MainLogo from '../../../static/images/robinhood.svg';
import '../css/Sidebar.css';

function Sidebar(props) {
  const [isExpanded, setExpanded] = useState(false); // set to true
  const [clickedItem, setClickedItem] = useState('');

  const handleClick = (event, itemName) => {
    event.preventDefault(); // Prevent the default action
    setClickedItem(itemName);
    if (itemName === 'Dashboard') {
      setExpanded(!isExpanded); // toggle the isExpanded state
      props.onToggle(!isExpanded); // pass the new state up to the parent component
    }
    props.onItemSelect(itemName);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'open' : ''}`}>
      <ul>
        <li><Link onClick={() => handleClick('Dashboard')}><DashboardIcon /><span>Dashboard</span></Link></li>
        <li><Link to="/investment-portfolio" onClick={() => handleClick('Investment Portfolio')}><AccountBalanceWalletIcon /><span>Investment Portfolio</span></Link></li>
        <li><Link to="/crypto" onClick={() => handleClick('Crypto')}><MonetizationOnIcon /><span>Crypto</span></Link></li>
        <li><Link to="/retirement-account" onClick={() => handleClick('Retirement Account')}><AccountBalanceIcon /><span>Retirement Account</span></Link></li>
        <li><Link to="/trading-account" onClick={() => handleClick('Trading Account')}><TrendingUpIcon /><span>Trading Account</span></Link></li>
        <li><Link to="/market-watchlist" onClick={() => handleClick('Market Watchlist')}><WatchLaterIcon /><span>Market Watchlist</span></Link></li> {/* Add the market watchlist link */}
        <li><Link to="/logout" onClick={() => handleClick('Logout')}><LogoutIcon /><span>Logout</span></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;