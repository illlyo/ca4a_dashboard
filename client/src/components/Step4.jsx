'use strict';

import React from 'react';

const Step4 = (props) => (
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>Thinking Ahead</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                  <div className="section"><span>14</span>What successes/challenges are you experiencing in moving this team through their Learning Trajectory?</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>15</span>What are the "in-between" steps you can take before your next meeting to move this team's work forward?</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>

                    <div className="section"><span>16</span>Where do you see the team going in their Learning Trajectory in your next meeting?</div>
                    <div className="inner-wrap">
                            <label>Check all that apply*</label>
                              <input type="checkbox" />Inquiry Institute - (Develop a learning trajectory and change idea)<br></br>
                              <input type="checkbox" />Research - (Gather internal and external research)<br></br>
                              <input type="checkbox" />Design - (Design something small to try)<br></br>
                              <input type="checkbox" />PDSA - (Energize in PDSA cycles)<br></br>
                              <input type="checkbox" />Synthesize - (Document and synthesize team learning)<br></br>
                              <input type="checkbox" />Scale - (Share innovation with wider group)<br></br>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(2)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(4)} />
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
)

export default Step4;
