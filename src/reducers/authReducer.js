import { USER_LOGIN, USER_LOGOUT } from "../actions";

let loggedin = async function() {
    let login = await fetch('https://gameback-end.herokuapp.com', {
        method: 'GET',
        credentials: 'include',
      })

      let result = await login.json();

      return result.login
}

loggedin().then((val) => console.log(val)  )

const INITIAL_STATE = { userLoggedIn: false }

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                userLoggedIn: true,

            }
        }
        case USER_LOGOUT: {
            return INITIAL_STATE;
        }
        
        default: {
            return state;
        }
    }

}



export default authReducer;