import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { filter } = useContext(RecipesContext);
  const twelve = 12;

  return (
    <div>
      <Header />
      {
        filter === null
          ? <span>Tente novamente ou faça uma dieta!</span>
          : filter.map((el, index) => index < twelve
          && (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ el.strMealThumb }
                alt="imagem"
              />
              <h3 data-testid={ `${index}-card-name` }>{el.strMeal}</h3>
            </div>
          ))
      }
      <Footer />
    </div>
  );
}
export default Foods;
