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
      <div className="charts">
      <Scatterplot />
      <LineChartBrush />
      <ThisPieChart />
      <GroupedBarChart />
      </div>
    )
  }

}

export default Results
