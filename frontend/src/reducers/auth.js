import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, LOADUSERINSUBB } from '../actions/types'
const inittialstate={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    user:null,
    isRegistered:false

}

export default function(state=inittialstate,action){
    switch (action.type) {
        case USER_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
            }
            
            case LOGIN_SUCCESS:
                localStorage.setItem('token',action.payload.token)
                return{
                    ...state,
                    ...action.payload,
                    isAuthenticated:true,
                    isLoading:false
                }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false,
                isRegistered:true
            }
        case LOADUSERINSUBB:
                return{
                    ...state,
                    ...action.payload,
                    user:action.payload,
                    isAuthenticated:true,
                    isLoading:false
                }

            default:
            return state
    }
}