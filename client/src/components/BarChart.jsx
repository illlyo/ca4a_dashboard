import React from 'react';
import {WIDTH, VB_WIDTH, COLORS} from './const';
import * as d3 from 'd3';
import { BarChart } from 'react-d3-components';

class Scatterplot extends React.Component {
    constructor() {
        super();

        }

render() {
  return (
    <BarChart
        width={400}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
)

}}

export default BarChart;
