import Comment from './Comment.jsx';
import React from 'react';

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment key={comment.id} {...comment} />
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
