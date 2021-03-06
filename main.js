import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Starting from './Starting.jsx';
import About from './About.jsx';
import CommentBox from './CommentBox.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

import View from './viewpage/View.jsx';
import Status from './enterpage/Status.jsx';
import Repo from './enterpage/Repo.jsx';

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCEiW0RKkpl3osP2Dc0qOpqm7IRso0-LnM",
    authDomain: "statureport.firebaseapp.com",
    databaseURL: "https://statureport.firebaseio.com",
    storageBucket: "statureport.appspot.com",
  };
  firebase.initializeApp(config);
ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {Starting} >
        <IndexRoute component = {Status} />
        <Route path = "view" component = {View} />
        <Route path = "status" component = {Status} />
        <Route path="/:userName/:repoName" component={Repo}/>
    </Route>
  </Router>

), document.getElementById('app'));
