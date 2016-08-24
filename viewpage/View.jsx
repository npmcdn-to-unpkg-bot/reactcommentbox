import React from 'react';
import CommentList from '../enterpage/CommentList.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { Badge } from 'react-bootstrap';
import firebase from '../Firebase.js';

var View = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount() {
    firebase.database().ref('/posts').once('value')
    .then((snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  },

  render: function() {
    const { data } = this.state;
    if (!data || data.length === 0) {
      return <div>Loading...</div>;
    }
    const items = [];
    for (var id in data) {
      const posts = data[id];
      items.push(


        <div className="samplenew" key={id} >
          <div className="inside">
          <h4 style={{fontWeight: "bold"}}>
          {posts.date}</h4></div>
        <div className="inside">
          <h4>
            {posts.section}
          </h4></div>
          <div className="inside">
          <p><em>{posts.project}</em></p>
          {posts.status}
        </div>
        </div>
      );
    }
    return (
      <div className="samplesecond" style={{borderColor: "black"}}>
          {items}
      </div>
    );
  }
});

export default View;
