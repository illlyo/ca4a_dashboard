import React from 'react';
import { WIDTH, VB_WIDTH, COLORS } from './const.js';
import * as d3 from 'd3';
import { BarChart, Legend} from 'react-easy-chart';

class BarChartCohort extends React.Component {
    constructor(props) {
        super(props);
         console.log(props.schoolData)
        this.state = {
          schoolData: props.schoolData,
          showToolTip: false,
          top: null,
          left: null,
          y: null,
          x: null,
          dataDisplay: null,
          data: [{
            values: [{x: 'Cohort 1', y: 5},
                     {x: 'Cohort 2', y: 3}]
        }]
      }
      this.mouseOverHandler = this.mouseOverHandler.bind(this);
      this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
      this.mouseOutHandler = this.mouseOutHandler.bind(this);
    }

    componentDidMount(){
    }


    componentWillUnmount() {}

    mouseOverHandler(d, e) {
      this.setState({
        showToolTip: true,
        top: `${e.screenY - 2}px`,
        left: '20px',
        y: d.y,
        x: d.x});
        console.log(this.state.left)
  }

  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: `${e.screenY - 2}px`, left: '20px'});
    }
  }

  mouseOutHandler() {
    this.setState({showToolTip: false});
  }


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
  return (
    <div>
      <BarChart
        yType={'text'}
        xType={'text'}
          axes
          grid
          colorBars
          height={250}
          width={460}
          data={this.state.data[0].values}
          yTickNumber={5}
          clickHandler={(d) => this.setState({
                                dataDisplay: `${d.x} has ${d.y} schools `})}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          mouseMoveHandler={this.mouseMoveHandler}
          yDomainRange={['Allot', 'Middle', 'Less']}
        />
      <Legend data={this.state.data[0].values}
        dataId={'x'} horizontal
        styles={customStyle} />
        <div style={{display: 'inline-block', verticalAlign: 'top', paddingLeft: '20px'}}>
      {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a bar to show the value'}
    </div>
      </div>
)

}}

export default BarChartCohort;
