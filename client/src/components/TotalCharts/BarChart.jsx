import React from 'react';
import * as d3 from 'd3';
import {BarChart, Legend} from 'react-easy-chart';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      dataDisplay: '',
      data: [
        {
          values: [
            {
              x: 'Inquiry Institute',
              y: props.coachLogResults.map(d => d.inquiry_institute).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Research',
              y: props.coachLogResults.map(d => d.research).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Design',
              y: props.coachLogResults.map(d => d.design).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'PDSA',
              y: props.coachLogResults.map(d => d.pdsa).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Synthesis',
              y: props.coachLogResults.map(d => d.synthesize).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Scale',
              y: props.coachLogResults.map(d => d.scale).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
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

export default Bar;