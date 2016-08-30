import React from 'react';

var Comment = React.createClass({
  render: function() {
    return (
      <form className="comment">
        <div className= "row1">
          <div id="lefts">
            {this.props.payload.date}
          </div>
          <div id="centers">
            {this.props.payload.status}
          </div>
          <div id="rights">
            {this.props.payload.project}
            {this.props.payload.section}
            {this.props.payload.timehr}
            {this.props.payload.timemin}
          </div>
        </div>
      </form>
    );
  }
});

export default Comment;
