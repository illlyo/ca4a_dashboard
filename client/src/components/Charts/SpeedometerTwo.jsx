import React, {Component} from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { Legend } from 'react-easy-chart';

class SpeedometerTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        values: [
          {x: 'Substantial', y: 5},
                   {x: 'Some', y: 4},
                   {x: 'A Little', y: 3},
                   {x: 'No Progress', y: 2},
                 {x: 'N/A', y: 1}
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
          value={4}
          minValue={0}
          maxValue={5}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          currentValueText="School's Overall Progress"
        />
      <Legend data={this.state.data.values} dataId={'x'} styles={customStyle} config={config}  />
    </div>)
    }

}

export default SpeedometerTwo;
