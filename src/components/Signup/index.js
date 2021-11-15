import React  from "react";
import './index.css';
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Signup() {

  let history = useNavigate()

  async function handleSignup(e) {
    e.preventDefault()
    

    let formValues = {
      email : e.target.email.value,
      password : e.target.password.value
    }

    try {

      let signup = await fetch('https://gameback-end.herokuapp.com/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formValues)
      })

      let result = await signup.json();

      console.log(result)

      
      alert(result.status)
      if(result.status === 'success') {

        history("/")
      }


    } catch(e) {
      console.log(e);
    }
  }
  
  

  
  
  return(
    <div className="loginwrapper">
      <h2>Signup </h2>

      <form onSubmit={handleSignup} method="post">
        <div className="imgcontainer">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            minlength="8"
            required
          />

          <button type="submit">Signup</button>

        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
         
             <Link className="bottomlinks" to="/">Login</Link>
        </div>
      </form>
    </div>
  )
   
}

export default Signup;
