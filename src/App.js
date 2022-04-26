import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';

function App() {
  return (
    <RecipesProvider>
      <Login />
    </RecipesProvider>
  );
}

export default App;
