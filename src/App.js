import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "../src/Components/Dashboard";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

import "./App.css";
import { useDispatch } from "react-redux";

function App() {
  const test = useSelector((state) => state.authState.userLoggedIn)

  const dispatch = useDispatch()

  useEffect(() => {
    let loggedin = async function () {
      let login = await fetch("https://gameback-end.herokuapp.com", {
        method: "GET",
        credentials: "include",
      })

      console.log('in app')
      let result = await login.json()

      console.log(result)
      if(result.login) {

        dispatch({ type: 'USER_LOGIN'})
      }
    }

    loggedin()
  }, [])

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/game" element={<Game />}></Route>
          <Route exact path="/" element={test ? <Game /> : <Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
