import React from "react";
import './index.css';

function Signup() {

  
  async function handleSignup(e) {
    e.preventDefault()
    

    let formValues = {
      email : e.target.email.value,
      password : e.target.password.value
    }

    try {

      let login = await fetch('https://gameback-end.herokuapp.com/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formValues)
      })

      let result = await login.json();

      console.log(result)


    } catch(e) {
      console.log(e);
    }
  }
  
  

  

  return (
    <div className="loginwrapper">
      <h2>Signup Form</h2>

      <form onSubmit={handleSignup} method="post">
        <div className="imgcontainer">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button type="submit">Signup</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
             <a href="#">Sign up</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
