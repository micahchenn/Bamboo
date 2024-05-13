import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';
import '../css/Sidebar.css';

function Sidebar() {
  const [isDashboardActive, setDashboardActive] = useState(false);

  return (
    <div className={`sidebar ${isDashboardActive ? 'open' : ''}`}>
      <ul>
        <li><a href="#" onClick={() => setDashboardActive(!isDashboardActive)}><DashboardIcon /> {isDashboardActive && 'Dashboard'}</a></li>
        <li><a href="#"><AccountBalanceWalletIcon /> {isDashboardActive && 'Investment Portfolio'}</a></li>
        <li><a href="#"><MonetizationOnIcon /> {isDashboardActive && 'Crypto'}</a></li>
        <li><a href="#"><AccountBalanceIcon /> {isDashboardActive && 'Retirement Account'}</a></li>
        <li><a href="#"><TrendingUpIcon /> {isDashboardActive && 'Trading Account'}</a></li>
        <li><a href="#"><LogoutIcon /> {isDashboardActive && 'Logout'}</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;