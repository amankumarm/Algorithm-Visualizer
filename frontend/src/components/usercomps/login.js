import React, { Component } from 'react'
import './subcomps/login.css'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
        this.changehandler=this.changehandler.bind(this)
    }

    static propTypes={
      isauthenticated:PropTypes.bool.isRequired,
      login:PropTypes.func.isRequired
    }
    changehandler=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    submithandler=(e)=>{
      e.preventDefault()
      this.props.login(this.state.username,this.state.password)
      // var val=document.getElementsByClassName("form-control")
      // ********************************************************************************************** fix me if error .val="" 
      // val.value=""
    }


    render() {
      if(this.props.isauthenticated===true){
        return <Redirect to='/' />
      }
      else{
              return (
              <div className="login-outer">    
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:`transperant`}}>
                  <div className="container">
                  <a className="navbar-brand" href="#">AlgoVizz</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link> <span className="sr-only">(current)</span>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to='/Simulations'>Visualiser</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to='/About' tabIndex="-1" aria-disabled="true">About Us</Link>
                      </li>
                    </ul>
                  </div>
                  </div>
                </nav> 
            <div id='outer-login'>
                <div className="outerleft">
                  <img src={"./frontend/login.svg"} className="login-img" width="auto" />
                </div>
                <div className="outerright">
                  <div className="innerright">
                    <h3 id="heading"> Welcome Back :) </h3>
                    <p className="cont">ThankYou For Connecting with us </p>
                      <br/>
                    <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Userame</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   name="username"  onChange={this.changehandler} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" name="password"  onChange={this.changehandler}/>
                        </div>
                        <button type="submit" className="btn btn-light btnlogin" onClick={this.submithandler}>Login</button>
                      </form>
                          <p>Didn't Join Our Community Yet?. <br/><Link to='/register' style={{color:'purple'}}>Register Now</Link> </p>
                  </div>
                </div>
              </div> 
            </div>
            
        )
              }        
    }
}

const mapStateToProps = state => ({
  isauthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login)