'use strict';

import React, { Component } from 'react';

class Step1 extends Component{

  constructor(props){
    super(props);
    this.state = {}
  }

    componentDidMount() {}

    componentWillUnmount() {}

    render(){
      return(

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
                    <div className="section"><span>4</span>The facilitating coach asked me to look for/give feedback on...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>5</span>I entered this visit hoping to learn more about...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </form>
        </div>
      </div>
)}}

export default Step1;
