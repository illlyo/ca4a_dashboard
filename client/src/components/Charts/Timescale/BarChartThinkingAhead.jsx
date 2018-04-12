import React from 'react';
import {BarChart} from 'react-d3-components';
import {Legend} from 'react-easy-chart';
import * as d3 from "d3";

class BarChartThinkingAhead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      data: [{
            label: 'Inquiry Institute',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.inquiry_institute

            }
          })}
          , {
            label: 'Research',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.research

            }
            })
          }, {
            label: 'Design',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.design

            }
          })
          }, {
            label: 'PDSA',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.pdsa

            }
            })
          }, {
            label: 'Synthesize',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.synthesize

            }
            })

          }, {
            label: 'Scale',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.scale

            }
          })
          }
]
    }

    this.getInputMonth = this.getInputMonth.bind(this);
    console.log(this.state.data);
    console.log(this.state.coachLogResults.filter(res => res.school_id == 186));
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

  render() {
    var colorScale = d3.scaleOrdinal(d3.schemeCategory20);
    const customStyle = {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '.9em',
        maxWidth: '180px',
        padding: '3px'
      }}
    var tooltipScatter = function(label, x, y, z) {
    return "label: " + label + " x: " + x + "y: " + y + "z: " + z ;
}
    return (<div><BarChart data={this.state.data} colorScale={colorScale} width={460} height={250} tooltipHtml={tooltipScatter}  margin={{
        top: 10,
        bottom: 50,
        left: 50,
        right: 10,
      }}/>
      <Legend data={this.state.data} dataId={'label'} styles={customStyle}  />
      </div>)
  }
}

export default BarChartThinkingAhead;
