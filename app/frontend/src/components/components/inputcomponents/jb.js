import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './ic.css'
function JB(props) {
    return (
        <div>
            <Jumbotron className="myJumbo">
                    <Container className="myCont">
                        {props.children}
                    </Container>
                </Jumbotron>
        </div>
    )
}

export default JB
