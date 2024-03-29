import React, {Component} from 'react';
import './App.css';
import "./index.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//pages
import MainPage from "./pages/index.jsx";
import NotFoundPage from "./pages/404.jsx";
import AboutPage from './pages/about.jsx';
import ArtistsPage from './pages/music.jsx';
import CasaPage from'./pages/home.jsx';
import Videos from './pages/videos.jsx';
import Menu from './Nav.js';

import { Fragment } from 'react';

function App() {   
    return (
      <Fragment className="App">
        <Router>
            <Menu />
            <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path='/videos' component={Videos} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/music" component={ArtistsPage} />
    <Route exact path="/home" component={CasaPage}/>
      <Redirect to="/404" component={NotFoundPage} />
      </Switch> 
          </Router>
        </Fragment>
      );
  };  


export default App;