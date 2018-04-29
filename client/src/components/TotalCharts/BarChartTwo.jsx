import React from 'react';
import * as d3 from 'd3';
import {BarChart, Legend} from 'react-easy-chart';

class BarChartTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachLogResults: props.coachLogResults,
      dataDisplay: '',
      coachLogResultsGrid: [ props.coachLogResults.map( d => d.school_visited + " , " + d.academic_skills + " , " +  d.academic_personal_behavior + " , " +  d.academic_programming + " , " +  d.college_career_access + " , " +  d.college_career_readiness + " , ").reduceRight(
  (previousValue, currentValue) => previousValue.concat(currentValue)
).split(",") ],
      data: [
        {
          values: [
            {
              x: 'Academic Skills',
              y: props.coachLogResults.map(d => d.academic_skills).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Academic and Personal Behaviors',
              y: props.coachLogResults.map(d => d.academic_personal_behavior).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'Academic Programming',
              y: props.coachLogResults.map(d => d.academic_programming).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'College and Career Access',
              y: props.coachLogResults.map(d => d.college_career_access).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }, {
              x: 'College and Career Readiness',
              y: props.coachLogResults.map(d => d.college_career_readiness).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }
          ]
        }
      ]
    }; console.log(this.state.data[0].values.map(d => d.x));
    console.log(this.state.coachLogResultsGrid)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const defaultStyles = {
      '.legend': {
        'list-style': 'none',
        margin: 0,
        padding: 0
      },
      '.legend li.horizontal': {
        display: 'inline-block'
      },
      '.legend .icon': {
        width: '12px',
        height: '12px',
        background: 'red',
        borderRadius: '6px',
        position: 'absolute',
        left: '0',
        top: '50%',
        marginTop: '-6px'
      }
    }
    const customStyle = {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '.5em',
        maxWidth: '130px',
        padding: '3px'
      },
      '.legend li': {
        display: 'block',
        lineHeight: '13px',
        marginRight: '24px',
        marginBottom: '6px',
        paddingLeft: '24px',
        position: 'relative'
      },
      '.legend .icon': {
        width: '12px',
        height: '12px',
        background: 'red',
        borderRadius: '6px',
        position: 'absolute',
        left: '0',
        top: '50%',
        marginTop: '-6px'
      }
    }
    return (<div>
      <div className="filtered-results-comp">
      <BarChart axes="axes"
                grid="grid"
                colorBars="colorBars"
                height={250}
                width={350}
                data={this.state.data[0].values}
                clickHandler={(d) => this.setState({dataDisplay: `${d.x} was engaged ${d.y} times.`})
          }
                />
      <Legend data={this.state.data[0].values} dataId={'x'} styles={customStyle}/>
      </div>
        <div className="filtered-results-comp">
          {
            this.state.dataDisplay
              ? this.state.dataDisplay
              : 'Click on a segment to show the value'
          }
        </div>
        <div className="grid-container-college-career-domains">
            <div class="item">School</div>
            <div class="item">Academic Skills</div>
            <div class="item">Academic & Personal Behavior</div>
            <div class="item">Academic Programming</div>
            <div class="item">College & Career Access</div>
            <div class="item">College & Career Readiness</div>
              {
                this.state.coachLogResultsGrid[0].map((res) =>
                  <div>{res}</div>
                )
              }
        </div>
    </div>)

  }
}

export default BarChartTwo;
