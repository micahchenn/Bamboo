import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';
import MainLogo from '../../../static/images/robinhood.svg';
import '../css/Sidebar.css';

function Sidebar(props) {
    const [isExpanded, setExpanded] = useState(true); // set to true
    const [clickedItem, setClickedItem] = useState('');
  
    const handleClick = (itemName) => {
      setClickedItem(itemName);
      if (itemName === 'Dashboard') {
        setExpanded(!isExpanded);
      }
      props.onItemSelect(itemName);
    };
  return (
    <div className={`sidebar ${isExpanded ? 'open' : ''}`}>
      <ul>
        <li>
          <a href="#" onClick={() => handleClick('Home')}>
            <img src={MainLogo} alt="Main Logo" className="logo" />
            <span className="logo-text">HARBINGER</span>
          </a>
        </li>
        <li><a href="#" onClick={() => handleClick('Dashboard')}><DashboardIcon /><span>Dashboard</span></a></li>
        <li><a href="#" onClick={() => handleClick('Investment Portfolio')}><AccountBalanceWalletIcon /><span>Investment Portfolio</span></a></li>
        <li><a href="#" onClick={() => handleClick('Crypto')}><MonetizationOnIcon /><span>Crypto</span></a></li>
        <li><a href="#" onClick={() => handleClick('Retirement Account')}><AccountBalanceIcon /><span>Retirement Account</span></a></li>
        <li><a href="#" onClick={() => handleClick('Trading Account')}><TrendingUpIcon /><span>Trading Account</span></a></li>
        <li><a href="#" onClick={() => handleClick('Logout')}><LogoutIcon /><span>Logout</span></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;