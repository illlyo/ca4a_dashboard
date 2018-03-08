'use strict'

import React from 'react';

const Step1 = (props) => (

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
                            <label>Select Date:<br></br><input type="date" name="field1" /></label>
                        </div>
                        <div className="section"><span>2</span>How long was your visit?</div>
                        <div className="inner-wrap">
                            <label><input type="string" name="field3" /><br></br>(ex. 1 hour 30 minutes)</label>
                        </div>

                        <div className="section"><span>3</span>What were the objectives of today's visit?</div>
                            <div className="inner-wrap">
                            <label><textarea type="string" name="field5" rows="4" cols="100" /><br></br>(ex. to share internal data and discuss observations, to design something small to try, to reflect on the team's first try etc.)</label>
                        </div>

                        <div className="section"><span>4</span>During today's visit I interacted with my school in the following ways </div>
                            <div className="inner-wrap">
                              <label><i>(select all that apply)*</i></label><br></br>
                                <input type="checkbox" />Facilitated meeting with team<br></br>
                                <input type="checkbox" />Observed Practice<br></br>
                                <input type="checkbox" />Checked in with leadership<br></br>
                                <input type="checkbox" />Checked in with Team Lead<br></br>
                                <input type="checkbox" />Facilitated a PD<br></br>
                                <input type="checkbox" />Other: <input type="string" /><br></br>

                            </div>

                        <div className="section"><span>5</span>Thinking about today's visit, how many of each role did you interact with?</div>
                        <div className="inner-wrap">
                            <label></label>
                                    Teachers
                                    <select>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5 or more</option>
                                    </select><br></br>
                            Guidance Counselors
                                    <select>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5 or more</option>
                                    </select><br></br>
                            College Counselors
                                    <select>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5 or more</option>
                                    </select><br></br>
                            Assistant Principals
                                    <select>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5 or more</option>
                                    </select><br></br>
                            Principals
                                    <select>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5 or more</option>
                                    </select><br></br>
                            Other
                                    <select>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5 or more</option>
                                    </select><br></br>

                        </div>

                        <div className="section"><span>6</span>(For your notes) - Feel free to include any next steps or notes from this visit
                        <div className="inner-wrap">
                            <label> <textarea type="string" name="field3" /></label>
                        </div>

                        <div className="button-section">
                         <input type="submit" value="Next" onClick={() => props.jumpToStep(1)} />
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

export default Step1;
