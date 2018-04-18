import React from 'react';
import Auth from '../modules/Auth';
import Bar from './Charts/Timescale/BarChart.jsx';
import ThisPieChart from './Charts/Timescale/PieChart.jsx';
import GroupedEngagementBar from './Charts/Timescale/GroupedEngagementBar.jsx';
import BarChartThinkingAhead from './Charts/Timescale/BarChartThinkingAhead.jsx';
import BarChartProg from './Charts/Timescale/BarChartProg.jsx';
import LineChartProg from './Charts/Timescale/LineChartProg.jsx';
import Speedometer from './Charts/Speedometer.jsx';
import SpeedometerTwo from './Charts/SpeedometerTwo.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: null,
      coachLogRecentResult: null,
      coachLogResultsLoaded: false,
      allCoachLogResults: null,
      allCoachLogRecentResult: null,
      allCoachLogResultsLoaded: false,
      schoolData: null,
      schoolDataLoaded: false
    }
  }

  componentDidMount() {
    fetch('/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => res.json()).then(res => {
      this.setState({
        coachLogResults: res.coach_logs,
        coachLogRecentResult: [res.coach_logs[res.coach_logs.length - 1]],
        coachLogResultsLoaded: true
      })
      console.log(res.coach_logs.filter(res => res.school_visited == this.props.schoolVisited));
    })
    fetch('/coachlogs', {method: 'GET'}).then(res => res.json()).then(res => {
      this.setState({
        allCoachLogResults: res.coachlogs,
        allCoachLogRecentResult: [res.coachlogs[res.coachlogs.length - 1]],
        allCoachLogResultsLoaded: true
      })
      console.log(this.state.coachLogResults);
    })
    fetch('/schools', {method: 'GET'}).then(res => res.json()).then(res => {
      this.setState({
        schoolData: res.schools,
        schoolDataFiltered: res.schools.filter(res => res.id == this.state.allCoachLogRecentResults.school_id),
        schoolDataLoaded: true
      })
      console.log(this.state.schoolDataFiltered);
    }).catch(err => console.log(err));
  }

  renderResults() {
    return this.state.coachLogRecentResult.map(res => {
      return (<div className="result" key={res.id}>
        <span className="coach-name">
          <h1>{res.coach_name}s Log</h1>
        </span>

        <div className="top-div-dash">
          <div className="school-visit-info">
            <p className="p-tag">
              <b>School: </b> {res.school_visited}<br></br>
              <b>Cohort: </b>
              Insert Cohort here<br></br>
              <b>Date: </b>{res.date_of_visit}<br></br>
              <b>Length of visit: </b>{res.length_of_visit}<br></br>
            </p>
          </div>
          <div className="school-visit-info">
            <p>
              <b>Objectives:</b>
            </p>
            <p>{res.objectives_of_visit}</p>
          </div>
        </div>

        <div className="mod-header-row">
          <h2>Interaction methods used:</h2>
        </div>
        <div className="chart-org">
          <div className="flex-row">
            <ThisPieChart coachLogResults={this.state.coachLogResults}/>
            <Bar coachLogResults={this.state.coachLogResults}/>
          </div>
          <br></br>
          <br></br>
          <p className="next-step-notes">{res.next_step_notes}</p>
        </div>

        <div className="mod-header-row">
          <h2>School's Engagment in Activities</h2>
        </div>
        <div className="chart-org">
          <div className="flex-row">
            <GroupedEngagementBar coachLogResults={this.state.coachLogResults}/>
            <BarChartProg coachLogResults={this.state.coachLogRecentResult}/>
              <p className="p-tag">
                <b>Tools Used:</b>
                <br></br>{res.forward_work}</p>
          </div>
       </div>
        <div className="mod-header-row">
          <h2>Goals, Preparation & Progress:</h2>
        </div>
        <div className="chart-org">
          <div className="flex-row">
            <Speedometer coachLogResults={this.state.coachLogResults}/>
            <SpeedometerTwo coachLogResults={this.state.coachLogResults}/>
            <div className="flex-row">
              <div className="p-tag-div">
                <p className="p-tag">
                  <b>Progress explained:</b>
                  <br></br>{res.rate_learning_trajectory_explained}</p>
              </div>
              <LineChartProg coachLogResults={this.state.coachLogResults}/>
            </div>
          </div>
        </div>

        <div className="mod-header-row">
          <h2>Thinking Ahead:</h2>
        </div>
        <div className="flex-row">
          <div className="chart-org">
          <div className="sometext">
            <h3>What successes/challenges are you experiencing in moving this team through their Learning Trajectory?</h3>
            <br></br>
            <p>{res.learning_trajectory_success_challenge}</p>
            <h3>What are the "in-between" steps you can take before your next meeting to move this team's work forward?</h3>
            <p>{res.in_between_steps}</p>
          </div>
            <BarChartThinkingAhead coachLogResults={this.state.coachLogResults}/>
          </div>
        </div>
        <div className="mod-header-row">
          <h3>Highlighting School's Work:</h3>
        </div>
        <p>{res.highlight_planning_explained}</p>
      </div>)
    })
  }

  render() {
    return (<div className="results-page">
      {
        (this.state.coachLogResultsLoaded)
          ? this.renderResults()
          : <p>Loading...</p>
      }
    </div>)
  }

}

export default Results
