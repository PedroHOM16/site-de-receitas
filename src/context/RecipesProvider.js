import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState({ email: '' });
  const [passwordInput, setPasswordInput] = useState('');
  const [mealsToken, setMealsToken] = useState(null);
  const [cocktailsToken, setCocktailsToken] = useState(null);
  const [searchI, setSearchIcon] = useState(false);
  const [filter, setFilter] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState([]);

  const contextValue = {
    email,
    setEmail,
    passwordInput,
    setPasswordInput,
    mealsToken,
    setMealsToken,
    cocktailsToken,
    setCocktailsToken,
    searchI,
    setSearchIcon,
    filter,
    setFilter,
    filterDrinks,
    setFilterDrinks,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default RecipesProvider;
