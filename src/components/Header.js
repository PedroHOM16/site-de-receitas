import React, { useContext, useState, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';
import './Header.css';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const {
    searchI,
    setSearchIcon,
  } = useContext(RecipesContext);

  const [title, setTitle] = useState('');
  const [search, setSearch] = useState(true);

  const locationTitle = () => {
    const page = window.location.pathname;
    if (page === '/foods') setTitle('Foods');
    if (page === '/drinks') setTitle('Drinks');
    if (page === '/explore') {
      setTitle('Explore');
      setSearch(false);
    }
    if (page === '/explore/foods') {
      setTitle('Explore Foods');
      setSearch(false);
    }
    if (page === '/explore/drinks') {
      setTitle('Explore Drinks');
      setSearch(false);
    }
  };

  useEffect(() => {
    locationTitle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchBar = () => {
    if (searchI) {
      setSearchIcon(false);
    } else {
      setSearchIcon(true);
    }
  };

  const profilePage = () => {
    window.location.href = '/profile';
  };

  return (
    <div>
      <header>
        <input
          type="button"
          data-testid="profile-top-btn"
          className="profile-top-btn"
          src={ profileIcon }
          onClick={ profilePage }
        />
        <h2 data-testid="page-title">{ title }</h2>
        { search ? <input
          type="button"
          data-testid="search-top-btn"
          className="search-top-btn"
          src={ searchIcon }
          onClick={ searchBar }
        /> : null}
      </header>
      {searchI && <SearchBar />}
    </div>
  );
}

export default Header;
