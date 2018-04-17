import React from 'react';
import Auth from '../modules/Auth';
import FilteredResultsComp from './FilteredResultsComp.jsx';
import CalendarHeatmap from './Charts/CalendarMap.jsx';

class FilteredResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coach_id: null,
      coachesData: null,
      coachLogResults: null,
      coachLogRecentResult: null,
      coachLogResultsLoaded: false,
      filterBySchool: null,
      schoolData: null,
      schoolDataLoaded:false,
    }
    this.handleCoachSelect = this.handleCoachSelect.bind(this);
    this.handleUnselect = this.handleUnselect.bind(this);
  }
  componentDidMount(){
    fetch('/coachlogs', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        coachLogResults: res.coachlogs,
        coachLogResultsFiltered: res.coachlogs,
        coachLogRecentResult: [res.coachlogs[res.coachlogs.length-1]],
        coachLogResultsLoaded: true,
        data: res.coachlogs.map(res => {
          return{
             "date": res.date_of_visit,
             "total": 17164,
             "details": [{
               "name": res.coach_name +" visited " + res.school_visited,
               "date": res.date_of_visit,
               "value": 9192
             }]
           }})
      })
      console.log(this.state.coachLogResults.map(d => d.interact_meeting_with_team).reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
)); console.log(this.state.coachLogResults)
    })
      fetch('/schools', {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          schoolData: res.schools,
          schoolDataLoaded:true,
        })
        console.log(this.state.schoolData);
    })
    .catch(err => console.log(err));
}

  handleOptionBySchool(e){
    console.log(e.target.value)
  }

  componentWillUnmount() {}

  handleCoachSelect(e){

    this.setState({
      coach_id: e.target.value,
      coachLogResultsFiltered: this.state.coachLogResults.filter(res => res.coach_id == e.target.value),
      coachLogResultsFilteredLoaded: true
  })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.setState({
        coachLogResultsFilteredLoaded: true
    })
    resolve();
      }
  , 1000)})
    console.log(this.state.coachLogResultsFiltered)
  }

handleUnselect(e){
  this.setState({
    coachLogResultsFilteredLoaded: false
  })
}

  render(){
    return(
      <div>
        {(this.state.coachLogResultsLoaded) ?
             <div className="filterResults-chart-org">
               <h1>Total Results</h1>
                 <div className="search-div">
                 <p>Search By Coach:</p>
                 <select onChange={this.handleCoachSelect} onMouseDown={this.handleUnselect} >
                   <option value='' >All </option>
                   {this.state.coachLogResults.map(res => {
                   return(
                     <option value={res.coach_id}>{res.coach_name}</option>
                   )
                 })}
                   </select>
                   <p>Search By School:</p>
                   <select>
                   {this.state.coachLogResults.map(res => {
                     return(
                       <option>{res.school_visited}</option>
                     )
                   })}
                 </select>
                   </div>
                   <CalendarHeatmap data={this.state.data} />
                  </div> : <p>Loading...</p>}
                  {(this.state.coachLogResultsFilteredLoaded) ?
                <FilteredResultsComp schoolData={this.state.schoolData}
                                    coachLogResultsFiltered={this.state.coachLogResultsFiltered} /> :
                '' }
        </div>
    )
  }

}

export default FilteredResults;
