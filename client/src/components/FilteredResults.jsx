import React from 'react';
import Auth from '../modules/Auth';

import Pie from './TotalCharts/PieChart.jsx';
import Bar from './TotalCharts/BarChart.jsx';
import PieChartGoals from './TotalCharts/PieChartGoals.jsx';
import BarChartTwo from './TotalCharts/BarChartTwo.jsx';
import GroupedBarChart from './Charts/GroupedBarChart.jsx';


import ThisPieChart from './Charts/PieChart.jsx';
import BarChartCohort from './Charts/BarChartCohort.jsx';
import BarChartProg from './Charts/BarChartProg.jsx';
import Speedometer from './Charts/Speedometer.jsx';
import SpeedometerTwo from './Charts/SpeedometerTwo.jsx';

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
    fetch('/coachlogs', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        coachLogResults: res.coachlogs,
        coachLogRecentResult: [res.coachlogs[res.coachlogs.length-1]],
        coachLogResultsLoaded: true,
      })
      console.log(this.state.coachLogResults.map(d => d.interact_meeting_with_team).reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
));
    })
      fetch('/schools', {
        method: 'GET',
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

  render(){
    return(
      <div>
        {(this.state.coachLogResultsLoaded) ?
             <div className="filterResults-chart-org">
               <h1>Total Results</h1>
                 <div className="search-div">
                 <p>Search By Coach:</p>
                 <select>{this.state.coachLogResults.map(res => {
                   return(
                     <option>{res.coach_name}</option>
                   )
                 })}
                   </select>
                   <p>Search By School:</p>
                   <select>
                   {this.state.coachLogResults.map(res => {
                     return(
                       <option>{res.school_visited}</option>
                     )
                   })}
                     </select>
                   </div>
                 <div className="filterResults-chart-org-div">
                   <div className="filterResults-chart-org-div-each">
                     <h2>Cohorts</h2>
                  <BarChartCohort schoolData={this.state.schoolData} />
                  </div>
                  <div className="filterResults-chart-org-div-each">
                    <h3>Total number of staff engaged</h3>
                    <Pie coachLogResults={this.state.coachLogResults} />
                  </div>
                </div>
                <div className="filterResults-chart-org-div">
                  <div className="filterResults-chart-org-div-each">
                  <h3>College and Career domains</h3>
                    <BarChartTwo coachLogResults={this.state.coachLogResults} />
                  </div>
                    <div className="filterResults-chart-org-div-each">
                  <h3>Schools were engaged in the following activities:</h3>
                    <Bar coachLogResults={this.state.coachLogResults} />
                    </div>
                </div>
                <PieChartGoals coachLogResults={this.state.coachLogResults} />
                  <GroupedBarChart coachLogResults={this.state.coachLogResults} />

              </div> : <p>Loading...</p>}



      </div>
    )
  }

}

export default FilteredResults;
