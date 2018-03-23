'use strict';

import React from 'react';

class Step2 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      college_career_readiness_domains: props.getStore().college_career_readiness_domains ,
      learning_trajectory_discussion: props.getStore().learning_trajectory_discussion ,
      activity_inquiry_institute: props.getStore().activity_inquiry_institute ,
      activity_research: props.getStore().activity_research ,
      activity_design: props.getStore().activity_design ,
      activity_pdsa: props.getStore().activity_pdsa ,
      activity_synthesize: props.getStore().activity_synthesize ,
      activity_scale: props.getStore().activity_scale ,
      forward_work: props.getStore().forward_work ,
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
          if (this.props.getStore().college_career_readiness_domains != userInput.college_career_readiness_domains ||
              this.props.getStore().learning_trajectory_discussion != userInput.learning_trajectory_discussion ||
              this.props.getStore().activity_inquiry_institute != userInput.activity_inquiry_institute ||
              this.props.getStore().activity_research != userInput.activity_research ||
              this.props.getStore().activity_design != userInput.activity_design ||
              this.props.getStore().activity_pdsa != userInput.activity_pdsa ||
              this.props.getStore().activity_synthesize != userInput.activity_synthesize ||
              this.props.getStore().activity_scale != userInput.activity_scale ||
              this.props.getStore().forward_work != userInput.forward_work ) { // only update store of something changed
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
       college_career_readiness_domainsVal: (data.college_career_readiness_domains != 0) ,
       learning_trajectory_discussionVal: (data.learning_trajectory_discussion != 0) ,
       activity_inquiry_instituteVal: (data.activity_inquiry_institute != 0) ,
       activity_researchVal: (data.activity_research != 0) ,
       activity_designVal: (data.activity_design != 0) ,
       activity_pdsaVal: (data.activity_pdsa != 0) ,
       activity_synthesizeVal: (data.activity_synthesize != 0) ,
       activity_scaleVal: (data.activity_scale != 0) ,
       forward_workVal: (data.forward_work != 0)
     }
   }

   _validationErrors(val) {
     const errMsgs = {
       college_career_readiness_domainsValMsg: val.college_career_readiness_domainsVal ? '' : 'Response required',
       learning_trajectory_discussionValMsg: val.learning_trajectory_discussionVal ? '' : 'Response required',
       activity_inquiry_instituteValMsg: val.activity_inquiry_instituteVal ? '' : 'Response required',
       activity_researchValMsg: val.activity_researchVal ? '' : 'Response required',
       activity_designValMsg: val.activity_designVal ? '' : 'Response required',
       activity_pdsaValMsg: val.activity_pdsaVal ? '' : 'Response required',
       activity_synthesizeValMsg: val.activity_synthesizeVal ? '' : 'Response required',
       activity_scaleValMsg: val.activity_scaleVal ? '' : 'Response required',
       forward_workValMsg: val.forward_workVal ? '' : 'Response required'
     }
     console.log(errMsgs)
     return errMsgs;
   }

   _grabUserInput() {
     return {
       college_career_readiness_domains: this.refs.college_career_readiness_domains.value,
       learning_trajectory_discussion: this.refs.learning_trajectory_discussion.value,
       activity_inquiry_institute: this.refs.activity_inquiry_institute.value,
       activity_research: this.refs.activity_research.value,
       activity_design: this.refs.activity_design.value,
       activity_pdsa: this.refs.activity_pdsa.value,
       activity_synthesize: this.refs.activity_synthesize.value,
       activity_scale: this.refs.activity_scale.value,
       forward_work: this.refs.forward_work.value
     };
   }

  render(){

        let notValidClasses = {};

    if (typeof this.state.college_career_readiness_domainsVal == 'undefined' || this.state.college_career_readiness_domainsVal) {
      notValidClasses.college_career_readiness_domainsCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.college_career_readiness_domainsCls = 'has-error col-md-8';
       notValidClasses.college_career_readiness_domainsValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.learning_trajectory_discussionVal == 'undefined' || this.state.learning_trajectory_discussionVal) {
      notValidClasses.learning_trajectory_discussionCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.learning_trajectory_discussionCls = 'has-error col-md-8';
       notValidClasses.learning_trajectory_discussionValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.activity_inquiry_instituteVal == 'undefined' || this.state.activity_inquiry_instituteVal) {
      notValidClasses.activity_inquiry_instituteCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.activity_inquiry_instituteCls = 'has-error col-md-8';
       notValidClasses.activity_inquiry_instituteValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.activity_researchVal == 'undefined' || this.state.activity_researchVal) {
      notValidClasses.activity_researchCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.activity_researchCls = 'has-error col-md-8';
       notValidClasses.activity_researchValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.activity_designVal == 'undefined' || this.state.activity_designVal) {
      notValidClasses.activity_designCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.activity_designCls = 'has-error col-md-8';
       notValidClasses.activity_designValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.activity_pdsaVal == 'undefined' || this.state.activity_pdsaVal) {
      notValidClasses.activity_pdsaCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.activity_pdsaCls = 'has-error col-md-8';
       notValidClasses.activity_pdsaValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.activity_synthesizeVal == 'undefined' || this.state.activity_synthesizeVal) {
      notValidClasses.activity_synthesizeCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.activity_synthesizeCls = 'has-error col-md-8';
       notValidClasses.activity_synthesizeValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.activity_scaleVal == 'undefined' || this.state.activity_scaleVal) {
      notValidClasses.activity_scaleCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.activity_scaleCls = 'has-error col-md-8';
       notValidClasses.activity_scaleValGrpCls = 'val-err-tooltip';
    }
    if (typeof this.state.forward_workVal == 'undefined' || this.state.forward_workVal) {
      notValidClasses.forward_workCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.forward_workCls = 'has-error col-md-8';
       notValidClasses.forward_workValGrpCls = 'val-err-tooltip';
    }

    return(
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>School Team Engagement in Learning Trajectory</h1>
            </label>
              <div className="row content">
                <div className="col-md-12">
                  <div className="form-style-10">
                    <h1>*Coach Name Here*<span>*School Name*</span></h1>
                    <div className="section"><span>7</span>In general, under which College and Career readiness domain(s) did today's visit fall?</div>
                        <div className="inner-wrap">
                          <div className={notValidClasses.college_career_readiness_domainsCls}>
                            <label>Check all that apply*</label>
                              <input type="checkbox"
                                     className="form-control"
                                     ref="college_career_readiness_domains"
                                     defaultValue={this.state.college_career_readiness_domains}
                                     onBlur={this.validationCheck}
                                     value="Academic Skills" />Academic Skills<br></br>
                              <input type="checkbox"
                                     className="form-control"
                                     ref="college_career_readiness_domains"
                                     defaultValue={this.state.college_career_readiness_domains}
                                     onBlur={this.validationCheck}
                                     value="Academic and personal behaviors" />Academic and personal behaviors<br></br>
                              <input type="checkbox"
                                     className="form-control"
                                     ref="college_career_readiness_domains"
                                     defaultValue={this.state.college_career_readiness_domains}
                                     onBlur={this.validationCheck}
                                     value="Academic programming" />Academic programming<br></br>
                              <input type="checkbox"
                                     className="form-control"
                                     ref="college_career_readiness_domains"
                                     defaultValue={this.state.college_career_readiness_domains}
                                     onBlur={this.validationCheck}
                                     value="College and career access" />College and career access<br></br>
                            <div className={notValidClasses.college_career_readiness_domainsValGrpCls}>{this.state.college_career_readiness_domainsValMsg}</div>
                          </div>
                        </div>

                      <div className="section"><span>8</span>Did this school discuss their Learning Trajectory in this meeting?</div>
                        <div className="inner-wrap">
                          <div className={notValidClasses.learning_trajectory_discussionCls}>
                            <input type="radio"
                                   name="field1"
                                   className="form-control"
                                   ref="learning_trajectory_discussion"
                                   defaultValue={this.state.learning_trajectory_discussion}
                                   onBlur={this.validationCheck}
                                   value="yes" />Yes
                            <input type="radio"
                                   name="field1"
                                   className="form-control"
                                   ref="learning_trajectory_discussion"
                                   defaultValue={this.state.learning_trajectory_discussion}
                                   onBlur={this.validationCheck} value="no" />No
                              <div className={notValidClasses.learning_trajectory_discussionValGrpCls}>{this.state.learning_trajectory_discussionValMsg}</div>
                          </div>
                        </div>

                      <div className="section"><span>9</span>To what extent has this school engaged in the following activities?</div>
                      <div className="inner-wrap">
                        <div className={notValidClasses.interact_in_these_waysCls}>
                          Inquiry Institute<label>Develop a learning trajectory and change idea</label>
                        <select className="form-control"
                                ref="activity_inquiry_institute"
                                onBlur={this.validationCheck}
                                defaultValue={this.state.activity_inquiry_institute} >
                                    <option value="0" >--Select Here--</option>
                                    <option value="Completed" >Completed</option>
                                    <option value="In the process of completing" >In the process of completing</option>
                                    <option value="Have not reached yet" >Have not reached yet</option>
                                  </select>
                                  <div className={notValidClasses.activity_inquiry_instituteValGrpCls}>{this.state.activity_inquiry_instituteValMsg}</div><br></br>
                          Research<label>Gather internal and external research</label>
                        <select className="form-control"
                                ref="activity_research"
                                onBlur={this.validationCheck}
                                defaultValue={this.state.activity_research} >
                                    <option value="0">--Select Here--</option>
                                    <option value="Completed" >Completed</option>
                                    <option value="In the process of completing" >In the process of completing</option>
                                    <option value="Have not reached yet" >Have not reached yet</option>
                                  </select>
                                  <div className={notValidClasses.activity_researchValGrpCls}>{this.state.activity_researchValMsg}</div><br></br>
                          Design<label>Design something small to try</label>
                        <select className="form-control"
                                ref="activity_design"
                                onBlur={this.validationCheck}
                                defaultValue={this.state.activity_design} >
                                    <option value="0">--Select Here--</option>
                                    <option value="Completed">Completed</option>
                                    <option value="In the process of completing">In the process of completing</option>
                                    <option value="Have not reached yet">Have not reached yet</option>
                                  </select>
                                  <div className={notValidClasses.activity_designValGrpCls}>{this.state.activity_designValMsg}</div><br></br>
                          PDSA<label>Engage in PDSA cycles</label>
                        <select className="form-control"
                                ref="activity_pdsa"
                                onBlur={this.validationCheck}
                                defaultValue={this.state.activity_pdsa} >
                                    <option value="0">--Select Here--</option>
                                    <option value="Completed" >Completed</option>
                                    <option value="In the process of completing" >In the process of completing</option>
                                    <option value="Have not reached yet" >Have not reached yet</option>
                                  </select>
                                  <div className={notValidClasses.activity_pdsaValGrpCls}>{this.state.activity_pdsaValMsg}</div><br></br>
                          Synthesize<label>Document and synthesize team learning</label>
                        <select className="form-control"
                                ref="activity_synthesize"
                                onBlur={this.validationCheck}
                                defaultValue={this.state.activity_synthesize} >
                                    <option value="0">--Select Here--</option>
                                    <option value="Completed" >Completed</option>
                                    <option value="In the process of completing" >In the process of completing</option>
                                    <option value="Have not reached yet" >Have not reached yet</option>
                        </select>
                        <div className={notValidClasses.activity_synthesizeValGrpCls}>{this.state.activity_synthesizeValMsg}</div><br></br>
                          Scale<label>Share innovation with wider group</label>
                        <select className="form-control"
                                ref="activity_scale"
                                onBlur={this.validationCheck}
                                defaultValue={this.state.activity_scale} >
                                    <option value="0">--Select Here--</option>
                                    <option value="Completed" >Completed</option>
                                    <option value="In the process of completing" >In the process of completing</option>
                                    <option value="Have not reached yet" >Have not reached yet</option>
                          </select>
                        <div className={notValidClasses.activity_scaleValGrpCls}>{this.state.activity_scaleValMsg}</div>
                      </div>
                    </div>
                    <div className="section"><span>10</span>What particular tools, protocols, readings, data etc. did you use to help move this team's work forward?</div>
                      <div className="inner-wrap">
                        <div className={notValidClasses.interact_in_these_waysCls}>
                          <label>(ex. exemplar review, data dialogue, X/Y matrix, text rendering, empathy interview, 4-3-2-1, etc.)</label><br></br>
                              <textarea type="string"
                                        name="field3"
                                        className="form-control"
                                        ref="forward_work"
                                        defaultValue={this.state.forward_work}
                                        onBlur={this.validationCheck} />
                                <div className={notValidClasses.forward_workValGrpCls}>{this.state.forward_workValMsg}</div>
                        </div>
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

export default Step2;
