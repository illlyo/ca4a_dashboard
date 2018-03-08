import React from 'react';
import Scatterplot from './Scatterplot.jsx';
import LineChartBrush from './LineChartBrush.jsx';
import ThisPieChart from './PieChart.jsx';
import GroupedBarChart from './GroupedBarChart.jsx';

class Results extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
      <h1>Coach's(name) Log</h1><br></br>
      <p>School: School Name here<br></br>
         Date: MM/DD/YYY<br></br>
         Length of visit:<br></br>
         Objectives: *Interpolate objectives here* </p>
      <div >
        <h3>Interaction Methods</h3>
          <ThisPieChart />
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
