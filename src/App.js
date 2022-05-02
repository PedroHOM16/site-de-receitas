import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreNationalities from './pages/ExploreNationalities';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods/:id/in-progress" component={ Inprogress } />
        <Route path="/drinks/:id/in-progress" component={ Inprogress } />
        <Route path="/foods/:id" component={ FoodDetails } />
        <Route path="/drinks/:id" component={ DrinkDetails } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/explore/foods/ingredients" component={ Ingredients } />
        <Route path="/explore/drinks/ingredients" component={ Ingredients } />
        <Route path="/explore/foods/nationalities" component={ ExploreNationalities } />
        <Route path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore" component={ Explore } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ Done } />
        <Route path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
