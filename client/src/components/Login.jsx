import React from 'react';

class Login extends React.Component{

  render(){
    return(
    <form>
      <h1>Login Portal:</h1>
      <label>
        Username:
        <input type="text" placeholder="Enter Username" name="uname" required />
      </label>
      <label>
        Password:
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
      </label>
    </form>
    )
  }
}

export default Login;
