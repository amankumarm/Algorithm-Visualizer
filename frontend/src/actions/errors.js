import store from '../store'
import { CUSTOM_MESSAGES } from "./types";

export const raiseerror=(impure)=>(dispatch)=>{
    var fname=impure.first_name
    var lname=impure.last_name
    // console.log(impure)

    if(impure.first_name.length>3 || impure.last_name.length>3){
        if(impure.password.length===impure.cpassword.length & impure.password.length<8){
            dispatch({
                type:CUSTOM_MESSAGES,
                payload:"Passwords Should be More than 8 Character"
            })
            return 0
        } 
    
        if(impure.password!==impure.cpassword){
       
        dispatch({
            type:CUSTOM_MESSAGES,
            payload:"Passwords Didn't Match" 
        })
        return 2
    }
    
    
    var check=0
    fname=fname.split('')
    console.log(fname)
    for(let i=0;i<fname.length;i++){
    let test=fname[i]
    if(!Number.isNaN(Number(test))){
        check=check+1
        dispatch({
            type:CUSTOM_MESSAGES,
            payload:"Names Should only contain characters."
        })
        return 3
        break
    }
}

    var check2=0
    for(let i=0;i<lname.length;i++){
        let test=lname[i]
        if(!Number.isNaN(Number(test))){
            check2=check2+1
    
            dispatch({
                type:CUSTOM_MESSAGES,
                payload:"Names Should only contain characters."
            })
            return 4
            break
        }
    }

    
    return 1  // no

}
else{

    dispatch({
        type:CUSTOM_MESSAGES,
        payload:"Names should be 3 character or more"
    })
    return 5
}   
}

export const customerror=(message)=>(dispatch)=>{

    dispatch({
        type:CUSTOM_MESSAGES,
        payload:message
    })
}