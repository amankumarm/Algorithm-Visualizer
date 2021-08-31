import React from 'react'
import {Route, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const privateroute=({component : Component, auth,...rest})=> (
    <Route {...rest} render={props =>{
        
        if(auth.isAuthenticated===false){
            return <Redirect to='/' />
        }

        else if(auth.isLoading===true){
            return <h2>its loading </h2>
        }
        
        
        else{
                return <Component {...props}/>
            }
        
            return <Component  {...props}/>
        }} />       
    )


const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps)(privateroute)