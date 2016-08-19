import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Starting from './Starting.jsx';
import About from './About.jsx';
import New from './New.jsx';
import CommentBox from './CommentBox.jsx';

ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {Starting}>
        <Route path = "about" component = {About} />
        <Route path = "new" component = {New} />
        <Route path = "comment" component = {CommentBox} />
     </Route>
  </Router>

), document.getElementById('app'));
