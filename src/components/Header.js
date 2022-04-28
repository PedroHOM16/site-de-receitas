import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';

function Header(props) {
  const {
    searchIcon,
    setSearchIcon,
  } = useContext(RecipesContext);

  const searchBar = () => {
    if (searchIcon) {
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
        <button
          type="button"
          data-testid="profile-top-btn"
          onClick={ profilePage }
        >
          <img src="src/images/profileIcon.svg" alt="Profile Icon" />
        </button>
        <h2 data-testid="page-title">titulo</h2>
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ searchBar }
        >
          <img src="src/images/searchIcon.svg" alt="Search Icon" />
        </button>
      </header>
      {searchIcon && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Header;
