import {GET_ERRORS, CUSTOM_MESSAGES} from '../actions/types'

const initialstate={
    data:{},
    status:null,
    custommessage:''
}

export default function(state=initialstate,action){
    switch (action.type) {
        case GET_ERRORS:
            return {...state,
                data:action.payload.msg,
                status:action.payload.status
            }
        case CUSTOM_MESSAGES:
            return{
                ...state,
                custommessage:action.payload
            }
    
        default:
            return state
    }
}