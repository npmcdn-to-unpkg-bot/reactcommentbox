import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';


var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentWillMount() {
    var count =localStorage.length;
    var i;
    var datanew = [];
    for(i=0;i<count;i++) {
      var accdet = localStorage.getItem(i);
      var account = JSON.parse(accdet);
      var txt = {id: account.id, author: account.author, text: account.text};
      datanew.push(txt);
    }
    this.setState({data: datanew});
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var txt = {"author": comment.author, "text" : comment.text, "id": comment.id};
    localStorage.setItem(localStorage.length,JSON.stringify(txt));
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  },
  render: function() {
    return (
      <div className="commentBox">
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

export default CommentBox;
