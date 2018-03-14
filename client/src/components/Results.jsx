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
import Auth from '../modules/Auth';

class Results extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: null,
      coachLogResultsLoaded: false,
    }
  }

  componentDidMount(){
    fetch('/profile', {
      method: 'GET',
      headers: {
        token: '7LNYyFfCQfw2Vdg8eTeYTFj9' ,
        'Authorization': `Token 7LNYyFfCQfw2Vdg8eTeYTFj9`,
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        coachLogResults: res.coach_logs,
        coachLogResultsLoaded: true,
      })
      console.log(res.coach_logs);
    }).catch(err => console.log(err));
  }

  renderResults(){
    return this.state.coachLogResults.map(res => {
      return(
        <div className="result" key={res.id} >
          <h1>{res.coach_name}'s Log</h1>
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
            <h3>Interaction methods used:</h3>
              <div className="chart-org">
                <ThisPieChart /><Bar />
              </div>
              <h2>Notes and Next Steps:</h2>
              <p>{res.next_step_notes}</p>

            <h3>School Team Engagement in Learning Trajectory:</h3>
              <div className="chart-org">
                <LineBarChart />
              </div>
            <p>Learning Trajectory <b>was/was not</b> discussed in the meeting</p>
            <h2>School's Engagment in Activities</h2>
              <div className="chart-org">
                <h3>Have Not Yet Reached || In the process of completing || Completed</h3>
                <SideBarChart />
              </div>
            <p><b>Tools Used:</b>{res.forward_work}</p>

           <h3>Goals, Preparation & Progress:</h3>
           <div className="chart-org">
            <ArcPie />
            <PieInteractive />
          </div>
            <p><b>Progress explained:</b>{res.rate_learning_trajectory_explained}</p>


           <h3>Thinking Ahead:</h3>
            <p>{res.learning_trajectory_success_challenge}</p>
            <p>{res.in_between_steps}</p>
            <div className="chart-org">
              <SimplePieGraph />
            </div>


           <h3>Highlighting School's Work:</h3>
            _____________________________________________End Here*
        </div>
      )
    })
  }

  render(){
    return(
      <div>
         {(this.state.coachLogResultsLoaded) ?
            this.renderResults() : <p>Loading...</p>}
      <div >
        <h3>Interaction Methods</h3>
        <h3>Roles</h3>
          <Scatterplot />
        <p>Notes: *Interpolate notes here*</p>
          <LineChartBrush />
          <GroupedBarChart />
      </div>

    <h2>School Team Engagment in Learning Trajectory</h2>
    <p>Insert more quantitative charts here</p>

      <h2>Goals Preparation</h2>
      <p>Insert more quantitative charts here</p>
      </div>
    )
  }

}

export default Results
