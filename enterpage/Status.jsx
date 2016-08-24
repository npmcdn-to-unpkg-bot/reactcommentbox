import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';
import firebase from '../Firebase.js';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

var Status = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  handleCommentSubmit: function(comment) {
    comment.id = Date.now();
    var comments = [];
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    var newPostKey = firebase.database().ref().child('posts').push(comment, () => {
    browserHistory.push('/view');
  }).key;
  },
  render: function() {
    return (
      <div>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

export default Status;
