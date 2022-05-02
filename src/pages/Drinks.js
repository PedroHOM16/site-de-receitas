import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipes from '../components/CardRecipes';
import RecipesContext from '../context/RecipesContext';
import { getDrinksByName } from '../services/ApiDrinks';

function Drinks() {
  const { filterDrinks, setFilterDrinks } = useContext(RecipesContext);
  const twelve = 12;

  useEffect(() => {
    const getDrink = async () => {
      const data = await getDrinksByName('');
      setFilterDrinks(data.drinks);
    };
    getDrink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <h1> DRINKS </h1>
=======
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
>>>>>>> 7381c3feeb9299c351795810c7a98a049f2bd02d
      <Footer />
    </div>
  );
}

export default Drinks;
