import React, {Component} from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import {LineChart} from 'react-d3-components';
import { Legend } from 'react-easy-chart';

class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        values: props.coachLogResults.map(res => {
          return {

            x: this.getInputMonth(res.date_of_visit),
            y: res.goals_met

        }
      })
      }
      }
      this.getInputMonth = this.getInputMonth.bind(this);
    }

    getInputMonth(testingthiss) {
      var month;
      var day = new Date(testingthiss).getDate();
      switch (new Date(testingthiss).getMonth()) {
        case 0:
          month = "01/";
          break;
        case 1:
          month = "02/";
          break;
        case 2:
          month = "03/";
          break;
        case 3:
          month = "04/";
          break;
        case 4:
          month = "05/";
          break;
        case 5:
          month = "06/";
          break;
        case 6:
          month = "07/";
          break;
        case 7:
          month = "08/";
          break;
        case 8:
          month = "09/";
          break;
        case 9:
          month = "10/";
          break;
        case 10:
          month = "11/";
          break;
        case 11:
          month = "12/";

      }
      return month + day;
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
        <div>
        <div className="linechart">
          <LineChart
                data={this.state.data}
                width={400}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        </div>
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
    </div>
  </div>)
    }

}

export default Speedometer;
