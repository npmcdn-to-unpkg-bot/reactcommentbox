import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Starting from './Starting.jsx';
import About from './About.jsx';
import CommentBox from './CommentBox.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

import View from './viewpage/View.jsx';
import Status from './enterpage/Status.jsx';

ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {Starting}>
        <Route path = "view" component = {View} />
        <Route path = "status" component = {Status} />
     </Route>
  </Router>

), document.getElementById('app'));
