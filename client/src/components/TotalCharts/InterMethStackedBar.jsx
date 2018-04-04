import React from 'react';
import {BarChart} from 'react-d3-components';
import {Legend} from 'react-easy-chart';
import * as d3 from "d3";

class InterMethStackedBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      arraySpliced: [{
            label: 'Facilitate Meeting with Team',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_meeting_with_team

            }
          })}
          , {
            label: 'Observed Practice',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_observed_practice

            }
            })
          }, {
            label: 'Checked in with Leadership',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_leadership

            }
          })
          }, {
            label: 'Checked in with Team Lead',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_team_lead

            }
            })
          }, {
            label: 'Facilitated a PD',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_pd

            }
            })

          }, {
            label: 'Other',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_other

            }
          })
          }
],

      data: [{
            label: 'Facilitate Meeting with Team',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_meeting_with_team

            }
          })}
          , {
            label: 'Observed Practice',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_observed_practice

            }
            })
          }, {
            label: 'Checked in with Leadership',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_leadership

            }
          })
          }, {
            label: 'Checked in with Team Lead',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_team_lead

            }
            })
          }, {
            label: 'Facilitated a PD',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_pd

            }
            })

          }, {
            label: 'Other',
            values: props.coachLogResults.map(res => {
              return {

                x: this.getInputMonth(res.date_of_visit),
                y: res.interact_with_other

            }
          })
          }
]
    }

    this.getInputMonth = this.getInputMonth.bind(this);
    console.log(this.state.data);
    console.log(this.state.coachLogResults);
    console.log(this.state.arraySpliced)
  }
//     console.log(this.state.coachLogResults.map(res => {
//       var datam:[
//         {
//           label: 'Facilitate Meeting with Team',
//           value: [
//             {
//               x: this.getInputMonth(res.date_of_visit),
//               y: res.interact_meeting_with_team
//             }
//           ]
//         }, {
//           label: 'Observed Practice',
//           value: [
//             {
//               x: this.getInputMonth(res.date_of_visit),
//               y: res.interact_observed_practice
//             }
//           ]
//         }, {
//           label: 'Checked in with Leadership',
//           value: [
//             {
//               x: this.getInputMonth(res.date_of_visit),
//               y: res.interact_with_leadership
//             }
//           ]
//         }, {
//           label: 'Checked in with Team Lead',
//           value: [
//             {
//               x: this.getInputMonth(res.date_of_visit),
//               y: res.interact_with_team_lead
//             }
//           ]
//         }, {
//           label: 'Facilitated a PD',
//           value: [
//             {
//               x: this.getInputMonth(res.date_of_visit),
//               y: res.interact_with_pd
//             }
//           ]
//         }, {
//           label: 'Other',
//           value: [
//             {
//               x: this.getInputMonth(res.date_of_visit),
//               y: res.interact_with_other
//             }
//           ]
//         }
// ]
// return datam;
//     },))
//
//   }
  //
  // componentDidMount() {
  //   this.setState({})
  // }

  getInputMonth(testingthiss) {
    var month
    switch (new Date(testingthiss).getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";

    }
    return month;
  }

  render() {
    return (<div><BarChart data={this.state.data} width={400} height={400} margin={{
        top: 10,
        bottom: 50,
        left: 50,
        right: 10,
      }}/>
      <Legend data={this.state.data} dataId={'label'} horizontal />
      </div>)
  }
}

export default InterMethStackedBar;
