import React, { Component } from 'react'
import Postsdiv from "./subcomps/subcomps";
import Usernavbar from "./subcomps/usernavbar";
class Dashboard extends Component {
        constructor(props) {
            super(props)
        }
        
    render() {
        return (
            <div className="mypostsview">
                <Usernavbar />
                <Postsdiv auth={this.props.auth} posts={this.props.posts}/>
            </div>
        )
    }
}

export default Dashboard
