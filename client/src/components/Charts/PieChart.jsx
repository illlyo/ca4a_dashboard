import React, { Component } from 'react';
import { PieChart } from 'react-d3-components';


class ThisPieChart extends Component {
  constructor(props) {
      super(props);

}

//sort = null; d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

  render() {
    return(
      <PieChart
                data={{
                        label: 'somethingA',
                        values: [{x: 'Facilitated Meeting with Team', y: 1},
                                 {x: 'Observed Practice', y: 1},
                                 {x: 'Check in with Leadership', y: 1},
                                 {x: 'Facilitated a PD', y: 0},
                                 {x: 'Other', y: 1}]
                }}
                width={400}
                height={400}
                margin={{top: 10, bottom: 10, left: 100, right: 100}}
                sort={null}
                />
            )
        }
};

export default ThisPieChart;
