import React from 'react';
import { BarChart } from 'react-d3-components';
import { Legend } from 'react-easy-chart';

class GroupedBarChart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        coachLogResults: props.coachLogResults,
        data: [
            {
            label: 'Coach',
            values: [{x: 'Teachers', y: props.coachLogResults.map(d => d.interact_teachers).reduce((accumulator, currentValue) => accumulator + currentValue, 0)},
                     {x: 'Assitant Principals', y: props.coachLogResults.map(d => d.interact_assistant_principals).reduce((accumulator, currentValue) => accumulator + currentValue, 0)},
                     {x: 'Guidance Counselors', y: props.coachLogResults.map(d => d.interact_guidance_counselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)},
                     {x: 'Principals', y: props.coachLogResults.map(d => d.interact_guidance_counselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)},
                     {x: 'College Counselors', y: props.coachLogResults.map(d => d.interact_college_couselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)},
                     {x: 'Others', y: props.coachLogResults.map(d => d.interact_other).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}]
            },
            {
            label: 'Average',
            values: [{x: 'Teachers', y: 6},
                     {x: 'Assitant Principals', y: 8},
                     {x: 'Guidance Counselors', y: 5},
                     {x: 'Principals', y: 40},
                     {x: 'College Counselors', y: 40},
                     {x: 'Others', y: 40}]
            }
        ]
      }

}

render(){
  return(
    <div>
        <BarChart
                groupedBars
                data={this.state.data}
                width={800}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
          <Legend data={this.state.data} dataId={'label'} />
        </div>
            )
  }}

export default GroupedBarChart;
