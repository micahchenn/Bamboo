import React from 'react';
import MainLogo from '../../../static/images/robinhood.svg';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Default_Header.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="header__logo">
      <img src={MainLogo} width={25} />
      <span className="header__logo-text">Harbinger</span> {/* Add this line */}
    </div>
  );
}

function Search() {
  return (
    <div className="header__search">
      <TextField
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}


function MenuItems() {
  return (
    <div className="header__menuItems">
      <Link to="/free-stocks">Free Stocks</Link>
      <Link to="/about-us">About us</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
  
  function Default_Header() {
    return (
      <header className="header__wrapper">
        <Logo />
        <MenuItems />
      </header>
    );
  }
  
  export default Default_Header;