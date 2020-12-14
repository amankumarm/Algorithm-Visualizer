import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { loadeuser,updatesubform } from '../actions/auth';
import { getuserdata } from '../actions/getusername';
import Submitpost from "./components/submitpost";

class Subapp extends Component {

    static propTypes={
        authstate:PropTypes.object.isRequired,
        loadeuser:PropTypes.func.isRequired,   
        getuserdata:PropTypes.func.isRequired,
        updatesubform:PropTypes.func.isRequired
    }

    componentDidMount(){
        // this.props.loadeuser()
        // this.props.getuserdata()
        this.props.updatesubform()
    
    }
    render() {
        if(this.props.authstate.isAuthenticated){
            
            return (
                <div>
                   <Submitpost /> 
                </div>
            )
        } 
        else{
            
            // window.loc  ation="http://127.0.0.1:8000"
            return null
        }

        }
        
    
}

const mapStateToProps = state => ({
    authstate:state.auth,
    all:state
})
export default connect(mapStateToProps,{ loadeuser,getuserdata,updatesubform })(Subapp)



