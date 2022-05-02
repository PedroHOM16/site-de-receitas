import PropTypes from 'prop-types';
import React from 'react';

function CardRecipes({ name, image, key }) {
  return (
    <div>
      <img data-testid={ `${key}-card-img` } src={ image } alt="imagem" />
      <h3 data-testid={ `${key}-card-name` }>{name}</h3>
    </div>
  );
}

CardRecipes.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardRecipes;
