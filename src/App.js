import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import ClockPage from './pages/clockPage';
import Navigation from './molecules/navigation';


function App() {
  return (
    <div className='App'>
      <Router >
        <Navigation />
        <Switch>
          <Route path="/products" >
            <ProductsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/clock">
            <ClockPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
