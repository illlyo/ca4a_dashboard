import React from 'react';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers } from 'rumble-charts';


class PieInteractive extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      series : [{
        data: [1, 3, 2, 5, 7]
      }, {
        data: [5, 11, 7, 13, 19]
      }, {
        data: [13, 19, 17, 23, 29]
      }]
}
}
render(){
  return(
    <Chart width={300} height={300} series={this.state.series}>
      <Transform method={['transpose', 'stackNormalized']}>
        <Pies
          colors='category10'
          combined={true}
          innerRadius='33%'
          padAngle={0.025}
          cornerRadius={5}
          innerPadding={2}
          pieAttributes={{
            onMouseMove: (e) => e.target.style.opacity = 1,
            onMouseLeave: (e) => e.target.style.opacity = 0.5
          }}
          pieStyle={{opacity: 0.5}}
        />
      </Transform>
    </Chart>
  )
}
}

export default PieInteractive;
