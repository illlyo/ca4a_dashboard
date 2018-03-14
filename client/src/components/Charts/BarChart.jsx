import React from 'react';
import { WIDTH, VB_WIDTH, COLORS } from './const.js';
import * as d3 from 'd3';
import { BarChart } from 'react-d3-components';

class Bar extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [{
            values: [{x: 'A', y: 15},
                     {x: 'B', y: 10},
                     {x: 'C', y: 3},
                     {x: 'D', y: 25}]
        }]
        }
        }

render() {
  return (
    <BarChart
        colors={d3.scaleOrdinal(d3.schemeCategory10)}
        data={this.state.data}
        width={300}
        height={300}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
)

}}

export default Bar;
