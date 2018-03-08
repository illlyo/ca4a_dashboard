'use strict';

import React from 'react';

const Step5 = (props) => (
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>Thinking Ahead Continued</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                  <div className="section"><span>17</span>What's something you would like to bring to supervision or lab?</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>18</span>Would you like to highlight any work this school is doing around the College and Career Planning Calendar this month?</div>
                      <div className="inner-wrap">
                          <label></label><input type="radio" name="field1" />Yes
                          <label></label><input type="radio" name="field1" />No
                      </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(3)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(5)} />
                    </div>
                </form>
                </div>
              </div>
              <div className="col-md-12 eg-jump-lnk">
                <a href="#" onClick={() => props.jumpToStep(0)}>e.g. showing how we use the jumpToStep method helper method to jump back to step 1</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
)

export default Step5;
