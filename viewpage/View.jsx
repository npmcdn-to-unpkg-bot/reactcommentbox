import React from 'react';
import CommentList from '../enterpage/CommentList.jsx';


var View = React.createClass({
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
      var txt = {"date": account.date, "project":account.project, "section" : account.section, "timehr": account.timehr, "timemin": account.timemin, "status": account.status, "id": account.id};
      datanew.push(txt);
    }
    this.setState({data: datanew});
  },
  render: function() {
    return (
      <div>
        <CommentList data={this.state.data} />
      </div>
    );
  }
});

export default View;
