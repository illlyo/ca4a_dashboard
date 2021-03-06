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
                        <div className="review-intro-card">
                          <div className="review-intro-card-header">
                            <h4 className="intro-card-headers">Coach:</h4> <p>{this.props.getStore().coach_name}</p>
                            <h4 className="intro-card-headers" style={{"float":"right"}}>Date of visit: <span className="review-response">{this.props.getStore().date_of_visit}</span></h4>
                              </div>
                              <div style={{"padding":10}}>
                                <h3 className="review-header-question" style={{"display":"inline-block"}} >School: </h3><span className="review-response"> {this.props.getStore().school_visited}</span>
                                <h3 className="review-header-question">What were the objectives of today's visit?</h3>
                                <span className="review-response">{this.props.getStore().objectives_of_visit}</span>


                            <div className="related-content">
                              <h3 className="intro-card-headers">Length of visit: <span className="review-response">{this.props.getStore().length_of_visit} minutes</span> </h3>
                              <h3 className="intro-card-headers" style={{"float":"right"}}>Was today's meeting cancelled?: <span className="review-response" >{this.props.getStore().cancelled}</span></h3>
                            </div>
                            </div>
                        </div>

                      <div className="review-div">
                        <div className="review-div-border-right">
                        <h3 className="review-header-question">During today's visit I interacted with my school in the following ways:</h3>
                          <div className="review-response">
                          Facilitated meeting with team:{(this.props.getStore().interact_meeting_with_team == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Observed Practice:{(this.props.getStore().interact_observed_practice == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Checked in with leadership:{(this.props.getStore().interact_with_leadership == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Checked in with Team Lead:{(this.props.getStore().interact_with_team_lead == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Facilitated a PD:{(this.props.getStore().interact_with_pd == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Other:{(this.props.getStore().interact_with_other == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Other explained:{this.props.getStore().interact_other_explained}<br></br>
                        </div>
                        </div>
                        <div>
                          <h3 className="review-header-question">Thinking about today's visit, how many of each role did you interact with?</h3>
                            <div className="review-response">
                            Teachers:{this.props.getStore().interact_teachers}<br></br>
                            Guidance Counselors:{this.props.getStore().interact_guidance_counselors}<br></br>
                            College Counselors:{this.props.getStore().interact_college_couselors}<br></br>
                            Assitant Principals:{this.props.getStore().interact_assistant_principals}<br></br>
                            Principals:{this.props.getStore().interact_principals}<br></br>
                            Other:{this.props.getStore().interact_other}<br></br>
                          </div>
                        </div>
                    </div>

                    <h3 className="review-header-question">Next steps or notes from this visit:</h3>
                      <div className="review-response">{this.props.getStore().next_step_notes}</div>

                      <div className="review-div">
                        <div className="review-div-border-right">
                        <h3 className="review-header-question">In general, under which College and Career readiness domain(s) did today's visit fall?</h3>
                          <div className="review-response">
                          Academic Skills:{(this.props.getStore().academic_skills == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Academic Personal Behavior:{(this.props.getStore().academic_personal_behavior == 1) ? <span>&#10003;</span> : ''}<br></br>
                          Academic Programming:{(this.props.getStore().academic_programming == 1) ? <span>&#10003;</span> : ''}<br></br>
                          College Career Access:{(this.props.getStore().college_career_access == 1) ? <span>&#10003;</span> : ''}<br></br>
                      </div>
                      </div>

                      <div>
                      <h3 className="review-header-question">Did this school discuss their Learning Trajectory in this meeting?</h3>
                        <div className="review-response">{this.props.getStore().learning_trajectory_discussion}</div>
                      </div>
                    </div>

                    <div className="review-div">
                      <div>
                      <h3 className="review-header-question">To what extent has this school engaged in the following activities?</h3>
                        <div className="review-response">
                        Inquiry Institute: {this.props.getStore().activity_inquiry_institute}<br></br>
                        Research: {this.props.getStore().activity_research}<br></br>
                        Design: {this.props.getStore().activity_design}<br></br>
                        PDSA: {this.props.getStore().activity_pdsa}<br></br>
                        Synthesize: {this.props.getStore().activity_synthesize}<br></br>
                        Scale: {this.props.getStore().activity_scale}<br></br>
                      </div>
                      </div>
                      </div>

                    <div className="review-div">
                      <div>
                        <h3 className="review-header-question">What particular tools, protocols, readings, data etc. did you use to help move this team's work forward?</h3>
                        <div className="review-response">{this.props.getStore().forward_work}</div>
                        </div>
                      </div>


                    <div className="review-div" style={{"boxShadow":"none"}}>
                      <div style={{"width":"50%"}}>

                      <h3 className="review-header-question">Were the goal(s) for today's visit met?</h3>
                        <div className="review-response">
                          {(this.props.getStore().goals_met == 1) ? <span>Goals were not defined</span> : ''}
                          {(this.props.getStore().goals_met == 2) ? <span>Goals were not at all met</span> : ''}
                          {(this.props.getStore().goals_met == 3) ? <span>Goals were somewhat met</span> : ''}
                          {(this.props.getStore().goals_met == 4) ? <span>Goals were sufficiently met</span> : ''}
                          {(this.props.getStore().goals_met == 5) ? <span>Goals were exceeded</span> : ''}
                        </div>
                      </div>

                      <div style={{"width":"50%"}}>
                        <h3 className="review-header-question">Rate this school's overall progress on their Learning Trajectory since your last visit.</h3>
                          <div className="review-response">
                            {(this.props.getStore().rate_learning_trajectory == 1) ? <span>N/A</span> : ''}
                            {(this.props.getStore().rate_learning_trajectory == 2) ? <span>No progress</span> : ''}
                            {(this.props.getStore().rate_learning_trajectory == 3) ? <span>A little</span> : ''}
                            {(this.props.getStore().rate_learning_trajectory == 4) ? <span>Some</span> : ''}
                            {(this.props.getStore().rate_learning_trajectory == 5) ? <span>Substantial</span> : ''}
                          </div>
                        </div>
                    </div>
                    <div className="review-div">
                    <div className="review-response" style={{"display":"block"}}>
                      {this.props.getStore().rate_learning_trajectory_explained}<br></br>
                    </div>
                  </div>



                    <div className="review-div">
                      <div>
                        <h3 className="review-header-question">What successes/challenges are you experiencing in moving this team through their Learning Trajectory?</h3>
                        <div className="review-response">{this.props.getStore().learning_trajectory_success_challenge}</div>
                      </div>
                    </div>

                    <div className="review-div">
                      <div>
                        <h3 className="review-header-question">What are the "in-between" steps you can take before your next meeting to move this team's work forward?</h3>
                        <div className="review-response">{this.props.getStore().in_between_steps}</div>
                        </div>
                    </div>

                    <div className="review-div">
                      <div>
                        <h3 className="review-header-question">Where do you see the team going in their Learning Trajectory in your next meeting?</h3>
                          <div className="review-response">
                            Inquiry Institute: {(this.props.getStore().inquiry_institute == 1) ? <span>&#10003;</span> : ''}<br></br>
                            Research: {(this.props.getStore().research == 1) ? <span>&#10003;</span> : ''}<br></br>
                            Design: {(this.props.getStore().design == 1) ? <span>&#10003;</span> : ''}<br></br>
                            PDSA: {(this.props.getStore().pdsa == 1) ? <span>&#10003;</span> : ''}<br></br>
                            Synthesize: {(this.props.getStore().synthesize == 1) ? <span>&#10003;</span> : ''}<br></br>
                            Scale: {(this.props.getStore().scale == 1) ? <span>&#10003;</span> : ''}<br></br>
                          </div>
                      </div>
                    </div>

                    <div className="review-div">
                      <div>
                        <h3 className="review-header-question">What's something you would like to bring to supervision or lab?</h3>
                        <div className="review-response">{this.props.getStore().supervision_lab_to_bring}</div>
                      </div>
                    </div>

                    <div className="review-div">
                      <div>
                      <h3 className="review-header-question">Would you like to highlight any work this school is doing around the College and Career Planning Calendar this month?</h3>
                        <div className="review-response">
                        {this.props.getStore().highlight_planning}<br></br><br></br>
                        {this.props.getStore().highlight_planning_explained}
                      </div>
                    </div>
                    </div>

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
