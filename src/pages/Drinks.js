import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { filterDrinks } = useContext(RecipesContext);
  const twelve = 12;

  return (
    <div>
      <Header />
      {
        filterDrinks === null
          ? <span>Tente novamente ou faça uma dieta!</span>
          : filterDrinks.map((el, index) => index < twelve
          && (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ el.strDrinkThumb }
                alt="imagem"
              />
              <h3 data-testid={ `${index}-card-name` }>{el.strDrink}</h3>
            </div>
          ))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
