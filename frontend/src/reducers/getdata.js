import { GET_USERDATA, ADD_POST, USER_POSTS, LOADALLPOSTS, LOADALLUSERS, USERSEARCH } from "../actions/types";

const initialstate={
    userdata:{},
    userposts:[],
    allposts:[],
    allusers:[],
    searcheduserspost:[]
}

export default function(state=initialstate,action){
    switch (action.type) {
        case GET_USERDATA:
            return{
                ...state,
                userdata:action.payload
            }
        case USER_POSTS:
            return{
                ...state,
                userposts:action.payload
            }
        case ADD_POST:
            return{
                userdata:[...state.userdata,action.payload]
            }
        case LOADALLPOSTS:
            return {
                ...state,
                allposts:action.payload
            }
        case LOADALLUSERS:
            return {
                ...state,
                allusers:action.payload
            }
            case USERSEARCH:
                // console.log(state.allposts)
            return{
                ...state,
                searcheduserspost:action.payload
            }
        default:
            return state
    }
}
