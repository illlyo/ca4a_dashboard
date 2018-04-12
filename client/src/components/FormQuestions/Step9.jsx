'use strict';

import React, { Component } from 'react';
import Results from '../Results.jsx'


export default class Step9 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school_visited: props.getStore().school_visited,
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
                        <Results schoolVisited={this.state.school_visited} />
                      </div>
                    :
                      <h1>You have updated data, go <a onClick={() => {this.props.jumpToStep(8)}}>back</a> and Save again!</h1>
                  }
                </label>
                </div>
            </form>
          </div>
        </div>
      )
    }
  }
