import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipes from '../components/CardRecipes';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { filterDrinks } = useContext(RecipesContext);
  const twelve = 12;

  return (
    <div>
      <Header search title="Drinks" />
      {
        filterDrinks === null
          ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
          : filterDrinks.map((el, index) => index < twelve
          && (filterDrinks.length === 1 ? <Redirect to={ `/drinks/${el.idDrink}` } />
            : (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <CardRecipes
                  index={ index }
                  image={ el.strDrinkThumb }
                  name={ el.strDrink }
                />
              </div>)
          ))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
