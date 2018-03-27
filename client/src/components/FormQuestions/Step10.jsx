'use strict';

import React, { Component } from 'react';
import Results from '../Results.jsx'


export default class Step10 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedToCloud: props.getStore().savedToCloud,
    };
  }



  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step step6">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                {
                  (this.state.savedToCloud)
                  ?
                    <div>
                        <Results />
                      </div>
                    :
                      <h1>You have updated data, go <a onClick={() => {this.props.jumpToStep(10)}}>back</a> and Save again!</h1>
                  }
                </label>
                </div>
            </form>
          </div>
        </div>
      )
    }
  }
