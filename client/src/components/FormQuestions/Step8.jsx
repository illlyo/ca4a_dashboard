'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import Joi from 'joi';

class Step8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailEmergency: props.getStore().emailEmergency
    };

    this.validatorTypes = {
      emailEmergency: Joi.string().email().required()
    };

    this.getValidatorData = this.getValidatorData.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  isValidated() {
    return new Promise((resolve, reject) => {
      this.props.validate((error) => {
        if (error) {
          reject(); // form contains errors
          return;
        }

        if (this.props.getStore().emailEmergency != this.getValidatorData().emailEmergency) { // only update store of something changed
          this.props.updateStore({
            ...this.getValidatorData(),
            savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
        }

        resolve(); // form is valid, fire action
      });
    });
  }

  getValidatorData() {
    return {
      emailEmergency: this.refs.emailEmergency.value,
    }
  };

  onChange(e) {
      let newState = {};
      newState[e.target.name] = e.target.value;
      this.setState(newState);
  }

  renderHelpText(message, id) {
      return (<div className="val-err-tooltip" key={id}><span>{message}</span></div>);
  };

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};
    notValidClasses.emailEmergencyCls = this.props.isValid('emailEmergency') ?
        'no-error col-md-8' : 'has-error col-md-8';

    return (
        <div className="step step4">
            <div className="row">
                <form id="Form" className="form-horizontal">
                  <div className="form-group">
                    <label className="control-label col-md-12 ">
                        <h1>Step 8: Form Validation using "react-validation-mixin" Example</h1>
                    </label>
                  </div>



                  <div className="form-style-10">
                  <h1>*Coach Name Here*<span>*School Name*</span></h1>
                  <form>
                    <div className="form-group col-md-12 content form-block-holder">
                      <label className="control-label col-md-4">
                          Your Emergency Email Address
                      </label>
                      <div className={notValidClasses.emailEmergencyCls}>
                          <input
                              ref="emailEmergency"
                              name="emailEmergency"
                              autoComplete="off"
                              type="email"
                              className="form-control"
                              placeholder="john.smith@example.com"
                              required
                              defaultValue={this.state.emailEmergency}
                              onBlur={this.props.handleValidation('emailEmergency')}
                              onChange={this.onChange.bind(this)}
                          />

                          {this.props.getValidationMessages('emailEmergency').map(this.renderHelpText)}
                      </div>
                    </div>
                      <div className="button-section">
                       <input type="submit" value="Back" onClick={() => this.props.jumpToStep(6)} />
                       <input type="submit" value="Next" onClick={() => this.props.jumpToStep(8)} />
                      </div>
                      </form>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

Step8.propTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,
  getStore: PropTypes.func,
  updateStore: PropTypes.func
};

export default validation(strategy)(Step8);
