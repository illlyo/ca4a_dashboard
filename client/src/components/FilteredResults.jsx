import React from 'react';
import Auth from '../modules/Auth';

import Pie from './TotalCharts/PieChart.jsx';
import Bar from './TotalCharts/BarChart.jsx';

import ThisPieChart from './Charts/PieChart.jsx';

import BarChartCohort from './Charts/BarChartCohort.jsx';
import PieChartTwo from './Charts/PieChartTwo.jsx';
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
             <div>
              <BarChartCohort schoolData={this.state.schoolData} />
                <h3>Total number of staff engaged</h3>
                <Pie coachLogResults={this.state.coachLogResults} />
                <p>college and career domains?</p>
                <p>Schools were engaged in the following activities</p>
                  <Bar coachLogResults={this.state.coachLogResults} />
                <p>goals met, pie chart</p>

              </div> : <p>Loading...</p>}



      </div>
    )
  }

}

export default FilteredResults;
