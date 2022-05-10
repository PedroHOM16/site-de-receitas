import React, { useEffect, useState } from 'react';
import './Ingredient.css';

function Ingredient(obj) {
  const { ingredientsInprogress, ing, index } = obj;
  const { measureArray } = ingredientsInprogress;
  const [isChecked, setIsChecked] = useState(false);
  const [isClassName, setIsClassName] = useState('checkedNotMarked');

  const handleChecked = () => {
    if (isChecked === true) {
      setIsClassName('checkedMarked');
    }
    if (isChecked === false) {
      setIsClassName('checkedNotMarked');
    }
  };

  const handleClickChecked = (checked) => {
    handleChecked();
    setIsChecked(checked);
    console.log(checked);
  };

  useEffect(() => {
    handleChecked();
  }, [isChecked]);

  return (
    <li data-testid={ `${index}-ingredient-step` } className={ isClassName }>
      {measureArray[index] ? `${ing}: ${measureArray[index]}` : ing}
      <input
        type="checkbox"
        id={ index }
        checked={ isChecked }
        onChange={ ({ target: { checked } }) => handleClickChecked(checked) }
      />
    </li>
  );
}

export default Ingredient;
