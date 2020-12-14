import {GET_USERDATA, ADD_POST, GET_ERRORS, CUSTOM_MESSAGES,USER_POSTS, LOADALLPOSTS, LOADALLUSERS, USERSEARCH} from './types'
import axios from 'axios'
import { tokenconfig } from './auth'
import { customerror } from './errors'

export const getuserdata=()=>(dispatch,getState) =>{
    const token = getState().auth.token
    const config= {
        headers:{
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers["Authorization"]=`Token ${token}`;
    }
    
    axios.get('/api/getuserdetails',config)
    .then(res =>{
        dispatch({
            type:GET_USERDATA,
            payload:res.data
        })
    })
    .catch(err=> console.log(err))
}


export const getposts=()=>(dispatch,getState)=>{
        axios.get('http://localhost:8000/api/alldata',tokenconfig(getState))
        .then(res=>{

            // console.log(ress.data)
            dispatch({type:USER_POSTS,
                payload:res.data})
        })
        .catch(err => console.log(err))
}
export const postapost=(postattr)=>(dispatch,getState)=>{

    
    axios.post('/api/alldata/',postattr,tokenconfig(getState))
    .then(res=> {
        dispatch({
            type:ADD_POST,
            payload:res.data
        })
        
        // customerror("posted")

    })
    .catch(err=> {
        const errors={msg:err.response.data,
                      status:err.response.status}
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
        console.log(errors)
    }
    )
}


export const loadallposts=(username)=>(dispatch)=>{
    
    axios.get('http://localhost:8000/api/allusers')
    .then(res=>{
        dispatch({
            type:LOADALLUSERS,
            payload:res.data
        })
    })
    .catch(err => {console.log(err)})

    
    axios.get('http://localhost:8000/api/allposts')
    .then(res => {
        dispatch({
            type:LOADALLPOSTS,
            payload:res.data
        })
    })
    .catch(err =>{ console.log(err)})
    
} 

export const searchedposts=()=>(dispatch)=>{

    dispatch({
        type:USERSEARCH,
        // payload:posts
    })
}