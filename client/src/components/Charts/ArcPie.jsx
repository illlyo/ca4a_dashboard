import React from 'react';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers } from 'rumble-charts';


class ArcPie extends React.Component{
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
    <Chart width={300} height={300} series={this.state.series} minY={0}>
  <Transform method={['transpose', 'stack']}>
    <Pies
      combined={true}
      innerPadding='3%'
      innerRadius='20%'
      pieAttributes={{
        onMouseMove: (e) => e.target.style.opacity = 1,
        onMouseLeave: (e) => e.target.style.opacity = 0.5
      }}
    />
  </Transform>
</Chart>

  )
}

}

export default ArcPie;
