import React, { Component } from 'react'
import NavBar from '../../inputcomponents/ic'
import './home.css'
import Button from '@material-ui/core/Button'

class Home extends Component {
    render() {
        return (
            <div className="back">
                <NavBar name="PES Innovation Lab" className="myNavHomeBar navbar-light" navitem="myHomenavitem" brandcolor="white" position="" navbarpos="fixed" />
                    
                    <div  className="HomeContent">
                        <h1 style={{letterSpacing:`${6.5}px`,fontSize:`${50}px`}}>Visualise Your Concepts</h1>
                        <p style={{fontSize:`${15}px`}}>Understand Various Algorithms and ML Techniques</p>
                        <Button variant="contained" id="buttonhome" href="./Simulations">Get Started</Button>
                        <Button variant="contained" id="buttonhome"  href="./Simulations">Contribute</Button>

                    </div>
                
            </div>
        )
    }
}

export default Home
