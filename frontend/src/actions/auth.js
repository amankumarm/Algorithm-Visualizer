import axios from 'axios'
import { USER_LOADING, USER_LOADED, AUTH_ERROR, CUSTOM_MESSAGES, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOADUSERINSUBB, LOGOUT_SUCCESS, GET_ERRORS } from './types'
import store from '../store'



//checks for token and loads user posts
export const loadeuser =() =>(dispatch,getState)=>{
    dispatch({type:USER_LOADING})

    axios.get('/api/alldata',tokenconfig(getState))
    .then(res => {
        console.log(res.data)
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })
    })
    .catch(err =>{
        // dispatch({
        //     type:CUSTOM_MESSAGES,
        //     payload:"User Authentication Failed"
        // })

        dispatch({
            type:AUTH_ERROR
        })
    })
}


export const login =(username, password) =>dispatch=>{

    const config= {
        headers:{
            "Content-type":"application/json"
        }
    }

    const body=JSON.stringify({username,password})

    axios.post('/api/auth/login',body,config)
    .then(res => {
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    })
    .catch(err =>{
        dispatch({
            type:CUSTOM_MESSAGES,
            payload:"Username or Password Invalid"
        })

        dispatch({
            type:LOGIN_FAIL
        })
    })
}


export const register =({first_name:firstname,last_name:lastname,username,email, password}) =>dispatch=>{

    const config= {
        headers:{
            "Content-type":"application/json"
        }
    }

    const body=JSON.stringify({first_name:firstname,last_name:lastname,username,email,password})

    axios.post('/api/auth/register',body,config)
    .then(res => {
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    })
    .catch(err =>{
        console.log(err.response)

        dispatch({
            type:GET_ERRORS,
            payload:{msg:err.response.data,status:err.response.status}
        })

        dispatch({
            type:REGISTER_FAIL
        })
    })
}

export const logout=()=>(dispatch,getState)=>{
    const token = getState().auth.token
    // console.log(token)
    const config= {
        headers:{
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers["Authorization"]=`Token ${token}`
    }
    console.log(config)
    axios.post("/api/auth/logout",null,config)
    .then(res => {
        dispatch({
            type:LOGIN_FAIL,
        })
    })
    .catch(err =>{
        dispatch({
            type:CUSTOM_MESSAGES,
            payload:"Logout Failed"
        })
        console.log(err.response)
    })

}


export const deleteuseracc=(username)=>(dispatch,getState)=>{
    const token = getState().auth.token
    // console.log(token)
    const config= {
        headers:{
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers["Authorization"]=`Token ${token}`
    }
    const body={username};
    console.log(body)
    axios.post("/api/deleteuser",body)
    .then(res=>{
        dispatch({
            type:LOGOUT_SUCCESS
        })
    })
    .catch(err=> console.log(err.data))


}

export const changepassword=(username,password)=>(dispatch)=>{

    const body={username,password}
    axios.post("/api/changepassword",body)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.data))    
}

export const changename=(username,first_name,last_name)=>(dispatch)=>{
    const body = {username,first_name,last_name}
    axios.post('/api/changename',body)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.data))
}

export const updatesubform=()=>(dispatch,getState)=>{
    dispatch({type:USER_LOADING})

    axios.get('/api/getuserdetails',tokenconfig(getState))
    .then(res =>{
        // console.log(res.data)
        dispatch({
            type:LOADUSERINSUBB,
            payload:res.data
        })
    })
    .catch(err => {
        console.log(err)
    })


}


export const tokenconfig= getState=>{
    const token = getState().auth.token
    const config= {
        headers:{
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers["Authorization"]=`Token ${token}`;
    }

    return config
}
