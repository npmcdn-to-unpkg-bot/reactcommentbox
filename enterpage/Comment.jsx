import React from 'react';

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <form className="comment">
        <div className= "row1">
          <div id="lefts">
            {this.props.date}
          </div>
          <div id="centers">
            {this.props.status}
          </div>
          <div id="rights">
            {this.props.project}
            {this.props.section}
            {this.props.timehr}
            {this.props.timemin}
          </div>
        </div>
      </form>
    );
  }
});

export default Comment;
