import React, { Component } from 'react'
import Postsdiv from "./subcomps/subcomps";
import Usernavbar from "./subcomps/usernavbar";
class Dashboard extends Component {
    render() {
        return (
            <div className="mypostsview">
                <Usernavbar />
                <Postsdiv />
            </div>
        )
    }
}

export default Dashboard
