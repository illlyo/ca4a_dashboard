import React from 'react';
import * as d3 from 'd3';
import {BarChart, Legend} from 'react-easy-chart';

class BarChartTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      dataDisplay: '',
      data: [
        {
          values: [
            {
              x: 'Academic Skills',
              y: props.coachLogResults.map(d => d.academic_skills).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Academic and Personal Behaviors',
              y: props.coachLogResults.map(d => d.academic_personal_behavior).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Academic Programming',
              y: props.coachLogResults.map(d => d.academic_programming).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'College and Career Access',
              y: props.coachLogResults.map(d => d.college_career_access).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'College and Career Readiness',
              y: props.coachLogResults.map(d => d.college_career_readiness).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }
          ]
        }
      ]
    }; console.log(this.state.data[0].values.map(d => d.x))
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const defaultStyles = {
      '.legend': {
        'list-style': 'none',
        margin: 0,
        padding: 0
      },
      '.legend li': {
        display: 'block',
        lineHeight: '24px',
        marginRight: '24px',
        marginBottom: '6px',
        paddingLeft: '24px',
        position: 'relative'
      },
      '.legend li.horizontal': {
        display: 'inline-block'
      },
      '.legend .icon': {
        width: '12px',
        height: '12px',
        background: 'red',
        borderRadius: '6px',
        position: 'absolute',
        left: '0',
        top: '50%',
        marginTop: '-6px'
      }
    }
    const customStyle = {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '.9em',
        maxWidth: '180px',
        padding: '3px'
      }
    }
    return (<div>
      <BarChart axes="axes"
                grid="grid"
                colorBars="colorBars"
                height={250}
                width={460}
                data={this.state.data[0].values}
                clickHandler={(d) => this.setState({dataDisplay: `${d.x} was engaged ${d.y} times.`})
          }
                />
      <Legend data={this.state.data[0].values} dataId={'x'} styles={customStyle}/>
        <div>
          {
            this.state.dataDisplay
              ? this.state.dataDisplay
              : 'Click on a segment to show the value'
          }
        </div>
    </div>)

  }
}

export default BarChartTwo;
