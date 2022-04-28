import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import Explore from './pages/explore';
import Drinks from './pages/drinks';
import Inprogress from './pages/Inprogress';
import Ingredients from './pages/Ingredients';
import Profile from './pages/Profile';
import Done from './pages/Done';
import Favorites from './pages/Favorites';
import Foods from './pages/Foods';


function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
        <Route exact path="/explore" component={ Explore } />
        <Route path="/explore/foods" component={ Explore } />
        <Route path="/explore/drinks" component={ Explore } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/in-progress" component={ Inprogress } />
        <Route path="/explore/foods/ingredients" component={ Ingredients } />
        <Route path="/explore/drinks/ingredients" component={ Ingredients } />
        <Route path="/explore/foods/nationalities" component={ Ingredients } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ Done } />
        <Route path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
