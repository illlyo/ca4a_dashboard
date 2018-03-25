import React, {Component} from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { Legend } from 'react-easy-chart';

class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        values: [
          {x: 'Exceeded', y: props.coachLogResults[0].inquiry_institute},
                   {x: 'Sufficiently Met', y: props.coachLogResults[0].research},
                   {x: 'Somewhat Met', y: props.coachLogResults[0].design},
                   {x: 'Not Met At All', y: props.coachLogResults[0].pdsa},
                 {x: 'Not Defined', y: props.coachLogResults[0].synthesize}
        ]
      }
      }
    }
    render() {
      const config = [
{color: '#6ad72d'},
{color: '#aee228'},
{color: '#ecdb23'},
{color: '#f6961e'},
{color: '#ff471a'} ]
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
      return (
        <div className="speedometer">
        <ReactSpeedometer
          value={2}
          minValue={0}
          maxValue={5}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          currentValueText="Expectations of Goals"
        />
      <Legend data={this.state.data.values} dataId={'x'} styles={customStyle} config={config}  />
    </div>)
    }

}

export default Speedometer;
