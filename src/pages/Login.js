import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

const paramEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const six = 6;

function Login() {
  const {
    emailInput,
    setEmailInput,
    passwordInput,
    setPasswordInput,
  } = useContext(RecipesContext);

  const handleEmail = ({ target: { value } }) => {
    setEmailInput(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  const disableButton = () => passwordInput.length > six
    && paramEmail.test(emailInput);

  console.log(disableButton());
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={ emailInput }
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
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
