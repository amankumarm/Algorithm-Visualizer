import React, { Component } from 'react'
import Usernavbar from './subcomps/usernavbar'
import "./subcomps/styles.css";
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import Loading from "./subcomps/loading";
export class home extends Component {
    constructor(props) {
        super(props)
        this.state={
            isAuthenticated:false,
            user:null,
            isRegistered:false,
            isLoading:false
        }
        this.asyncFunc=this.asyncFunc.bind(this)
    }
    
    asyncFunc= async ()=> {
        try {
          const response = await axios.get("/user/getstatus");
          if(response.status!==403){
          this.setState({
                ...this.state,
                isAuthenticated:true,
                user:response.data.user,
                isLoading:false
            })
            console.log(this.state)
            const setauth=this.props.auth[1]
            setauth(this.state)
        }
        } catch (error) {
           this.setState({
               ...this.state,
               isLoading:false
           })
        }
      }
    
    componentDidMount(){
        console.log(this.props)
        if (!this.props.auth[0].isAuthenticated) {
        this.setState({
            ...this.state,
            isLoading:true
        })
        this.asyncFunc()
        }
        console.log("user was loaded")
    }
    
    render() {
        if (this.state.isLoading) {
            return(
                <>
                <Loading />
                </>
            )
        }

        if(this.props.auth[0].isAuthenticated){
            return (
                <div className="home-content">
                    <Usernavbar auth={this.props.auth} posts={this.props.posts} />
                        <div className="home-center">
                            <div className="home-container">
                                <h1 align="center">Let's Build This Together</h1>
                                <div className="home-buttons">
                                    <button className="H-bt-1" id="thisbutton">
                                        <Link to ='/post' style={{textDecoration:"none",color:"white",fontSize:`${15}px`}}><b>Get Started</b></Link> 
                                    </button>
                                    <button className="H-bt-1">
                                    <Link to ='/user/posts' style={{textDecoration:"none",color:"white",fontSize:`${15}px`}}><b>My Posts</b></Link> 
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }
        else if(!this.props.auth[0].isAuthenticated){
            return(
                <Redirect to='/Login' />
                )
        }
        else{
            return (
                <> 404 page Here </>
            )
        }
    }
}

export default home
