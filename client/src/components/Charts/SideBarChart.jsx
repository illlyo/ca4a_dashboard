import React from 'react';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers } from 'rumble-charts';


class SideBarChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      series: [{
          data: [1, 2, 3]
        }, {
          data: [5, 7, 11]
        }]
    }
  }

  render(){
    return(
      <Chart width={1000} height={200} series={this.state.series} minY={0}>
        <Layer width='19%' height='100%' position='40% middle'>
          <Transform method={['transpose', 'rotate']}>
            <Bars />
          </Transform>
        </Layer>
      </Chart>
    )
  }
}

export default SideBarChart;
