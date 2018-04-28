import React, {Component} from 'react';
import {PieChart, Legend, ToolTip} from 'react-easy-chart';

class Pie extends Component {
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
    console.log(Math.round(this.state.coachLogResults.map(d => d.interact_teachers).reduce((accumulator, currentValue) => accumulator + currentValue, 0)/this.state.coachLogResults.map(d => d.interact_teachers).length));
  }

  render() {
    const customStyle = {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '.3em',
        maxWidth: '150px'
      }
    }
    return (
      <div>
        <div className="filtered-results-comp">
      <PieChart size={150} data={this.state.data.values}
        clickHandler={(d) => this.setState({dataDisplay: `Total number of ${d.value} ${d.data.key} were engaged.`})
} padding={10} styles={this.styles}/>
      <Legend data={this.state.data.values} dataId={'key'} styles={customStyle}/>
      </div>
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

export default Pie;
