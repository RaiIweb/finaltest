import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./components/Game";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const loginState = useSelector((state) => state.authState.userLoggedIn)

  const dispatch = useDispatch()

  useEffect(() => {
    let checkLogin = async function () {
      let checkLogin = await fetch("https://gameback-end.herokuapp.com", {
        method: "GET",
        credentials: "include",
      })

      let result = await checkLogin.json()

      console.log(result)
      if(result.login) {
        
        dispatch({ type: 'USER_LOGIN_TRUE'})
      } else {
        dispatch({ type: 'USER_LOGIN_FALSE'})
      }
    }

    checkLogin()
  }, [])

  return (
    <div>
      {
        loginState !== null &&

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route exact path="/" element={loginState ? <Game /> : <Login />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
