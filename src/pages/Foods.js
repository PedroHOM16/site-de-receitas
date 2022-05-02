import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import RecipesContext from '../context/RecipesContext';
import { getMealByName } from '../services/ApiMeals';

function Foods() {
  const { filter, setFilter } = useContext(RecipesContext);
  const twelve = 12;

  useEffect(() => {
    const getFood = async () => {
      const data = await getMealByName('');
      setFilter(data.meals);
    };
    getFood();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header search title="Foods" />
      {
        filter === null
          ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
          : filter.map((el, index) => index < twelve
          && (filter.length === 1 ? <Redirect to={ `/foods/${el.idMeal}` } />
            : (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <CardRecipes
                  index={ index }
                  image={ el.strMealThumb }
                  name={ el.strMeal }
                />
              </div>)
          ))
      }
      <Footer />
    </div>
  );
}
export default Foods;
