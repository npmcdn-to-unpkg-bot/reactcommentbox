import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import CommentBox from './CommentBox.jsx';

var Starting = React.createClass({
  render: function() {
    return (
      <div className="starting">
          <ul>
            <li><Link to ="/about"> About </Link></li>
            <li><Link to ="/new"> New</Link></li>
            <li><Link to ="/comment"> Comment</Link></li>
          </ul>
          {this.props.children}
      </div>
    );
  }
});

export default Starting;
