import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Alerts extends Component {
    static propTypes={
        errors:PropTypes.object.isRequired
    }
    
    componentDidUpdate(prevProps){
        const {errors, alert } = this.props
        if(errors!==prevProps.errors){
        if(errors.data.email){
            alert.error(errors.data.email[0])
        }
        if(errors.data.username){
            alert.error(errors.data.username[0])
        }if(errors.data.password){
            alert.error(errors.data.password[0])
        }
        if(errors.custommessage){
            alert.error(errors.custommessage)
        }
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors:state.errors
})


export default connect(mapStateToProps)(withAlert()(Alerts))
