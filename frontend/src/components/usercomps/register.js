import React, { Component } from 'react'
import './subcomps/register.css'
import { Link, Redirect } from 'react-router-dom'
import {register} from '../../actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { raiseerror,customerror } from '../../actions/errors'
import { withAlert } from 'react-alert'

class Register extends Component {
  
  
  constructor(props) {
    super(props)
  
    this.state = {
       first_name:"",
       last_name:"",
       username:"",
       email:"",
       password:"",
       cpassword:"",
       registered:false
    }
    this.changehandler=this.changehandler.bind(this)
    this.submithandler=this.submithandler.bind(this)
  }

  static proptypes={
    register:PropTypes.func.isRequired,
    regstat:PropTypes.bool,
    raiseerror:PropTypes.func.isRequired,
    customerror:PropTypes.func.isRequired
  }
  changehandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    // console.log(e)

    
  }


  submithandler=(e)=>{
    e.preventDefault()
      const {first_name,last_name,username,email,password,cpassword} = this.state
      const impure={first_name,last_name,username,email,password,cpassword}
      
      const checkerror= this.props.raiseerror(impure)
      if(checkerror===1){
        const obj={first_name,last_name,username,email,password}
        this.props.register(obj)
        this.setState({
          first_name:'',
          last_name:'',
          username:'',
          email:'',
          password:'',
          // registered:true
      })

      for(let i=0;i<6;i++){
        let reset1=document.getElementsByClassName('ip-r')[i]
        reset1.value=""
      }
      this.props.alert.success("Registerd. Try Logging in.")
      }

      else{
        this.setState({
          first_name:'',
          last_name:'',
          username:'',
          email:'',
          password:'',
          registered:false
      })
      for(let i=0;i<6;i++){
        let reset1=document.getElementsByClassName('ip-r')[i]
        reset1.value=""
      }
      }
       
  }
  
  
  render() {  
    const {registered}=this.state
      
   if(registered==true){
     return <Redirect to='/login' />
   }else{
      return (

            <div className="register-outer">
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'transperant'}}>
                    <div className="container">
                    <a className="navbar-brand" href="#">AlgoVizz</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Visualiser</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#" tabIndex="-1" aria-disabled="true">About Us</a>
                        </li>
                      </ul>
                    </div>
                    </div>
                  </nav>
            <div id='outer-reg'>
                <div className="outerleft">
                  <img src="./frontend/register.svg" 
                        width="auto" id="regimg" />
                </div>
                <div className="outerright">
                  <div className="innerright">
                    <h3 id="heading"> Welcome  </h3>
                    <p className="cont">ThankYou For Choosing US :) </p>
                      <br/>
                      <form>
                        <div className="form-row">
                          <div className="col">
                            <input type="text"  name="first_name" className="form-control ip-r" placeholder="First name"  onChange={this.changehandler}/>
                          </div>
                          <div className="col">
                            <input type="text" name="last_name" className="form-control ip-r" placeholder="Last name"  onChange={this.changehandler}/>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <input type="email" name="email" className="form-control ip-r" placeholder="Email"  onChange={this.changehandler}/> 
                        </div>
                        <div className="form-group">
                          <input type="text"  name="username" className="form-control ip-r" placeholder="Username"   onChange={this.changehandler}/> 
                        </div><div className="form-group">
                          <input type="password" name="password" className="form-control ip-r" placeholder="Password"   onChange={this.changehandler}/> 
                        </div><div className="form-group">
                          <input type="password" name="cpassword" className="form-control ip-r" placeholder="Confirm Password"   onChange={this.changehandler}/> 
                        </div>
  
                        <button className="btn btn-light btnlogin"onClick={this.submithandler}>Register</button>
                        <p style={{paddingTop:0.52 + 'em'}}> Already a member?<Link to="/login" style={{color:'purple'}}>    Login</Link></p>
                      </form>
  
                  </div>
                </div>
              </div> 
      </div>
          )
      }
      } 

    }


const mapStateToProps = state => ({
  regstat:state.auth
})


export default connect(mapStateToProps,{ register, raiseerror,customerror })(withAlert()(Register))
