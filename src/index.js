import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

import './index.css';
import * as serviceWorker from './serviceWorker';
import AnxietyExercises from './pages/AnxietyExercises';
import SupportACause from './pages/SupportACause';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={(props) => (<Home {...props} />)} />
      <Route exact path="/exercicios" render={(props) => (<AnxietyExercises {...props} />)} />
      <Route exact path="/apoie-uma-causa" render={(props) => (<SupportACause {...props} />)} />
      <Route path="*" render={(props) => (<PageNotFound {...props} />)} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
