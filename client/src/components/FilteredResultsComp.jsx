import React from 'react';

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


class FilteredResultsComp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render(){
    return(
      <div>
       <div className="filterResults-chart-org-div">
         <div className="filterResults-chart-org-div-each">
           <h2>Cohorts</h2>
        <BarChartCohort schoolData={this.props.schoolData} />
        </div>
        <div className="filterResults-chart-org-div-each">
          <h3>Total number of staff engaged</h3>
          <Pie coachLogResults={this.props.coachLogResultsFiltered} />
        </div>
      </div>
      <div className="filterResults-chart-org-div">
        <div className="filterResults-chart-org-div-each">
        <h3>College and Career domains</h3>
          <BarChartTwo coachLogResults={this.props.coachLogResultsFiltered} />
        </div>
          <div className="filterResults-chart-org-div-each">
        <h3>Schools were engaged in the following activities:</h3>
          <Bar coachLogResults={this.props.coachLogResultsFiltered} />
          </div>
      </div>
      <PieChartGoals coachLogResults={this.props.coachLogResultsFiltered} />
        <GroupedBarChart coachLogResults={this.props.coachLogResultsFiltered} />
        </div>
    )
  }
}

export default FilteredResultsComp;
