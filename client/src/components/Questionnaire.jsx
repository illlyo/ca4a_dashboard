import React from 'react';

class Questionnaire extends React.Component{

  render(){
    return(
      <div>
    <h1>College Access For All Add-School-Form:</h1>
      <form>
        <label>
          DBN:
          <input type="text" pattern=".+@school.nyc.gov" />
        </label>
        <label>
          Location Name:
          <input type="text" pattern=".+@nyc.edu" />
        </label>
        <label>
          Cohort:
          <input type="text" pattern=".+@nyc.edu" />
        </label>
        <label>
          Location Type Decription:
          <input type="text" pattern=".+@nyc.edu" />
        </label>
        <label>
          Building Code:
          <input type="text" pattern=".+@nyc.edu" />
        </label>
        <label>
          Principal Name:
          <input type="email" pattern=".+@nyc.edu" />
        </label>
        <label>
          Principal phone number:
          <input type="tel" pattern=".+@nyc.edu" />
        </label>
        <label>
          Superintendent:
          <input type="text" pattern=".+@nyc.edu" />
        </label>
        <label>
          Session:
          <input type="text" pattern=".+@nyc.edu" />
        </label>
        <label>
          Year attended:
          <input type="number" pattern=".+@nyc.edu" />
        </label>
        <label>
          2016-17 Allocation:
          <input type="number" pattern=".+@nyc.edu" />
        </label>
        <label>
          FSF Proj Enroll 2017-18:
          <input type="number" pattern=".+@nyc.edu" />
        </label>
        <label>
          2017-18 Allocation:
          <input type="number" pattern=".+@nyc.edu" />
        </label>
        </form>
        </div>
    )
  }
}

export default Questionnaire;
