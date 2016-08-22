import Comment from './Comment.jsx';
import React from 'react';

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment date={comment.date} status={comment.status} key={comment.id} project={comment.project}
            section={comment.section} timehr={comment.timehr} timemin={comment.timemin}>
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


export default CommentList;
