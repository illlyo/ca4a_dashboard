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
        coachLogResults: res.coach_logs.filter(res => res.school_visited == this.props.schoolVisited),
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

        <div className="review-intro-card">
          <div className="mod-header-row">
            <span className="coach-name">
              <h1 style={{
                  "marginTop" : 0
                }}>{res.coach_name}s Log</h1>
            </span>
          </div>

          <div style={{
              "padding" : 10
            }}>
            <h3 className="review-header-question" style={{
                "display" : "inline-block"
              }}>School:
            </h3>
            <span className="">
              {res.school_visited}</span>
            <br></br>
            <h4 className="intro-card-headers">Date of visit:
              <span className="review-response" style={{
                  "font-weight" : 300
                }}>{res.date_of_visit}</span>
            </h4>

            <h3 className="review-header-question">What were the objectives of today's visit?</h3>
            <span className="review-response">{res.objectives_of_visit}</span>
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
              <b>What particular tools, protocols, readings, data etc. did you use to help move this team's work forward?</b>
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
