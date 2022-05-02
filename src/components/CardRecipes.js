import PropTypes from 'prop-types';
import React from 'react';

function CardRecipes({ index, name, image }) {
  return (
    <div>
      <img data-testid={ `${index}-card-img` } src={ image } alt="imagem" />
      <h3 data-testid={ `${index}-card-name` }>{name}</h3>
    </div>
  );
}

CardRecipes.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardRecipes;
