import React from 'react';
import Scatterplot from './Charts/Scatterplot.jsx';
import Bar from './Charts/BarChart.jsx';
import LineChartBrush from './Charts/LineChartBrush.jsx';
import ThisPieChart from './Charts/PieChart.jsx';
import GroupedBarChart from './Charts/GroupedBarChart.jsx';
import LineBarChart from './Charts/LineBarChart.jsx';
import ArcPie from './Charts/ArcPie.jsx';
import SideBarChart from './Charts/SideBarChart.jsx';
import PieInteractive from './Charts/PieInteractive.jsx';
import SimplePieGraph from './Charts/SimplePieGraph.jsx';
import PieChartTwo from './Charts/PieChartTwo.jsx';
import PieChartThree from './Charts/PieChartThree.jsx';
import BarChartProg from './Charts/BarChartProg.jsx';
import Speedometer from './Charts/Speedometer.jsx';
import SpeedometerTwo from './Charts/SpeedometerTwo.jsx';
import InterMethStackedBar from './TotalCharts/InterMethStackedBar.jsx';

import GroupedBarChartCompared from './Charts/GroupedBarChartCompared.jsx';

import Auth from '../modules/Auth';

class Results extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: null,
      coachLogRecentResult: null,
      coachLogResultsLoaded: false,
      allCoachLogResults: null,
      allCoachLogRecentResult: null,
      allCoachLogResultsLoaded: false,
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
      console.log();
    })
      fetch('/coachlogs', {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          allCoachLogResults: res.coachlogs,
          allCoachLogRecentResult: [res.coachlogs[res.coachlogs.length-1]],
          allCoachLogResultsLoaded: true,
        })
        console.log('during fetch');
      })
    .catch(err => console.log(err));
  }


  renderResults(){
    return this.state.coachLogRecentResult.map(res => {
      return(
        <div className="result" key={res.id} >
          <span className="coach-name"><h1>{res.coach_name}s Log</h1></span>
          <div className="top-div-dash">
            <div className="school-visit-info">
              <p className="p-tag"><b>School:<br></br></b>{res.school_visited}<br></br>
                 <b>Cohort:</b> Insert Cohort here<br></br>
                 <b>Date:</b>{res.date_of_visit}<br></br>
                 <b>Length of visit:</b>{res.length_of_visit}<br></br>
              </p>
             </div>
             <div className="school-visit-info">
               <p><b>Objectives:</b></p><p>{res.objectives_of_visit}</p>
              </div>
             </div>


              <div className="mod-header-row">
                <h2>Interaction methods used:</h2>
              </div>
                <div className="chart-org">
                  <div className="flex-row">
                  <ThisPieChart coachLogResults={this.state.coachLogRecentResult} /><Bar coachLogResults={this.state.coachLogRecentResult} />
                  </div>
                </div><br></br><br></br>
                  <p>{res.next_step_notes}</p>

           <div className="mod-header-row">
            <h2>School's Engagment in Activities</h2>
          </div>
              <div className="chart-org">
                            <div className="flex-row">
                <PieChartTwo coachLogResults={this.state.coachLogRecentResult} />
                <BarChartProg coachLogResults={this.state.coachLogRecentResult} />
                </div>
              </div>
                  <p className="p-tag"><b>Tools Used:</b><br></br>{res.forward_work}</p>
            <div className="mod-header-row">
               <h2>Goals, Preparation & Progress:</h2>
            </div>
                   <div className="chart-org">
                    <div className="flex-row">
                    <Speedometer coachLogResults={this.state.coachLogRecentResult} />
                    <SpeedometerTwo coachLogResults={this.state.coachLogRecentResult} />
                    </div>
                    </div>
                <p className="p-tag" ><b>Progress explained:</b><br></br>{res.rate_learning_trajectory_explained}</p>

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
             {(this.state.allCoachLogResultsLoaded) && (this.state.coachLogResultsLoaded) ?
               <div>
                <GroupedBarChartCompared allCoachLogResults={this.state.allCoachLogResults}/>
                  <InterMethStackedBar coachLogResults={this.state.coachLogResults} />
               </div>
               : <p>Loading...</p>}


      </div>
    )})
  }

  render(){
    return(
      <div>
         {(this.state.coachLogResultsLoaded) ?
            this.renderResults() : <p>Loading...</p>}
      </div>
    )
  }

}

export default Results
