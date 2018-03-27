import React, {Component} from 'react';
import {PieChart, Legend, ToolTip} from 'react-easy-chart';

class PieChartGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      dataDisplay: '',
      data: {
        values: [
          {
            key: 'Teachers',
            value: props.coachLogResults.map(d => d.interact_teachers).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          }, {
            key: 'Assitant Principals',
            value: props.coachLogResults.map(d => d.interact_assistant_principals).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          }, {
            key: 'Guidance Counselors',
            value: props.coachLogResults.map(d => d.interact_guidance_counselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          }, {
            key: 'Principals',
            value: props.coachLogResults.map(d => d.interact_guidance_counselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          }, {
            key: 'College Counselors',
            value: props.coachLogResults.map(d => d.interact_college_couselors).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          }, {
            key: 'Others',
            value: props.coachLogResults.map(d => d.interact_other).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          }
        ]
      }
    }
    console.log(this.state.data);
  }

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
      <PieChart size={250} data={this.state.data.values}
        clickHandler={(d) => this.setState({dataDisplay: `Total number of ${d.value} ${d.data.key} were engaged.`})
          } padding={10} styles={this.styles}/>
      <Legend data={this.state.data.values} dataId={'key'} styles={customStyle}/>
      <div>
        {
          this.state.dataDisplay
            ? this.state.dataDisplay
            : 'Click on a segment to show the value'
        }
      </div>
    </div>)
  }
};

export default PieChartGoals;
