import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

function Profile() {
  const { setEmail, setPasswordInput } = useContext(RecipesContext);
  const history = useHistory();

  const DoneRecipes = 'Done Recipes';
  const FavoriteRecipes = 'Favorite Recipes';
  const Logout = 'Logout';

  const emailUser = JSON.parse(localStorage.getItem('user'));

  const handleClick = (value) => {
    if (value === DoneRecipes) history.push('/done-recipes');
    if (value === FavoriteRecipes) history.push('/favorite-recipes');
    if (value === Logout) {
      setEmail('');
      setPasswordInput('');
      localStorage.clear();
      history.push('/');
    }
  };

  return (
    <div>
      <Header title="Profile" />
      <div>
        <span data-testid="profile-email">{emailUser?.email}</span>
        <div>
          <button
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => handleClick(DoneRecipes) }
          >
            Done Recipes

          </button>
          <button
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => handleClick(FavoriteRecipes) }
          >
            Favorite Recipes

          </button>
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => handleClick(Logout) }
          >
            Logout

          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
