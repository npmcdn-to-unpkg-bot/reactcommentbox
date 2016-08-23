import Button from 'react-bootstrap/lib/Button';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import React from 'react';
import style from './styles.css';

var Starting = React.createClass({
  render: function() {
    return (
      <div >
            <Link to ="/"><Button>Home</Button></Link>
            <Link to ="/view" activeStyle={{ color: 'red' }}><Button>View</Button></Link>
            <Link to ="/status" activeStyle={{ color: 'red' }}><Button>Status</Button></Link>
            <Link to ="/facebook/react" activeStyle={{ color: 'red' }}><Button>New</Button></Link>
              {this.props.children}
      </div>

    );
  }
});

export default Starting;
