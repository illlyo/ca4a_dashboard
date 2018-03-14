import React from 'react';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers } from 'rumble-charts';

class LineBarChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        label: 'somethingA',
          data: [1, 2, 3]
        }, {
          data: [5, 7, 11]
        }, {
          data: [13, 17, 1]
        }]
    }
  }




render(){
  return(
    <Chart width={600} height={250} minY={0} series={this.state.series}>
      <Layer width='90%' height='90%'>
        <Bars opacity={0.5} />
        <Lines />
        <Dots />
      </Layer>
    </Chart>
  )
}
}

export default LineBarChart;
