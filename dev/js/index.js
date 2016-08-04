import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Router, Route , browserHistory} from 'react-router';

import {requestWeather} from './actions';

import Layout from './components/Layout';
import Home from './components/Home';
import Social from './components/Social';

import configureStore from './store';

const Store = configureStore();

ReactDOM.render( 
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/social' component={Social} />
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root'));
