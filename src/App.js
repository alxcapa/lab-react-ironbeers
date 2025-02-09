import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './components/homePage'
import Allbeers from './components/allBeers'
import Beerdetails from './components/beerDetails'
import Randombeer from './components/randomBeer'
import Newbeer from './components/newBeer'


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router className="App">

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/beers' component={Allbeers} />
        <Route exact path='/beers/:id' component={Beerdetails} />
        <Route exact path='/random-beer' component={Randombeer} />
        <Route exact path='/new-beer' component={Newbeer} />
      </Switch>

    </Router>
  );
}

export default App;
