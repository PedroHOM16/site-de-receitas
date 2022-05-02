import React, { useContext, useEffect, useState } from 'react';
import CardRecipes from '../components/CardRecipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { getMealByIngridients } from '../services/ApiMeals';

function Foods() {
  const { filter } = useContext(RecipesContext);
  const [defaultRender, setDefaultRender] = useState([]);
  const twelve = 12;

  const initialRender = async () => {
    let response = [];
    try {
      response = await getMealByIngridients('butter');
    } catch (error) {
      console.log('error');
    }
    setDefaultRender(response.meals);
  };

  useEffect(() => {
    initialRender();
  }, []);

  return (
    <div>
      <Header />
      {filter
        ? filter.map((el, key) => key < twelve
          && (
            <div data-testid={ `${key}-recipe-card` } key={ key }>
              <CardRecipes key={ key } name={ el.strMeal } image={ el.strMealThumb } />
            </div>
          ))
        : defaultRender.map((element, key) => key < twelve
          && (
            <div data-testid={ `${key}-recipe-card` } key={ key }>
              <CardRecipes
                key={ key }
                name={ element.strMeal }
                image={ element.strMealThumb }
              />
            </div>
          )) }
      <Footer />
    </div>
  );
}
export default Foods;
