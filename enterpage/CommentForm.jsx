import React from 'react';
import style from '../stylesheet/style.css';
import SweetAlert from 'sweetalert-react';

var imgurl = "../images/bkg2.jpg";
var divStyle = {
  backgroundImage: 'url('+imgurl+')',
}
var CommentForm = React.createClass({
  getInitialState: function() {
    return {date: '', section: '',timehr: '', timemin: '',status: ''};
  },
  handleDateChange: function(e) {
    this.setState({date: e.target.value});
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
    document.getElementById("print").innerHTML = "Only "+(200-e.target.value.length)+" characters Remaining";
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var date = this.state.date.trim();
    var section = this.state.section.trim();
    var timehr = this.state.timehr.trim();
    var timemin = this.state.timemin.trim();
    var status = this.state.status.trim();
    if (!status) {
       return;
    }

    this.props.onCommentSubmit({date: date, section: section, timehr: timehr, timemin: timemin, status: status});
    this.setState({date: '', section: '',timehr: '', timemin: '',status: ''});
    document.getElementById("date").value = "";
    document.getElementById("section").value = "";
    document.getElementById("timehr").value = "";
    document.getElementById("timemin").value = "";
    document.getElementById("statusbox").value = "";
    swal({   title: "Successfully posted your status", timer: 2000,   showConfirmButton: false, type: "success" });
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} >
      <fieldset style={divStyle}>
        <span id = "datesp"><label>Date: </label>
          <input type="date" placeholder="Date" id="date" value={this.state.date} onChange={this.handleDateChange} />
        </span>
        <span id="sectionsp"><label>Section: </label>
          <select id="section" value={this.state.section} onChange={this.handleSectionChange}>
            <option value="training">Training</option>
            <option value="project">Project</option>
            <option value="business">Business</option>
          </select>
        </span>
        <span id="timesp"><label>Time: </label>
          <select id="timehr" value={this.state.timehr} onChange={this.handleTimehrChange} >
            <option value="">Hr</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
          <select id="timemin" value={this.state.timemin} onChange={this.handleTimeminChange}>
            <option value="">Min</option>
            <option value="0">0</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </span>
        <div id="statusdiv"><label>Status: </label><br/>
          <textarea placeholder="Enter the tasks Done..." id="statusbox" value={this.state.status} onChange={this.handleStatusChange} /><br />
        </div>
        <div id="print">
          Only 200 characters Remaining
        </div>
        <input type="submit" value="Post" id="buttontype" />
      </fieldset>
      </form>
    );
  }
});

export default CommentForm;
