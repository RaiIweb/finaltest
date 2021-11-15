import React from "react";
import "./index.css";
import { handleUserLogin } from "../../actions/authAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("form submit");

    try {
      dispatch(handleUserLogin(e.target.email.value, e.target.password.value));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="loginwrapper">
      <h2>Login </h2>

      <form onSubmit={handleSubmit} method="post">
        <div className="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label for="email">
            <b>Email</b>
          </label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            minlength="8"
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox"  name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <Link className="bottomlinks" to="/signup">Sign up</Link>
          
        </div>
      </form>
    </div>
  );
}

export default Login;
