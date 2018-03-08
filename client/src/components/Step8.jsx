'use strict';

import React from 'react';

const Step8 = (props) => (
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>Post-Visit Reflection and Feedback</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                    <div className="section"><span>5</span>Areas of Strength: What were the best parts of this visit?</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>6</span>Areas for Growth: What are some specific suggestions for development?</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(6)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(8)} />
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

export default Step8;
