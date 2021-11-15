import {  USER_LOGIN_TRUE, USER_LOGOUT  } from "./types"

export const userLogin = () => {
    return {
        type: USER_LOGIN_TRUE,
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}


export const handleUserLogin = (email,password) => {
    return async (dispatch) => {
        try {

            let formValues = {
                email ,
                password
              }

            let login = await fetch('https://gameback-end.herokuapp.com/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formValues)
              })
        
              let result = await login.json();
        
              console.log(result)

              if(result.login) {
                dispatch(userLogin()) 
              }
              
            
        } catch (e) {
            //localStorage.removeItem(authToken);
            //onFail()
        }

    }
}

export const handleUserLogout = () => async (dispatch) => {

    try {
        await fetch("https://gameback-end.herokuapp.com/logout", {
            method: "POST",
            credentials: "include",
            })
        
        dispatch(userLogout())
        
        
        
    } catch (e) {
        dispatch(userLogout())
    }
}


