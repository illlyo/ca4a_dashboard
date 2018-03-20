'use strict'

import React from 'react';

class Step1 extends React.Component {
constructor(props){
  super(props);

  this.state = {
    date_of_visit: props.getStore().date_of_visit,
    length_of_visit: props.getStore().length_of_visit,
    objectives_of_visit: props.getStore().objectives_of_visit,
    interact_in_these_ways: props.getStore().interact_in_these_ways,
    interact_other_explained: props.getStore().interact_other_explained,
    interact_teachers: props.getStore().interact_teachers,
    interact_guidance_counselors: props.getStore().interact_guidance_counselors,
    interact_college_couselors: props.getStore().interact_college_couselors,
    interact_assistant_principals: props.getStore().interact_assistant_principals,
    interact_principals: props.getStore().interact_principals,
    interact_other: props.getStore().interact_other,
    next_step_notes: props.getStore().next_step_notes,
  }


  this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

  this.validationCheck = this.validationCheck.bind(this);
  this.isValidated = this.isValidated.bind(this);

  }

  componentDidMount() {}

  componentWillUnmount() {}

  isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
        if (this.props.getStore().date_of_visit != userInput.date_of_visit ||
            this.props.getStore().length_of_visit != userInput.length_of_visit ||
            this.props.getStore().objectives_of_visit != userInput.objectives_of_visit ||
            this.props.getStore().interact_in_these_ways != userInput.interact_in_these_ways ||
            this.props.getStore().interact_other_explained != userInput.interact_other_explained ||
            this.props.getStore().interact_teachers != userInput.interact_teachers ||
            this.props.getStore().interact_guidance_counselors != userInput.interact_guidance_counselors ||
            this.props.getStore().interact_college_couselors != userInput.interact_college_couselors ||
            this.props.getStore().interact_assistant_principals != userInput.interact_assistant_principals ||
            this.props.getStore().interact_principals != userInput.interact_principals ||
            this.props.getStore().interact_other != userInput.interact_other ||
            this.props.getStore().next_step_notes != userInput.next_step_notes ) { // only update store of something changed
          this.props.updateStore({
            ...userInput,
            savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
        }

        isDataValid = true;
    }
    else {
        // if anything fails then update the UI validation state but NOT the UI Data State
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand)
      return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
  }

  _validateData(data) {
   return  {
     date_of_visitVal: (data.date_of_visit != 0),
     length_of_visitVal: (data.length_of_visit != 0),
     objectives_of_visitVal: (data.objectives_of_visit != 0),
     interact_in_these_waysVal: (data.interact_in_these_ways != 0),
     interact_other_explainedVal: (data.interact_other_explained != 0),
     interact_teachersVal: (data.interact_teachers != null),
     interact_guidance_counselorsVal: (data.interact_guidance_counselors != null),
     interact_college_couselorsVal: (data.interact_college_couselors != null),
     interact_assistant_principalsVal: (data.interact_assistant_principals != null),
     interact_principalsVal: (data.interact_principals != null),
     interact_otherVal: (data.interact_other != null),
     next_step_notesVal: (data.next_step_notes != 0)
   }
 }

 _validationErrors(val) {
   const errMsgs = {
     date_of_visitValMsg: val.date_of_visitVal ? '' : 'Response required',
     length_of_visitValMsg: val.length_of_visitVal ? '' : 'Response required',
     objectives_of_visitValMsg: val.objectives_of_visitVal ? '' : 'Response required',
     interact_in_these_waysValMsg: val.interact_in_these_waysVal ? '' : 'Response required',
     interact_other_explainedValMsg: val.interact_other_explainedVal ? '' : 'Response required',
     interact_teachersValMsg: val.interact_teachersVal ? '' : 'Response required',
     interact_guidance_counselorsValMsg: val.interact_guidance_counselorsVal ? '' : 'Response required',
     interact_college_couselorsValMsg: val.interact_college_couselorsVal ? '' : 'Response required',
     interact_assistant_principalsValMsg: val.interact_assistant_principalsVal ? '' : 'Response required',
     interact_principalsValMsg: val.interact_principalsVal ? '' : 'Response required',
     interact_otherValMsg: val.interact_otherVal ? '' : 'Response required',
     next_step_notesValMsg: val.next_step_notesVal ? '' : 'Response required'
   }
   console.log(errMsgs)
   return errMsgs;
 }

  _grabUserInput() {
    return {
      date_of_visit: this.refs.date_of_visit.value,
      length_of_visit: this.refs.length_of_visit.value,
      objectives_of_visit: this.refs.objectives_of_visit.value,
      interact_in_these_ways: this.refs.interact_in_these_ways.value,
      interact_other_explained: this.refs.interact_other_explained.value,
      interact_teachers: this.refs.interact_teachers.value,
      interact_guidance_counselors: this.refs.interact_guidance_counselors.value,
      interact_college_couselors: this.refs.interact_college_couselors.value,
      interact_assistant_principals: this.refs.interact_assistant_principals.value,
      interact_principals: this.refs.interact_principals.value,
      interact_other: this.refs.interact_other.value,
      next_step_notes: this.refs.next_step_notes.value
    };
  }

render(){

  let notValidClasses = {};

  if (typeof this.state.date_of_visitVal == 'undefined' || this.state.date_of_visitVal) {
    notValidClasses.date_of_visitCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.date_of_visitCls = 'has-error col-md-8';
     notValidClasses.date_of_visitValGrpCls = 'val-err-tooltip';
  }

  if (typeof this.state.length_of_visitVal == 'undefined' || this.state.length_of_visitVal) {
      notValidClasses.length_of_visitCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.length_of_visitCls = 'has-error col-md-8';
     notValidClasses.length_of_visitValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.objectives_of_visitVal == 'undefined' || this.state.objectives_of_visitVal) {
    notValidClasses.objectives_of_visitCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.objectives_of_visitCls = 'has-error col-md-8';
     notValidClasses.objectives_of_visitValGrpCls = 'val-err-tooltip';
  }

  if (typeof this.state.interact_in_these_waysVal == 'undefined' || this.state.interact_in_these_waysVal) {
      notValidClasses.interact_in_these_waysCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_in_these_waysCls = 'has-error col-md-8';
     notValidClasses.interact_in_these_waysValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.interact_other_explainedVal == 'undefined' || this.state.interact_other_explainedVal) {
    notValidClasses.interact_other_explainedCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_other_explainedCls = 'has-error col-md-8';
     notValidClasses.interact_other_explainedValGrpCls = 'val-err-tooltip';
  }

  if (typeof this.state.interact_teachersVal == 'undefined' || this.state.interact_teachersVal) {
      notValidClasses.interact_teachersCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_teachersCls = 'has-error col-md-8';
     notValidClasses.interact_teachersValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.interact_guidance_counselorsVal == 'undefined' || this.state.interact_guidance_counselorsVal) {
    notValidClasses.interact_guidance_counselorsCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_guidance_counselorsCls = 'has-error col-md-8';
     notValidClasses.interact_guidance_counselorsValGrpCls = 'val-err-tooltip';
  }

  if (typeof this.state.interact_college_couselorsVal == 'undefined' || this.state.interact_college_couselorsVal) {
      notValidClasses.interact_college_couselorsCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_college_couselorsCls = 'has-error col-md-8';
     notValidClasses.interact_college_couselorsValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.interact_assistant_principalsVal == 'undefined' || this.state.interact_assistant_principalsVal) {
    notValidClasses.interact_assistant_principalsCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_assistant_principalsCls = 'has-error col-md-8';
     notValidClasses.interact_assistant_principalsValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.interact_principalsVal == 'undefined' || this.state.interact_principalsVal) {
      notValidClasses.interact_principalsCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_principalsCls = 'has-error col-md-8';
     notValidClasses.interact_principalsValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.interact_otherVal == 'undefined' || this.state.interact_otherVal) {
      notValidClasses.interact_otherCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.interact_otherCls = 'has-error col-md-8';
     notValidClasses.interact_otherValGrpCls = 'val-err-tooltip';
  }
  if (typeof this.state.next_step_notesVal == 'undefined' || this.state.next_step_notesVal) {
      notValidClasses.next_step_notesCls = 'no-error col-md-8';
  }
  else {
     notValidClasses.next_step_notesCls = 'has-error col-md-8';
     notValidClasses.next_step_notesValGrpCls = 'val-err-tooltip';
  }

  return(
    <div className="step step1">
            <div className="row">
              <form id="Form" className="form-horizontal">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    <h1>Schedule of the visit</h1>
                  </label>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="col-md-6">
                        <div className="form-style-10">
                        <h1>*Coach Name Here*<span>*School Name*</span></h1>
                        <form>
                            <div className="section"><span>1</span>Date of visit</div>
                            <div className="inner-wrap">
                                <label>Select Date:</label><br></br>
                                <div className={notValidClasses.date_of_visitCls}>
                                  <input type="date" name="field1" className="form-control" ref="date_of_visit" defaultValue={this.state.date_of_visit} onBlur={this.validationCheck} />
                                    <div className={notValidClasses.date_of_visitValGrpCls}>{this.state.date_of_visitValMsg}</div>
                                </div>
                            </div>
                            <div className="section"><span>2</span>How long was your visit?</div>
                            <div className="inner-wrap">
                                <label><input type="string" name="field3" className="form-control" ref="length_of_visit" defaultValue={this.state.length_of_visit} onBlur={this.validationCheck} /><br></br>(ex. 1 hour 30 minutes)</label>
                              <div className={notValidClasses.length_of_visitValGrpCls}>{this.state.length_of_visitValMsg}</div>
                            </div>
                            <div className="section"><span>3</span>What were the objectives of today's visit?</div>
                                <div className="inner-wrap">
                                <label><textarea type="string" name="field5" rows="4" cols="100" className="form-control" ref="objectives_of_visit" defaultValue={this.state.objectives_of_visit} onBlur={this.validationCheck} /><br></br>(ex. to share internal data and discuss observations, to design something small to try, to reflect on the team's first try etc.)</label>
                                  <div className={notValidClasses.objectives_of_visitValGrpCls}>{this.state.objectives_of_visitValMsg}</div>
                            </div>

                            <div className="section"><span>4</span>During today's visit I interacted with my school in the following ways </div>
                                <div className="inner-wrap">
                                  <label><i>(select all that apply)*</i></label><br></br>
                                    <input type="checkbox" className="form-control" ref="interact_in_these_ways" defaultValue={this.state.interact_in_these_ways} onBlur={this.validationCheck} value="Facilitated meeting with team" />Facilitated meeting with team<br></br>
                                    <input type="checkbox" className="form-control" ref="interact_in_these_ways" defaultValue={this.state.interact_in_these_ways} onBlur={this.validationCheck} value="Observed Practice" />Observed Practice<br></br>
                                    <input type="checkbox" className="form-control" ref="interact_in_these_ways" defaultValue={this.state.interact_in_these_ways} onBlur={this.validationCheck} value="Checked in with leadership" />Checked in with leadership<br></br>
                                    <input type="checkbox" className="form-control" ref="interact_in_these_ways" defaultValue={this.state.interact_in_these_ways} onBlur={this.validationCheck} value ="Checked in with Team Lead" />Checked in with Team Lead<br></br>
                                    <input type="checkbox" className="form-control" ref="interact_in_these_ways" defaultValue={this.state.interact_in_these_ways} onBlur={this.validationCheck} value="Facilitated a PD" />Facilitated a PD<br></br>
                                    <input type="checkbox" className="form-control" ref="interact_in_these_ways" defaultValue={this.state.interact_in_these_ways} onBlur={this.validationCheck} value="Other" />Other: <input type="string" className="form-control" ref="interact_other_explained" defaultValue={this.state.interact_other_explained} onBlur={this.validationCheck} /><br></br>
                                    <div className={notValidClasses.interact_in_these_waysValGrpCls}>{this.state.interact_in_these_waysValMsg}</div>
                                    <div className={notValidClasses.interact_other_explainedValGrpCls}>{this.state.interact_other_explainedValMsg}</div>
                                </div>

                            <div className="section"><span>5</span>Thinking about today's visit, how many of each role did you interact with?</div>
                            <div className="inner-wrap">
                                <label></label>
                                        Teachers
                                        <select className="form-control" ref="interact_teachers" defaultValue={this.state.interact_teachers} onBlur={this.validationCheck} >
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                          <option value="3" >3</option>
                                          <option value="4" >4</option>
                                          <option value="5" >5 or more</option>
                                        </select><br></br>
                                Guidance Counselors
                                        <select className="form-control" ref="interact_guidance_counselors" defaultValue={this.state.interact_guidance_counselors} onBlur={this.validationCheck} >
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                          <option value="3" >3</option>
                                          <option value="4" >4</option>
                                          <option value="5" >5 or more</option>
                                        </select><br></br>
                                College Counselors
                                        <select className="form-control" ref="interact_college_couselors" defaultValue={this.state.interact_college_couselors} onBlur={this.validationCheck} >
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                          <option value="3" >3</option>
                                          <option value="4" >4</option>
                                          <option value="5" >5 or more</option>
                                        </select><br></br>
                                Assistant Principals
                                        <select className="form-control" ref="interact_assistant_principals" defaultValue={this.state.interact_assistant_principals} onBlur={this.validationCheck} >
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                          <option value="3" >3</option>
                                          <option value="4" >4</option>
                                          <option value="5" >5 or more</option>
                                        </select><br></br>
                                Principals
                                        <select className="form-control" ref="interact_principals" defaultValue={this.state.interact_principals} onBlur={this.validationCheck} >
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                          <option value="3" >3</option>
                                          <option value="4" >4</option>
                                          <option value="5" >5 or more</option>
                                        </select><br></br>
                                Other
                                        <select className="form-control" ref="interact_other" defaultValue={this.state.interact_other} onBlur={this.validationCheck} >
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                          <option value="3" >3</option>
                                          <option value="4" >4</option>
                                          <option value="5" >5 or more</option>
                                        </select><br></br>
                                        <div className={notValidClasses.interact_otherValGrpCls}>{this.state.interact_otherValMsg}</div>
                            </div>
                            <div className="section"><span>6</span>(For your notes) - Feel free to include any next steps or notes from this visit
                            <div className="inner-wrap">
                                <label> <textarea type="string" name="field3" className="form-control" ref="next_step_notes" defaultValue={this.state.next_step_notes} onBlur={this.validationCheck} /></label>
                            </div>
                            <div className="button-section">
                             <input type="submit" value="Next" onClick={() => this.props.jumpToStep(1)} />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
    )
  }
}

export default Step1;
