import React, { useContext, useEffect, useState } from 'react';
import CardRecipes from '../components/CardRecipes';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { getMealByIngridients } from '../services/ApiMeals';

function Foods() {
  const { filter } = useContext(RecipesContext);
  const [defaultRender, setDefaultRender] = useState([]);
  const twelve = 12;

  const initialRender = async () => {
    const response = await getMealByIngridients('butter');
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
            <div key={ key }>
              <CardRecipes name={ el.strMeal } image={ el.strMealThumb } />
            </div>
          ))
        : defaultRender.map((element, key) => key < twelve
          && (
            <div key={ key }>
              <CardRecipes name={ element.strMeal } image={ element.strMealThumb } />
            </div>
          )) }
    </div>
  );
}
export default Foods;
