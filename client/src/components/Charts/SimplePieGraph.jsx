import React from 'react';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers } from 'rumble-charts';


class SimplePieGraph extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      series : [{
    data: [1, 2, 4, 8, 3]
}]
}
}
render(){
  return(
    <Chart width={300} height={300} series={this.state.series}>
      <Transform method={['transpose', 'stack']}>
        <Pies combined={true} />
      </Transform>
    </Chart>
)
}
}

export default SimplePieGraph;
