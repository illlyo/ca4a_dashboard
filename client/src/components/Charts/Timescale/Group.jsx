import React from 'react';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers } from 'rumble-charts';

class Group extends React.Component {
    constructor(props) {
  super(props)
  this.state = {
    series: props.coachLogResults.map(res => {
      return {

        name: this.getInputMonth(res.date_of_visit),
        data: [res.academic_skills, res.academic_personal_behavior, res.academic_programming, res.college_career_access]

    }
})}
this.getInputMonth = this.getInputMonth.bind(this)
}

getInputMonth(testingthiss) {
  var month;
  var day = new Date(testingthiss).getDate();
  switch (new Date(testingthiss).getMonth()) {
    case 0:
      month = "01/";
      break;
    case 1:
      month = "02/";
      break;
    case 2:
      month = "03/";
      break;
    case 3:
      month = "04/";
      break;
    case 4:
      month = "05/";
      break;
    case 5:
      month = "06/";
      break;
    case 6:
      month = "07/";
      break;
    case 7:
      month = "08/";
      break;
    case 8:
      month = "09/";
      break;
    case 9:
      month = "10/";
      break;
    case 10:
      month = "11/";
      break;
    case 11:
      month = "12/";

  }
  return month + day;
}

render(){
  return(
    <div style={{fontFamily:'sans-serif',fontSize:'0.8em'}}>
    <Chart width={600} height={300} series={this.state.series} minY={0}>
      <Layer width='80%' height='90%' position='top center'>
        <Ticks
          axis='y'
          lineLength='100%'
          lineVisible={true}
          lineStyle={{stroke:'lightgray'}}
          labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:'lightgray'}}
          labelAttributes={{x: -5}}
        />
        <Ticks
          axis='x'
          labelStyle={{textAnchor:'middle',dominantBaseline:'text-before-edge',fill:'lightgray'}}
          labelAttributes={{y: 3}}
        />
        <Bars
          groupPadding='3%'
          innerPadding='0.5%'
        />
      </Layer>
    </Chart>
    </div>
  )
}
}
export default Group;
