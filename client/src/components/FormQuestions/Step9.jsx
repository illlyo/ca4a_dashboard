'use strict';

import React, { Component } from 'react';

class Step9 extends Component{

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
              <h1>Based on this feedback dialogue...</h1>
            </label>
            <div className="row content">
              <div className="col-md-12">
                <div className="form-style-10">
                <h1>*Coach Name Here*<span>*School Name*</span></h1>
                <form>
                    <div className="section"><span>7</span>I'm thinking about...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>8</span>Something I plan to tryout is...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="section"><span>9</span>One thing we want to share with the whole team is...</div>
                    <div className="inner-wrap">
                        <label><textarea type="string" name="field3" /></label>
                    </div>
                    <div className="button-section">
                     <input type="submit" value="Back" onClick={() => this.props.jumpToStep(7)} />
                     <input type="submit" value="Next" onClick={() => this.props.jumpToStep(9)} />
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </form>
        </div>
      </div>
    )}}


export default Step9;
