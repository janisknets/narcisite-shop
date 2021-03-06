import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import MoviesPage from './pages/moviesPage';
import Navigation from './molecules/navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
