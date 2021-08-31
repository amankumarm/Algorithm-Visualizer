import React, { Component } from 'react'
import Usernavbar from './subcomps/usernavbar'
import './subcomps/main.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withAlert } from 'react-alert'
import { deleteuseracc, logout, changepassword,changename} from "../../actions/auth";

class Accsett extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            first_name:this.props.userdata.first_name,
            last_name:this.props.userdata.last_name,
            username:this.props.userdata.username,
            new_password:"",
            confirm_password:""
             
        }
        this.changehandler=this.changehandler.bind(this)
        this.passwordsubmitHandler=this.passwordsubmitHandler.bind(this)
        this.namesubmitHandler=this.namesubmitHandler.bind(this)
    }
    



    static proptypes={
        userdata:PropTypes.object.isRequired,
        deleteuseracc:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired,
        changepassword:PropTypes.func.isRequired,
        changename:PropTypes.func.isRequired
    }

    
    deletehandler=()=>{
        const data={username:this.props.userdata.username}
        const confirmation=confirm("Are You Sure")
        if(confirmation){
        this.props.deleteuseracc(this.props.userdata.username)
        this.props.logout()
        }
        else{
            alert("Thank you For Being with Us")
        }

    }

    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    passwordsubmitHandler=(e)=>{
        e.preventDefault()
        const {new_password,confirm_password}=this.state
        const {alert}=this.props
        if(new_password.length>8 || confirm_password.lenght>8){
                if(new_password===confirm_password){
                    const confirmation=confirm("Are you Sure ?")
                    if(confirmation){
                        this.props.changepassword(this.state.username,this.state.new_password)
                        this.setState({
                            new_password:"",
                            confirm_password:""
                        })
                        alert.success("Password Updated")
                        for(let i=3;i<5;i++){
                            const reset1=document.getElementsByClassName('ip-acc')[i]
                            reset1.value=""
                          }    
                    }
                    else{
                        alert.info("Passwords Didn't Change")
                        
                        this.setState({
                            new_password:"",
                            confirm_password:""
                        })
                        for(let i=3;i<5;i++){
                            const reset1=document.getElementsByClassName('ip-acc')[i]
                            reset1.value=""
                          }
                    }
                    }
                else{
                        alert.error("Passwords Don't Match")
                        for(let i=3;i<5;i++){
                            const reset1=document.getElementsByClassName('ip-acc')[i]
                            reset1.value=""
                          }
                    }  
                }
        else{
            alert.error("Passwords should be atleast 8 characters long")
            for(let i=0;i<5;i++){
                const reset1=document.getElementsByClassName('ip-acc')[i]
                reset1.value=""
              }
        }
    }

    namesubmitHandler=(e)=>{
        e.preventDefault()
        const {first_name,last_name}=this.state

        if(first_name.length>2 || last_name.lenth>2 ){
            this.props.changename(this.state.username,this.state.first_name,this.state.last_name)
            this.props.alert.success("Name Updated")
            for(let i=0;i<3;i++){
                const reset1=document.getElementsByClassName('ip-acc')[i]
                reset1.value=""
              }
        }
        else{
            for(let i=0;i<3;i++){
                const reset1=document.getElementsByClassName('ip-acc')[i]
                reset1.value=""
              }
            this.props.alert.error("Invalid names")
        }
        
    }

    render() {
        return (
            <div className="accsett-outer"> 
                <Usernavbar />
                <div className="accsettmaster">
                    <div className="accsettinner">
                    <div className="row row1">
                        <div className="col-md-10">
                            <h1> Your Profile</h1>
                        </div>
                        
                    </div>
                    <div className="row">
                        
                        <div className="ak col-md-7 shadow" id="update">
                            <div>
                                <h2><b>
                                    Update Profile
                                
                                </b></h2>
                                <hr className="accsett-hr"/>
                                <form>  
                                <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input type="text" className="form-control ip-acc" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.props.userdata.username} readOnly/>
                                        <small id="usernameHelp" className="form-text text-muted">Sorry! Your username cannot be changed</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">First Name</label>
                                        <input type="text" className="form-control ip-acc" id="exampleInputEmail1" aria-describedby="emailHelp"  name="first_name"  onChange={this.changehandler} placeholder={`${this.props.userdata.first_name} - (current)`}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Last Name</label>
                                        <input type="text" className="form-control ip-acc" id="exampleInputEmail1" aria-describedby="emailHelp" name="last_name"  onChange={this.changehandler} placeholder={`${this.props.userdata.last_name} - (current) `}/>
                                    </div>
                                    <button type="submit" className="btn btn-light" onClick={this.namesubmitHandler}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="ak shadow col-md-4">
                        <div>
                                <h2><b>
                                    Update Password
                                </b>
                                </h2>
                                <hr className="accsett-hr"/>
                                <form>
                                <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" >Current Pasword </label>
                                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="**********" readOnly   />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1"  >New Password</label>
                                        <input type="password" className="form-control ip-acc" id="exampleInputEmail1" aria-describedby="emailHelp" name="new_password" onChange={this.changehandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Confirm Password</label>
                                        <input type="password" className="form-control ip-acc" id="exampleInputEmail1" aria-describedby="emailHelp"  name="confirm_password" onChange={this.changehandler}/>
                                    </div>
                                    <button type="submit" className="btn btn-light" onClick={this.passwordsubmitHandler}>Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="ak shadow col-md-11">
                            <h2> <b>
                                Danger Zone
                            </b></h2><hr className="accsett-hr"/>
                            <p>
                            Deleting your account will mean you instantly lose access to your Algovizz account, including access in the application. This is a permanent action and can not be reverted.
                            </p>
                            <button className="btn btn-danger" onClick={this.deletehandler}>Delete Account</button>
                        </div>
                    </div>
                </div>
                        
                
                </div>
            
            </div>
        )
    }
}
const mapStateToProps = state => ({
    userdata:state.getdata.userdata
})


export default connect(mapStateToProps, {deleteuseracc,logout,changepassword,changename})(withAlert()(Accsett))
