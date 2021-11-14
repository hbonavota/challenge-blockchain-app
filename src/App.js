/* import logo from './logo512.png'; */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../src/Components/LandingPage/LandingPage'
import Home from '../src/Components/Home/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/Home' component={Home}></Route>
          <Route path='/*' component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
