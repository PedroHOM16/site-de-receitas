import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardDone from '../components/CardDone';

const favoriteRecipes = [
  {
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

const copy = require('clipboard-copy');

function Favoites() {
  const [favoriteRecipes2, setFavoriteRecipes] = useState([
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ]);

  const [teste, setTeste] = useState(false);
  const [teste2, setTeste2] = useState(false);
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  });

  function funcCompartilhar(elemento) {
    const endPoint = `http://localhost:3000/foods/${elemento.id}`;
    // navigator.clipboard.writeText(endPoint);
    copy(endPoint);
    if (elemento.type === 'food') {
      setTeste(true);
    } else {
      setTeste2(true);
    }
  }

  function desfavoritar(elemento) {
    console.log(elemento);
  }

  function Listar(palavra) {
    if (palavra === 'food') {
      const teste50 = favoriteRecipes.filter((elemento) => (
        elemento.type === 'food' ? elemento : ''
      ));
      setFavoriteRecipes(teste50);
    } else
    if (palavra === 'drink') {
      const teste50 = favoriteRecipes.filter((elemento) => (
        elemento.type === 'drink' ? elemento : ''
      ));
      setFavoriteRecipes(teste50);
    } else {
      const teste50 = favoriteRecipes;
      setFavoriteRecipes(teste50);
    }
  }

  return (
    <div>
      <Header title="Favorite Recipes" />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => Listar('all') }
        >
          {' '}
          All
          {' '}

        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => Listar('food') }
        >
          {' '}
          Food
          {' '}
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => Listar('drink') }
        >
          {' '}
          Drinks
          {' '}

        </button>
      </div>

      {favoriteRecipes2.map((elemento, index) => (
        <div key={ index }>
          <CardDone
            index={ index }
            image={ elemento.image }
            name={ elemento.name }
            type={ elemento.type }
            id={ elemento.id }
          />
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src="src/images/shareIcon.svg"
            onClick={ () => ((funcCompartilhar(elemento))) }
          >
            {' '}
            Compartilhar
            {' '}
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src="src/images/blackHeartIcon.svg"
            onClick={ () => ((desfavoritar(elemento))) }
          >
            {' '}
            Desfavoritar
            {' '}

          </button>
          {elemento.type === 'food'
            ? (
              <div>

                {teste === true ? (
                  <div>
                    <p>Link copied!</p>
                  </div>) : ''}
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${elemento.nationality} - ${elemento.category}`}

                </p>
                {' '}

              </div>) : ''}
          {elemento.type === 'food'
            ? (
              <div>
                {elemento.category}
                {' '}
                {elemento.nationality}
              </div>)
            : (
              <div>
                {teste2 === true ? (
                  <div>
                    <p>Link copied!</p>
                  </div>) : ''}
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {elemento.alcoholicOrNot}
                </p>
              </div>
            )}
        </div>))}

    </div>
  );
}

export default Favoites;
