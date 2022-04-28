import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

const paramEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const six = 6;

function Login(props) {
  const {
    email,
    setEmail,
    passwordInput,
    setPasswordInput,
    mealsToken,
    setMealsToken,
    cocktailsToken,
    setCocktailsToken,
  } = useContext(RecipesContext);

  const submitBtn = () => {
    const { history } = props;
    if (mealsToken === 1 && cocktailsToken === 1) history.push('/foods');
  };

  const disableButton = () => passwordInput.length > six && paramEmail.test(email.email);

  useEffect(() => {
    setMealsToken(1);
    setCocktailsToken(1);
    localStorage.setItem('mealsToken', mealsToken);
    localStorage.setItem('cocktailsToken', cocktailsToken);
    localStorage.setItem('user', JSON.stringify(email));
  }, [setMealsToken, setCocktailsToken, mealsToken, cocktailsToken, email]);

  const handleEmail = ({ target: { value } }) => {
    setEmail({ email: value });
  };

  const handlePassword = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          data-testid="email-input"
          onChange={ handleEmail }
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
          value={ passwordInput }
          onChange={ handlePassword }
        />
        <button
          disabled={ !disableButton() }
          type="button"
          data-testid="login-submit-btn"
          onClick={ () => submitBtn() }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
