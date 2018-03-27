import React from 'react';
import Auth from '../modules/Auth';

import ThisPieChart from './Charts/PieChart.jsx';
import Bar from './Charts/BarChart.jsx';
import BarChartCohort from './Charts/BarChartCohort.jsx';
import PieChartTwo from './Charts/PieChartTwo.jsx';
import BarChartProg from './Charts/BarChartProg.jsx';
import Speedometer from './Charts/Speedometer.jsx';
import SpeedometerTwo from './Charts/SpeedometerTwo.jsx';
import PieChartThree from './Charts/PieChartThree.jsx';


class FilteredResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: null,
      coachLogRecentResult: null,
      coachLogResultsLoaded: false,
      filterBySchool: null,
      schoolData: null,
      schoolDataLoaded:false,
    }
  }
  componentDidMount(){
    fetch('/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        coachLogResults: res.coach_logs,
        coachLogRecentResult: [res.coach_logs[res.coach_logs.length-1]],
        coachLogResultsLoaded: true,
      })
      console.log(this.state.coachLogResults);
    })
    fetch('/school-profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        schoolData: res.schools,
        schoolDataLoaded:true,
      })
      console.log(this.state.schoolData);
    }).catch(err => console.log(err));
}

  handleOptionBySchool(e){
    console.log(e.target.value)
  }

  filterResults(){
    return(
      <div>
        <p>Search By School:</p>
      <select onChange={this.handleOptionBySchool}>
        {this.state.coachLogResults.map(res => {
          return(
            <option>{res.school_visited}</option>
          )
        })}
      </select>
    </div>
    )
  }

  renderResults(){
    return this.state.coachLogRecentResult.map(res => {
      return(
        <div className="result" key={res.id} >
          <div className="top-div-dash">
            <div>
              <p><b>School:</b>{res.school_visited}<br></br>
                 <b>Cohort:</b> Insert Cohort here<br></br>
                 <b>Date:</b>{res.date_of_visit}<br></br>
                 <b>Length of visit:</b>{res.length_of_visit}<br></br>
              </p>
             </div>
             <div>
               <p><b>Objectives:</b></p><p>{res.objectives_of_visit}</p>
              </div>
             </div>

          <div className="top-div-dash">
            <div className="flex-column">
              <div className="mod-header-row">
                <h2>Interaction methods used:</h2>
              </div>
                <div className="chart-org">
                  <div className="flex-row">
                  <ThisPieChart coachLogResults={this.state.coachLogRecentResult} /><Bar coachLogResults={this.state.coachLogRecentResult} />
                  </div>
                </div><br></br><br></br>
                  <p>{res.next_step_notes}</p>
            </div>
          </div>
           <div className="mod-header-row">
            <h2>School's Engagment in Activities</h2>
          </div>
              <div className="chart-org">
                            <div className="flex-row">
                <PieChartTwo coachLogResults={this.state.coachLogRecentResult} />
                <BarChartProg coachLogResults={this.state.coachLogRecentResult} />
                </div>
              </div>
                  <p><b>Tools Used:</b>{res.forward_work}</p>
            <div className="mod-header-row">
               <h2>Goals, Preparation & Progress:</h2>
            </div>
                   <div className="chart-org">
                    <div className="flex-row">
                    <Speedometer coachLogResults={this.state.coachLogRecentResult} />
                    <SpeedometerTwo coachLogResults={this.state.coachLogRecentResult} />
                    </div>
                  </div>
                <p><b>Progress explained:</b>{res.rate_learning_trajectory_explained}</p>

            <div className="mod-header-row">
              <h2>Thinking Ahead:</h2>
            </div>
            <div className="flex-row">
              <div className="sometext">
                <h3>What successes/challenges are you experiencing in moving this team through their Learning Trajectory?</h3><br></br>
                <p>{res.learning_trajectory_success_challenge}</p>
                <h3>What are the "in-between" steps you can take before your next meeting to move this team's work forward?</h3>
                <p>{res.in_between_steps}</p>
              </div>
                <div className="chart-org">
                    <PieChartThree coachLogResults={this.state.coachLogRecentResult} />
                </div>
              </div>
        <div className="mod-header-row">
           <h3>Highlighting School's Work:</h3>
          </div>
           <p>{res.highlight_planning_explained}</p>
      </div>
    )})
  }

  render(){
    return(
      <div>
        {(this.state.coachLogResultsLoaded) ?
           this.filterResults() : <p>Loading...</p>}
           {(this.state.schoolDataLoaded) ?
              <BarChartCohort schoolData={this.state.schoolData} /> : <p>Loading...</p>}



      </div>
    )
  }

}

export default FilteredResults;
