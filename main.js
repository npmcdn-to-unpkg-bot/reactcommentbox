import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Starting from './Starting.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

import View from './viewpage/View.jsx';
import Status from './enterpage/Status.jsx';
import Repo from './enterpage/Repo.jsx';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';
let store = createStore(todoApp);


ReactDOM.render(<Provider store = {store} >
  <Router history = {browserHistory}>
    <Route path = "/" component = {Starting} >
        <IndexRoute component = {Status} />
        <Route path = "view" component = {View} />
        <Route path = "status" component = {Status} />
        <Route path="/:userName/:repoName" component={Repo}/>
    </Route>
  </Router>
   </Provider>,
 document.getElementById('app'));
