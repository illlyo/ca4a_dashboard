import React, { Component } from 'react';
import { PieChart,Legend } from 'react-easy-chart';


class PieChartTwo extends Component {
  constructor(props) {
      super(props);
     this.state = {
       coachLogRecentResult: props.coachLogResults,
       data: {
         values: [{x: 'Facilitated Meeting With Team', y: props.coachLogResults[0].interact_meeting_with_team},
                  {x: 'Observed Practice', y: props.coachLogResults[0].interact_observed_practice},
                  {x: 'Checked in With Leadership', y: props.coachLogResults[0].interact_with_leadership},
                  {x: 'Checked in With Team Lead', y: props.coachLogResults[0].interact_with_team_lead},
                {x: 'Facilitated a PD', y: props.coachLogResults[0].interact_with_pd},
              {x: 'Other', y: props.coachLogResults[0].interact_with_other}]
     }
   }

}

mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.key});
  }

  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: e.y, left: e.x});
    }
  }

  mouseOutHandler() {
    this.setState({showToolTip: false});
  }

  createTooltip() {
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
        >
          The value of {this.state.key} is {this.state.value}
        </ToolTip>
      );
    }
    return false;
  }
  render() {
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
    return(
  <PieChart
    data={[
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]}
    innerHoleSize={200}
    mouseOverHandler={this.mouseOverHandler}
    mouseOutHandler={this.mouseOutHandler.bind(this)}
    mouseMoveHandler={this.mouseMoveHandler.bind(this)}
    padding={10}
    styles={this.styles}
  />
  <Legend data={this.state.data.values}
          dataId={'x'}
          styles={customStyle} />
  </div>)
}
};

export default ThisPieChart;
