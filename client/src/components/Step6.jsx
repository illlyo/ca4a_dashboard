'use strict';

import React from 'react';

const Step6 = (props) => (
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>Highlighting this School's work</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                  <div className="section"><span>19</span>What would you like to highlight related to the College and Career Planning Calendar and this school's work?</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(4)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(6)} />
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

export default Step6;
