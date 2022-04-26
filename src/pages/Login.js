import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

const paramEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const six = 6;

function Login() {
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
    setMealsToken(1);
    setCocktailsToken(1);
  };

  const disableButton = () => passwordInput.length > six && paramEmail.test(email);

  useEffect(() => {
    localStorage.setItem('mealsToken', mealsToken);
    localStorage.setItem('cocktailsToken', cocktailsToken);
    localStorage.setItem('user', email);
  }, [mealsToken, cocktailsToken, email]);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  console.log('tokens', mealsToken, cocktailsToken);
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={ email }
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

export default Login;
