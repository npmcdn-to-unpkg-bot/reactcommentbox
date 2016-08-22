import React from 'react';
import style from '../stylesheet/style.css';
import SweetAlert from 'sweetalert-react';
import CommentList from './CommentList.jsx';

var CommentForm = React.createClass({
  getInitialState: function() {
    return {date: '', project: '', section: '', timehr: '', timemin: '',status: ''};
  },
  handleDateChange: function(e) {
    this.setState({date: e.target.value});
  },
  handleProjectChange: function(e) {
    this.setState({project: e.target.value});
  },
  handleSectionChange: function(e) {
    this.setState({section: e.target.value});
  },
  handleTimehrChange: function(e) {
    this.setState({timehr: e.target.value});
  },
  handleTimeminChange: function(e) {
    this.setState({timemin: e.target.value});
  },
  handleStatusChange: function(e) {
    if (e.target.value.length > 200) { return false; }
    this.setState({status: e.target.value});
    document.getElementById("print").innerHTML = 180-e.target.value.length;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var date = this.state.date.trim();
    var project = this.state.project.trim();
    var section = this.state.section.trim();
    var timehr = this.state.timehr.trim();
    var timemin = this.state.timemin.trim();
    var status = this.state.status.trim();
    if (!status) {
       return;
    }
    this.props.onCommentSubmit({date: date, project: project, section: section, timehr: timehr, timemin: timemin, status: status});
    this.setState({date: '', project: '', section: '',timehr: '', timemin: '',status: ''});
    document.getElementById("date").value = "";
    document.getElementById("project").value = "";
    document.getElementById("section").value = "";
    document.getElementById("timehr").value = "";
    document.getElementById("timemin").value = "";
    document.getElementById("statusbox").value = "";
    swal({   title: "Successfully posted your status", timer: 2000,   showConfirmButton: false, type: "success" });
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} >
        <div className= "header1">
            Daily Status
        </div>
      <fieldset >
        <div id="labelname">
          <h3>Bursts</h3>
        </div>
        <div className="row1">
          <div id = "datesp"><label>Date </label><br/>
            <input type="date" id="date" value={this.state.date} onChange={this.handleDateChange} />
          </div>
          <div id = "projectvalue"><label>Project </label><br/>
            <select id="project" value={this.state.project} onChange={this.handleProjectChange}>
              <option value="">N/A</option>
            </select>
          </div>
          <div id="sectionsp"><label>Activity Type </label><br/>
            <select id="section" value={this.state.section} onChange={this.handleSectionChange}>
              <option value="">Select</option>
              <option value="Project management">Project management</option>
              <option value="Training">Training</option>
              <option value="Architecting">Architecting</option>
              <option value="Requirements analysis">Requirements analysis</option>
              <option value="System design">System design</option>
              <option value="Coding">Coding</option>
              <option value="Graphic design">Graphic design</option>
              <option value="Testing">Testing</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Pre-sales">Pre-sales</option>
              <option value="Tech Support">Tech Support</option>
              <option value="UX design">UX design</option>
              <option value="Marketing">Marketing</option>
              <option value="Business analysis">Business analysis</option>
              <option value="Recruitment & HR">Recruitment & HR</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div id="timesp"><label>Time Spent(hours:minutes) </label><br/>
            <select id="timehr" value={this.state.timehr} onChange={this.handleTimehrChange} >
              <option value="0">00</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
            <select id="timemin" value={this.state.timemin} onChange={this.handleTimeminChange}>
              <option value='0'>00</option>
              <option value='15'>15</option>
              <option value='30'>30</option>
              <option value='45'>45</option>
            </select>
          </div>
        </div>
        <div id="statusdiv"><label>Activity Description</label><br/>
          <textarea placeholder="Enter the tasks done..." id="statusbox" value={this.state.status} onChange={this.handleStatusChange} /><br />
        </div>
        <div id="print">
          180
        </div>
        <div id="but">
          <input type="submit" value="Save" id="buttontype" />
        </div>
      </fieldset>
      </form>
    );
  }
});

export default CommentForm;
