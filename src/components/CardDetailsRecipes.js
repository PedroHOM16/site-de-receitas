import React, { useContext, useEffect } from 'react';
import './CardDetailsRecipes.css';
import RecipesContext from '../context/RecipesContext';
import StartRecipeBtn from './StartRecipeBtn';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';
// import CardRecipes from './CardRecipes';

const six = 6;
function CardDetailsRecipes(obj) {
  const { objDatas, ingredients, recomendation } = obj;
  const { ingredientsArray, measureArray } = ingredients;

  const { setSavedList, saveBool, savedList } = useContext(RecipesContext);
  const {
    instructions, image, name, id,
    categoryX, nationality, type, alcoholicOrNot, category, video } = objDatas;

  useEffect(() => {
    console.log('passo 1');
    setSavedList({
      id,
      name,
      image,
      nationality,
      category,
      type,
      alcoholicOrNot,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objDatas]);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt={ name }
      />
      <h2 data-testid="recipe-title">{ name }</h2>
      <ShareBtn />
      <FavoriteBtn data={ id } />
      <p data-testid="recipe-category">{ categoryX }</p>
      <ul>
        {
          ingredientsArray
            && ingredientsArray.map((ing, index) => (
              ing
              && (
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                >
                  {measureArray[index] ? `${ing}: ${measureArray[index]}` : ing}
                </li>
              )))
        }
      </ul>
      <p data-testid="instructions">{ instructions }</p>
      <br />
      <div data-testid="video">{ video }</div>
      <div className="recomendation">
        <div className="recomendation2">
          {recomendation
            && recomendation.map((each, i) => (
              i < six
              && (
                <div key={ i } className="card" data-testid={ `${i}-recomendation-card` }>
                  <img
                    src={ each.strDrinkThumb || each.strMealThumb }
                    alt={ each.strMeal || each.strDrink }
                  />
                  <p
                    data-testid={ `${i}-recomendation-title` }
                  >
                    { each.strMeal || each.strDrink }
                  </p>
                </div>)
            ))}
        </div>
      </div>
      {saveBool
      && (
        <StartRecipeBtn savedList={ savedList } />
      )}
    </div>
  );
}

export default CardDetailsRecipes;