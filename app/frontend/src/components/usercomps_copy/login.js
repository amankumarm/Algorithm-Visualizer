import React, { Component } from 'react'
import './subcomps/login.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import regeneratorRuntime from 'regenerator-runtime'
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            registered:false,
            loggedin:false
        }
    }
    loggedInCheck=async()=>{
        try {
          const resp = await axios.get('/user/getstatus')
          const status=resp.status
         if (status===200) {
            const [auth,setauth]=this.props.auth
            setauth({
              ...auth,
                isAuthenticated:true,
                user:resp.data.user,
                isLoading:false
            })
         }
        } catch (error) {
          console.log(error)
        }
    }
    componentDidMount(){
      this.loggedInCheck()
    }
    submithandler=(e)=>{
      e.preventDefault()
      this.setState({
        ...this.state,
        registered:true
      })
    }


    render() {
      if(this.props.auth[0].isAuthenticated){
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
                      <form action='/auth/google' method="POST">
                          <button type="submit" className="btn btn-light btnlogin">
                          <img src={'./frontend/google-symbol(1).png'} /><p className="flex-item2">Login With Google</p>
                        </button>
                        </form>
                        
                        <hr/>
                        <br/>
                      <p style={{margin:0,padding:0,textAlign:'center'}}>Didn't Join Our Community Yet? <br/></p>
                          <form action='/auth/google' method="POST">
                          <button type="submit" className="btn btn-light btnlogin" onClick={this.submithandler}>
                          <img src={'./frontend/google-symbol(1).png'} /><p className="flex-item2">Register</p>
                        </button>
                        </form>

                  </div>
                </div>
              </div> 
            </div>
            
        )
              }        
    }
}


export default Login