import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';
import './Header.css';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const {
    searchI,
    setSearchIcon,
  } = useContext(RecipesContext);

  const searchBar = () => {
    if (searchI) {
      setSearchIcon(false);
    } else {
      setSearchIcon(true);
    }
  };

  const profilePage = () => {
    const { history } = props;
    history.push('/profile');
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
        <h2 data-testid="page-title">titulo</h2>
        <input
          type="button"
          data-testid="search-top-btn"
          className="search-top-btn"
          src={ searchIcon }
          onClick={ searchBar }
        />
      </header>
      {searchI && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Header;
