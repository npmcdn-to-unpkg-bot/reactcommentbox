import React from 'react';
import CommentList from '../enterpage/CommentList.jsx';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

var View = React.createClass({
  render: function() {
    const { visibleTodos } = this.props;
    return (
      <div>
        <CommentList data={visibleTodos}/>
      </div>
    );
  }
});

function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(View);
