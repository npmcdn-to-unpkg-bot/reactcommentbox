import Button from 'react-bootstrap/lib/Button';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import React from 'react';
import style from './styles.css';

var Starting = React.createClass({
  render: function() {
    return (
      <div >
            <Link to ="/view"><Button>View</Button></Link>
            <Link to ="/status"><Button>Status</Button></Link>
              {this.props.children}
      </div>

    );
  }
});

export default Starting;
