import React, { Component } from 'react';
import logo from './logo.svg';
import Scatterplot from './components/Scatterplot.jsx';
import BarChart from './components/BarChart.jsx';
import LineChartBrush from './components/LineChartBrush.jsx';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          stuff <code>src/App.js</code> and save to reload.
        </p>
        <BarChart
            data={[{
              label: 'somethingA',
              values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 25}, {x: 'SomethingC', y: 3}]
          }]}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}} />
        <Scatterplot />
        <LineChartBrush />
      </div>
    );
  }
}

export default App;
