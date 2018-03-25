import React, {Component} from 'react';
import {PieChart} from 'react-d3-components';
import {Legend} from 'react-easy-chart';

class ThisPieChart extends Component {
  constructor(props) {
    super(props);
    console.log(props.coachLogResults[0].interact_teachers)
    this.state = {
      coachLogRecentResult: props.coachLogResults,
      data: {
        values: [
          {
            x: 'Facilitated Meeting With Team',
            y: props.coachLogResults[0].interact_meeting_with_team
          }, {
            x: 'Observed Practice',
            y: props.coachLogResults[0].interact_observed_practice
          }, {
            x: 'Checked in With Leadership',
            y: props.coachLogResults[0].interact_with_leadership
          }, {
            x: 'Checked in With Team Lead',
            y: props.coachLogResults[0].interact_with_team_lead
          }, {
            x: 'Facilitated a PD',
            y: props.coachLogResults[0].interact_with_pd
          }, {
            x: 'Other',
            y: props.coachLogResults[0].interact_with_other
          }
        ]
      }
    }

  }

  //sort = null; d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

  render() {
    const customStyle = {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '.9em',
        maxWidth: '200px',
        padding: '3px'
      }
    }
    return (<div>
      <PieChart data={this.state.data} width={460} height={200} margin={{
          top: 10,
          bottom: 10,
          left: 100,
          right: 100
        }} sort={null}/>
      <Legend data={this.state.data.values} dataId={'x'} styles={customStyle}/>
    </div>)
  }
};

export default ThisPieChart;
