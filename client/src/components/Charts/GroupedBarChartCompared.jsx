import React from 'react';
import { BarChart } from 'react-d3-components';
import { Legend } from 'react-easy-chart';

class GroupedBarChartCompared extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        allCoachLogResults: props.allCoachLogResults,
        data: [
            {
            label: 'Coach',
            values: [{x: 'Teachers', y:1 },
                     {x: 'Assitant Principals', y:1 },
                     {x: 'Guidance Counselors', y:1 },
                     {x: 'Principals', y:1 },
                     {x: 'College Counselors', y:1 },
                     {x: 'Others', y:1 }]
            },
            {
            label: 'Average',
            values: [{x: 'Teachers', y: Math.round(props.allCoachLogResults.map(d => d.interact_teachers).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/props.allCoachLogResults.map(d => d.interact_teachers).length)},
                     {x: 'Assitant Principals', y: Math.round(props.allCoachLogResults.map(d => d.interact_assistant_principals).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/props.allCoachLogResults.map(d => d.interact_assistant_principals).length)},
                     {x: 'Guidance Counselors', y: Math.round(props.allCoachLogResults.map(d => d.interact_guidance_counselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/props.allCoachLogResults.map(d => d.interact_guidance_counselors).length)},
                     {x: 'Principals', y: Math.round(props.allCoachLogResults.map(d => d.interact_guidance_counselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/props.allCoachLogResults.map(d => d.interact_guidance_counselors).length)},
                     {x: 'College Counselors', y: Math.round(props.allCoachLogResults.map(d => d.interact_college_couselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/props.allCoachLogResults.map(d => d.interact_college_couselors).length)},
                     {x: 'Others', y: Math.round(props.allCoachLogResults.map(d => d.interact_other).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/props.allCoachLogResults.map(d => d.interact_other).length)}]
            }
        ]
      }
console.log(Math.round(this.state.allCoachLogResults.map(d => d.interact_teachers).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/this.state.allCoachLogResults.map(d => d.interact_teachers).length))
}

render(){
  return(
    <div>
        <BarChart
                groupedBars
                data={this.state.data}
                width={800}
                yTickNumber={5}
                yDomainRange={[0, 5]}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
          <Legend data={this.state.data} dataId={'label'} />
        </div>
            )
  }}

export default GroupedBarChartCompared;
