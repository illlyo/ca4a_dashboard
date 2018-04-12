'use strict';

import React, { Component } from 'react';
import Promise from 'promise';

export default class Step8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false
    };

    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // This review screen had the 'Save' button, on clicking this is called
  isValidated() {
    // typically this method needs to return true or false (to indicate if the local forms are validated, so StepZilla can move to the next step),
    // but in this example we simulate an ajax request which is async. In the case of async validation or server saving etc. return a Promise and StepZilla will wait
    // ... for the resolve() to work out if we can move to the next step
    // So here are the rules:
    // ~~~~~~~~~~~~~~~~~~~~~~~~
    // SYNC action (e.g. local JS form validation).. if you return:
    // true/undefined: validation has passed. Move to next step.
    // false: validation failed. Stay on current step
    // ~~~~~~~~~~~~~~~~~~~~~~~~
    // ASYNC return (server side validation or saving data to server etc).. you need to return a Promise which can resolve like so:
    // resolve(): validation/save has passed. Move to next step.
    // reject(): validation/save failed. Stay on current step

    this.setState({
      saving: true
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          saving: true
        });

        this.props.updateStore({savedToCloud: true});  // Update store here (this is just an example, in reality you will do it via redux or flux)

        // call resolve() to indicate that server validation or other aync method was a success.
        // ... only then will it move to the next step. reject() will indicate a fail
        resolve();
        // reject(); // or reject
      }, 2000);
    });
  }

  jumpToStep(toStep) {
    // We can explicitly move to a step (we -1 as its a zero based index)
    this.props.jumpToStep(toStep-1); // The StepZilla library injects this jumpToStep utility into each component
  }

  render() {
    const savingCls = this.state.saving ? 'saving col-md-12 show' : 'saving col-md-12 hide';

    return (
      <div className="step step5 review">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>Review your Log and 'Save'</h1>
              </label>
            </div>
            <div className="form-group">
              <div className="col-md-12 control-label">
                <div className="col-md-12 txt">
                </div>
                <div className="col-md-12 txt">
                  <div className="col-md-4">
                    <div className="form-style-10">
                      <div className="review-text">
                    <h3>Which school did you visit today?</h3>
                      {this.props.getStore().school_visited}<br></br>
                    <h3>Date of visit</h3>
                      {this.props.getStore().date_of_visit}<br></br>
                    <h3>Was today's meeting cancelled?</h3>
                      {this.props.getStore().cancelled}<br></br>
                    <h3>How long was your visit?</h3>
                      {this.props.getStore().length_of_visit} minutes<br></br>
                    <h3>What were the objectives of today's visit?</h3>
                      {this.props.getStore().objectives_of_visit}<br></br>
                    <h3>During today's visit I interacted with my school in the following ways:</h3>
                      interact_meeting_with_team:{this.props.getStore().interact_meeting_with_team}<br></br>
                      interact_meeting_with_team:{this.props.getStore().interact_meeting_with_team}<br></br>
                      interact_with_leadership:{this.props.getStore().interact_with_leadership}<br></br>
                      interact_with_team_lead:{this.props.getStore().interact_with_team_lead}<br></br>
                      interact_with_pd:{this.props.getStore().interact_with_pd}<br></br>
                      interact_with_other:{this.props.getStore().interact_with_other}<br></br>
                      interact_other_explained:{this.props.getStore().interact_other_explained}<br></br>
                    <h3>Thinking about today's visit, how many of each role did you interact with?</h3>
                      Teachers:{this.props.getStore().interact_teachers}<br></br>
                      Guidance Counselors:{this.props.getStore().interact_guidance_counselors}<br></br>
                      College Counselors:{this.props.getStore().interact_college_couselors}<br></br>
                      Assitant Principals:{this.props.getStore().interact_assistant_principals}<br></br>
                      Principals:{this.props.getStore().interact_principals}<br></br>
                      Other:{this.props.getStore().interact_other}<br></br>
                    <h3>Next steps or notes from this visit:</h3>
                      {this.props.getStore().next_step_notes}<br></br>
                    <h3>In general, under which College and Career readiness domain(s) did today's visit fall?</h3>
                      Academic Skills:{this.props.getStore().academic_skills}<br></br>
                      Academic Personal Behavior:{this.props.getStore().academic_personal_behavior}<br></br>
                      Academic Programming:{this.props.getStore().academic_programming}<br></br>
                      College Career Access:{this.props.getStore().college_career_access}<br></br>
                    ? : {this.props.getStore().college_career_readiness_domains}<br></br>
                    <h3>Did this school discuss their Learning Trajectory in this meeting?</h3>
                      {this.props.getStore().learning_trajectory_discussion}<br></br>
                    <h3>To what extent has this school engaged in the following activities?</h3>
                      Inquiry Institute: {this.props.getStore().activity_inquiry_institute}<br></br>
                      Research: {this.props.getStore().activity_research}<br></br>
                      Design: {this.props.getStore().activity_design}<br></br>
                      PDSA: {this.props.getStore().activity_pdsa}<br></br>
                      Synthesize: {this.props.getStore().activity_synthesize}<br></br>
                      Scale: {this.props.getStore().activity_scale}<br></br>
                    <h3>What particular tools, protocols, readings, data etc. did you use to help move this team's work forward?</h3>
                      {this.props.getStore().forward_work}<br></br>
                    <h3>Were the goal(s) for today's visit met?</h3>
                      {this.props.getStore().goals_met}<br></br>
                    <h3>Rate this school's overall progress on their Learning Trajectory since your last visit.</h3>
                      {this.props.getStore().rate_learning_trajectory}<br></br>
                      {this.props.getStore().rate_learning_trajectory_explained}<br></br>
                    <h3>What successes/challenges are you experiencing in moving this team through their Learning Trajectory?</h3>
                      {this.props.getStore().learning_trajectory_success_challenge}<br></br>
                    <h3>What are the "in-between" steps you can take before your next meeting to move this team's work forward?</h3>
                      {this.props.getStore().in_between_steps}<br></br>
                    <h3>Where do you see the team going in their Learning Trajectory in your next meeting?</h3>
                      Inquiry Institute: {this.props.getStore().inquiry_institute}<br></br>
                      Research: {this.props.getStore().research}<br></br>
                      Design: {this.props.getStore().design}<br></br>
                      PDSA: {this.props.getStore().pdsa}<br></br>
                      Synthesize: {this.props.getStore().synthesize}<br></br>
                      Scale: {this.props.getStore().scale}<br></br>
                      ? : {this.props.getStore().learning_trajectory_next_meeting}<br></br>
                    <h3>What's something you would like to bring to supervision or lab?</h3>
                      {this.props.getStore().supervision_lab_to_bring}<br></br>
                    <h3>Would you like to highlight any work this school is doing around the College and Career Planning Calendar this month?</h3>
                      {this.props.getStore().highlight_planning}<br></br>
                      {this.props.getStore().highlight_planning_explained}
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
