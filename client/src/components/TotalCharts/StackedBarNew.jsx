import React from 'react';
import {BarStackChart} from 'react-d3-basic';
import {Legend} from 'react-easy-chart';
import * as d3 from "d3";

class StackedBarNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      chartSeries = [
            {
              field: 'Facilitate Meeting with Team',
              name: 'Facilitate Meeting with Team'
            },
            {
              field: 'Observed Practice',
              name: 'Observed Practice'
            },
            {
              field: 'Checked in with Leadership',
              name: 'Checked in with Leadership'
            },
            {
              field: 'Checked in with Team Lead',
              name: 'Checked in with Team Lead'
            },
            {
              field: 'Facilitated a PD',
              name: 'Facilitated a PD'
            },
            {
              field: 'Other',
              name: 'Other'
            },

          ],
//       arraySpliced: [{
//             label: 'Other',
//             values: props.coachLogResults.map(res => {
//               return {
//
//                 x: this.getInputMonth(res.date_of_visit),
//                 y: res.interact_meeting_with_team
//
//             }
//           })}
//           , {
//             label: 'Facilitated a PD',
//             values: props.coachLogResults.map(res => {
//               return {
//
//                 x: this.getInputMonth(res.date_of_visit),
//                 y: res.interact_observed_practice
//
//             }
//             })
//           }, {
//             label: 'Checked in with Team Lead',
//             values: props.coachLogResults.map(res => {
//               return {
//
//                 x: this.getInputMonth(res.date_of_visit),
//                 y: res.interact_with_leadership
//
//             }
//           })
//           }, {
//             label: 'Checked in with Leadership',
//             values: props.coachLogResults.map(res => {
//               return {
//
//                 x: this.getInputMonth(res.date_of_visit),
//                 y: res.interact_with_team_lead
//
//             }
//             })
//           }, {
//             label: 'Observed Practice',
//             values: props.coachLogResults.map(res => {
//               return {
//
//                 x: this.getInputMonth(res.date_of_visit),
//                 y: res.interact_with_pd
//
//             }
//             })
//
//           }, {
//             label: 'Facilitate Meeting with Team',
//             values: props.coachLogResults.map(res => {
//               return {
//
//                 x: this.getInputMonth(res.date_of_visit),
//                 y: res.interact_with_other
//
//             }
//           })
//           }
// ],

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
    var month;
    var day = new Date(testingthiss).getDate();
    switch (new Date(testingthiss).getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
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
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";

    }
    return month + day;
  }

  render() {
    return (<div>
      <BarStackChart
            data= {this.state.data}
            width= {700}
            height= {500}
            chartSeries = {chartSeries}
            x= {this.state.data[0].label}
            xScale= {'ordinal'}
            yTickFormat= {d3.format(".2s")}
          />
      <Legend data={this.state.data} dataId={'label'} />
      </div>)
  }
}

export default StackedBarNew;
