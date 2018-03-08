'use strict';

import React from 'react';

const Step3 = (props) => (
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>Goals, Preparation and Progress</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                  <div className="section"><span>11</span>Were the goal(s) for today's visit met?</div>
                    <div className="inner-wrap">
                      <input type="range" min="0" max="100" list="number" />
                      <datalist id="number">
                        <option>10</option>
                        <option label="30">30</option>
                        <option>50</option>
                        <option>70</option>
                        <option>90</option>
                      </datalist>
                    </div>
                    <div className="section"><span>12</span>Rate this school's overall progress on their Learning Trajectory since your last visit.</div>
                    <div className="inner-wrap">
                        <label></label><input type="radio" name="field3" />Substantial
                        <label></label><input type="radio" name="field3" />Some
                        <label></label><input type="radio" name="field3" />A little
                        <label></label><input type="radio" name="field3" />No progress
                        <label></label><input type="radio" name="field3" />N/A
                    </div>

                    <div className="section"><span>13</span>Explain your answer to the progress question above.</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(1)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(3)} />
                    </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12 eg-jump-lnk">
                <a href="#" onClick={() => props.jumpToStep(0)}>e.g. showing how we use the jumpToStep method helper method to jump back to step 1</a>
              </div>
            </div>
        </form>
        </div>
      </div>
)

export default Step3;
