import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { updatesubform, logout } from '../../actions/auth'
import { getuserdata, getposts } from '../../actions/getusername'

class Submitpost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:0
            }
            this.setstatefunction=this.setstatefunction.bind(this)
        }
    
    
    static propTypes={
        userdata:PropTypes.object.isRequired,
        updatesubform:PropTypes.func.isRequired,
        getuserdata:PropTypes.func.isRequired,
        getposts:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired,
        postdetails:PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.updatesubform()
        this.props.getuserdata()        
        this.props.getposts()
        
    }
    
    setstatefunction=()=>{
        const aka= (state,props) => {
            const postslength = (this.props.postdetails.length)-1
            console.log(postslength)
            if(postslength>0){
                const getnewpostid = (this.props.postdetails[postslength]['id'])+1
                console.log(getnewpostid)    
                return {
                    posts:getnewpostid
                }
            }
            else{
                return {posts:0} 
            }
        }
        this.setState(aka)

    }
    render() {
        // console.log(this.props.postdetails)

        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                <a className="navbar-brand" href="#">PES Innovation Lab</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a  className="nav-link" href="http://localhost:8000/"> Home </a>  <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hi! {this.props.userdata.username}</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to='/user/accountsettings'> Account Settings </Link>
                        <a className="dropdown-item " href="http://localhost:8000/#/user/posts">My Account</a>
                        <a className="dropdown-item"  onClick={this.props.logout}>Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
                    </div>
                </nav>

                <div className="formdiv">
                        <div className="formleft">
                            left
                        </div>
                        <div className="formright">
                            right
                            
                                <input type="file" name="myfil"  onChange={this.setstatefunction}/>
                                <input type="text" name="my" value={`${this.props.userdata.username}_post_${this.state.posts}.html`} onChange={()=>{}} hidden/>
                                <button type="submit">Upload</button>
                        </div>
                    
                </div></>
        )
    }
}
const mapStateToProps = state => ({
    userdata:state.auth.user,
    postdetails:state.getdata.userposts

})



export default connect(mapStateToProps, { updatesubform, getuserdata, getposts, logout})(Submitpost)
