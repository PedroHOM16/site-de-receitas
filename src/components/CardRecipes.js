import PropTypes from 'prop-types';
import React from 'react';

function CardRecipes({ name, image }) {
  return (
    <div>
      <img src={ image } alt="imagem" />
      <h3>{name}</h3>
    </div>
  );
}

CardRecipes.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardRecipes;
