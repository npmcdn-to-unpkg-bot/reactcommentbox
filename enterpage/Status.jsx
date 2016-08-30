import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

var Status = React.createClass({
  render: function() {
    const { dispatch, visibleTodos } = this.props;
    return (
      <div>
        <CommentList data={visibleTodos}/>
        <CommentForm onCommentSubmit = {status =>
               dispatch(addTodo(status))}/>
      </div>
    );
  }
});
function select(state) {
   return {
      visibleTodos: state.todos
   }
}

export default connect(select)(Status)
