import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

var Status = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleCommentSubmit: function(comment) {
    var comments = [];
    comment.id = Date.now();
    var txt = {"date": comment.date, "project":comment.project, "section" : comment.section, "timehr": comment.timehr, "timemin": comment.timemin, "status": comment.status, "id": comment.id};
    localStorage.setItem(localStorage.length,JSON.stringify(txt));
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
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
