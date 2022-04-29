// import PropTypes from 'prop-types';
import React from 'react';
import '../images/drinkIcon.svg';
import '../images/exploreIcon.svg';
import '../images/mealIcon.svg';

function Footer() {
  function submitTeste() {
    // const { history } = props;
    // console.log(history);
    // history.push('/explore/drinks');
    window.location.href = '/drinks';
  }
  function submitTeste2() {
    // const { history } = props;
    // history.push('/explore');
    window.location.href = '/explore';
  }
  function submitTeste3() {
    // const { history } = props;
    // history.push('/explore/foods');
    window.location.href = '/foods';
  }
  return (
    <div>
      <footer data-testid="footer">
        <button
          className="button-img"
          type="button"
          data-testid="drinks-bottom-btn"
          src="drinkIcon.svg"
          onClick={ () => submitTeste() }
        >
          <img
            src="drinkIcon.svg"
            alt="drinks"
          />

        </button>
        <button
          className="button-img"
          type="button"
          data-testid="explore-bottom-btn"
          src="exploreIcon.svg"
          onClick={ () => submitTeste2() }
        >
          <img
            src="exploreIcon.svg"
            alt="explore"
          />

        </button>
        <button
          className="button-img"
          type="button"
          data-testid="food-bottom-btn"
          src="mealIcon.svg"
          onClick={ () => submitTeste3() }
        >
          <img
            src="mealIcon.svg"
            alt="food"
          />

        </button>

      </footer>
    </div>
  );
}

// Footer.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }),
// }.isRequired;

export default Footer;
