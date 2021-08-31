import React, { Component } from 'react'
import Usernavbar from './subcomps/usernavbar'
import "./subcomps/styles.css";
import { Link } from 'react-router-dom';
export class home extends Component {
    render() {
        return (
            <div className="home-content">
                <Usernavbar />
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
}

export default home
