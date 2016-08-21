import React from 'react';
import CommentForm from './CommentForm.jsx';


var Status = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var txt = {"date": comment.date, "section" : comment.section, "timehr": comment.timehr, "timemin": comment.timemin, "status": comment.status, "id": comment.id};
    localStorage.setItem(localStorage.length,JSON.stringify(txt));
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  },
  render: function() {
    return (
      <div>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

export default Status;
