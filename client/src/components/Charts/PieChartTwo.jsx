import React, {Component} from 'react';
import {PieChart, Legend, ToolTip} from 'react-easy-chart';

class PieChartTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogRecentResult: props.coachLogResults,
      showToolTip: false,
      top: null,
      left: null,
      value: null,
      key: null,
      data: {
        values: [
          {
            key: 'Academic Skills',
            value: props.coachLogResults[0].academic_skills
          }, {
            key: 'Academic & Personal Behaviors',
            value: props.coachLogResults[0].academic_personal_behavior
          }, {
            key: 'Academic Programming',
            value: props.coachLogResults[0].academic_programming
          }, {
            key: 'College & Career Access',
            value: props.coachLogResults[0].college_career_access
          }
        ]
      }
    }
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);

  }

  mouseOverHandler(d, e) {
    this.setState({showToolTip: true, top: e.y, left: e.x, value: d.value, key: d.data.key});
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
      return (<ToolTip top={this.state.top} left={this.state.left}>
        The value of {this.state.key}
        is {this.state.value}
      </ToolTip>);
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
      maxWidth: '200px',
      padding: '3px'
    }
  }
  return (
    <div>
    <PieChart size={150} data={this.state.data.values} mouseOverHandler={this.mouseOverHandler} mouseOutHandler={this.mouseOutHandler.bind(this)} mouseMoveHandler={this.mouseMoveHandler.bind(this)} padding={10} styles={this.styles}/>
  <Legend data={this.state.data.values} dataId={'key'} styles={customStyle} />
</div>)
}
};

export default PieChartTwo;
