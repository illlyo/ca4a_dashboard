'use strict';

import React from 'react';

const Step2 = (props) => (

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
                <form>
                  <div className="section"><span>7</span>In general, under which College and Career readiness domain(s) did today's visit fall?</div>
                      <div className="inner-wrap">
                        <label>Check all that apply*</label>
                          <input type="checkbox" />Academic Skills<br></br>
                          <input type="checkbox" />Academic and personal behaviors<br></br>
                          <input type="checkbox" />Academic programming<br></br>
                          <input type="checkbox" />College and career access<br></br>
                      </div>
                    <div className="section"><span>8</span>Did this school discuss their Learning Trajectory in this meeting?</div>
                    <div className="inner-wrap">
                        <label></label><input type="radio" name="field1" />Yes
                        <label></label><input type="radio" name="field1" />No
                    </div>
                    <div className="section"><span>9</span>To what extent has this school engaged in the following activities?</div>
                    <div className="inner-wrap">
                        <label></label>
                        Inquiry Institute - (Develop a learning trajectory and change idea)<br></br>
                                <select required>
                                  <option >--Select Here--</option>
                                  <option>Completed</option>
                                  <option>In the process of completing</option>
                                  <option>Have not reached yet</option>
                                </select>
                      <br></br>
                        Research - (Gather internal and external research)<br></br>
                                <select>
                                  <option >--Select Here--</option>
                                  <option>Completed</option>
                                  <option>In the process of completing</option>
                                  <option>Have not reached yet</option>
                                </select>
                      <br></br>
                        Design - (Design something small to try)<br></br>
                                <select>
                                  <option >--Select Here--</option>
                                  <option>Completed</option>
                                  <option>In the process of completing</option>
                                  <option>Have not reached yet</option>
                                </select>
                      <br></br>
                        PDSA - (Engage in PDSA cycles)<br></br>
                                <select>
                                  <option >--Select Here--</option>
                                  <option>Completed</option>
                                  <option>In the process of completing</option>
                                  <option>Have not reached yet</option>
                                </select>
                      <br></br>
                        Synthesize - (Document and synthesize team learning)<br></br>
                                <select>
                                  <option >--Select Here--</option>
                                  <option>Completed</option>
                                  <option>In the process of completing</option>
                                  <option>Have not reached yet</option>
                                </select>
                      <br></br>
                        Scale - (Share innovation with wider group)<br></br>
                                <select>
                                  <option >--Select Here--</option>
                                  <option>Completed</option>
                                  <option>In the process of completing</option>
                                  <option>Have not reached yet</option>
                                </select>
                      <br></br>
                    </div>
                    <div className="section"><span>10</span>What particular tools, protocols, readings, data etc. did you use to help mve this team's work forward?</div>
                    <div className="inner-wrap">
                        <label>(ex. exemplar review, data dialogue, X/Y matrix, text rendering, empathy interview, 4-3-2-1, etc.) <br></br><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => props.jumpToStep(0)} />
                     <input type="submit" value="Next" onClick={() => props.jumpToStep(2)} />
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

export default Step2;
