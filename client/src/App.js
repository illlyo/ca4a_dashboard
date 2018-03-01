import React, { Component } from 'react';
import logo from './components/nyc_doe_logo.png';
import Scatterplot from './components/Scatterplot.jsx';
import BarChart from './components/BarChart.jsx';
import LineChartBrush from './components/LineChartBrush.jsx';
import ThisPieChart from './components/PieChart.jsx';
import Charted from './components/Charted.jsx';
import GroupedBarChart from './components/GroupedBarChart.jsx';
import CoachLog from './components/Coach_log.jsx';
import Login from './components/Login.jsx';
import Questionnaire from './components/Questionnaire.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        // label: 'somethingA',
        values: [{x: 'A', y: 10},
                 {x: 'B', y: 10},
                 {x: 'C', y: 3},
                 {x: 'D', y: 25}]
    }]
    }
    this.map = this.map.bind(this);

  }

  map(){
    return console.log(this.state.data[0].values);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="nyc-doe-logo" alt="logo" />
          <h1 className="App-title">BETA DASHBOARD</h1>
        </header>
        <Login />
        <Questionnaire />
        <CoachLog />
        <div className="charts">
        <BarChart
          data={this.state.data}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}} />
                {this.map()}
        <Scatterplot />
        <LineChartBrush />
        <ThisPieChart />
        <GroupedBarChart />
        </div>
      </div>
    );
  }
}

export default App;
