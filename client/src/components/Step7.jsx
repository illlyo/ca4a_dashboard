'use strict';

import React from 'react';

const Step7 = (props) => (
    <div className="step step2">
      <div className="row">
        <form id="Form" className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12 control-label">
              <h1>Pre-Visit Preparation</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                  <div className="section"><span>1</span>Date of visit</div>
                  <div className="inner-wrap">
                      <label>Select Date:<br></br><input type="date" name="field1" /></label>
                  </div>
                  <div className="section"><span>2</span>Who did you visit?</div>
                    <div className="inner-wrap">
                          <select>
                            <option >--Select Here--</option>
                            <option>Aaron Boyle</option>
                            <option>Alicia Wolcott</option>
                          </select>
                  </div>
                  <div className="section"><span>3</span>Which school did you visit?</div>
                    <div className="inner-wrap">
                          <select>
                            <option >--Select Here--</option>
                            <option>school 1</option>
                            <option>school 2</option>
                          </select>
                  </div>
                    <div className="section"><span>3</span>The facilitating coach asked me to look for/give feedback on...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>4</span>I entered this visit hoping to learn more about...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(5)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(7)} />
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

export default Step7;
