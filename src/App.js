import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.css'

import {  Route, Link } from 'react-router-dom'


import GamesPage from './page/GamesPage';
import GameForm from './components/form-games/GamesForm'

function App() {
  return (
    <div className="ui container">
        <div className="ui three item menu">
            <Link className="item" active="active" to="/"  >Home</Link>
            <Link className="item" active="active" to="/games"  >Games</Link>
            <Link className="item" active="active" to="/games/new"  >Add New Game</Link>
        </div>


        <Route exact path="/games" component={GamesPage}/>
        <Route path="/games/new" component={GameForm}/>

    </div>
  );
}

export default App;
