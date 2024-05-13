import React from 'react';
import MainLogo from '../../../static/images/robinhood.svg';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Header.css';

function Logo() {
  return (
    <div className="header__logo">
      <img src={MainLogo} width={25} />
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
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    );
  }
  
  function Header() {
    return (
      <header className="header__wrapper">
        <Logo />
        <Search />
        <MenuItems />
      </header>
    );
  }
  
  export default Header;