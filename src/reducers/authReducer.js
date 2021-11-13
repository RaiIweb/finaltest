import { USER_LOGIN_TRUE, USER_LOGOUT, USER_LOGIN_FALSE } from "../actions";



const INITIAL_STATE = { userLoggedIn: null }

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_TRUE: {
            return {
                ...state,
                userLoggedIn: true,

            }
        }
        case USER_LOGIN_FALSE: {
            return {
                ...state,
                userLoggedIn: false,

            }
        }
        case USER_LOGOUT: {
            return {
                ...state,
                userLoggedIn: false,

            }
        }
        
        default: {
            return state;
        }
    }

}



export default authReducer;