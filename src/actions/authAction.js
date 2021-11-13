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


export const handleUserLogin = (loggedIn) => {
    return async (dispatch) => {
        try {

            console.log(loggedIn);
            loggedIn && dispatch(userLogin()) 
            
        } catch (e) {
            //localStorage.removeItem(authToken);
            //onFail()
        }

    }
}

export const handleUserLogout = ({ onFail = () => { }, onSuccess = () => { } }) => async (dispatch) => {

    try {
        
        dispatch(userLogout())
        
    } catch (e) {
        dispatch(userLogout())
    }
}


