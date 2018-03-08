import React from 'react';

class Login extends React.Component{

  render(){
    return(
      <form>
        <h1>Login Portal:</h1>
      <ul class="form-style-1">
          <li>
              <label>Email <span class="required">*</span></label>
              <input type="email" name="field3" class="field-long" />
          </li>
          <li>
              <label>Password <span class="required">*</span></label>
              <input type="email" name="field3" class="field-long" />
          </li>
          <li>
              <label>Type of visit:</label>
              <select name="field4" class="field-select">
                <option value="">Select here</option>
                <option value="coach visit">Coach Visit</option>
                <option value="intervisitation">Intervisitation</option>
              </select>
          </li>
          <li>
            <div className="button-section">
             <a href="/dashboard"><input type="submit" value="Login" /></a>
            </div>
          </li>
      </ul>
      </form>
    )
  }
}

export default Login;
