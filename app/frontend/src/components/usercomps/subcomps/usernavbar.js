import React, { Component } from 'react'
import '../subcomps/subcomps.css'
import PropTypes from 'prop-types'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux' 
import {logout} from '../../../actions/auth'
import { getuserdata,searchedposts,loadallposts } from '../../../actions/getusername'
import Searchresult from '../searchresult'
class Usernavbar extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             usersearch:'',
             startsearch:false,
             posts:[],
             users:[]
        }
        this.changehandler=this.changehandler.bind(this)
        this.finduser=this.finduser.bind(this)
    }
                    
    static propTypes={
        userinfo:PropTypes.object.isRequired,
        logout:PropTypes.func.isRequired,
        getuserdata:PropTypes.func.isRequired,
        loadallposts:PropTypes.func.isRequired
    }
    
    
    componentDidMount(props){
        this.setState({startsearch:false})
        this.props.getuserdata()
        this.props.loadallposts()
        this.setState({
            posts:this.props.userinfo.allposts,
            users:this.props.userinfo.allusers
        })
        console.log(this.state)
    }
    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            posts:this.props.userinfo.allposts,
            users:this.props.userinfo.allusers
        })
        // console.log(this.state)
    }    

    finduser=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({
            ...this.state,
            startsearch:true
        })
        // console.log("dkfjv")
    }
    render() {

        if(this.props.userinfo.userdata.username){
            if(this.state.startsearch && this.state.usersearch){
                return <Redirect to={{
                    pathname: '/usersearch',
                    state: { username:this.props.userinfo.userdata.username,
                            searched:this.state.usersearch,
                            allposts:this.state.posts,
                            allusers:this.state.users }
                }}
                // <Searchresult  username={this.props.userinfo.userdata.username}  
                // searched={this.state.usersearch}  
                // allposts={this.state.posts}
                //  allusers={this.state.users}/>

        />
            }
            else{
        return (
                        <nav className="navbar navbar-expand-lg navbar-light mynavbar">
                                <div className="container">
                    <a className="navbar-brand brand" href="#">AlgoVizz</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 myform" type="search" placeholder="Search" aria-label="Search"  name="usersearch"  onChange={this.changehandler}/>
                                <button className="btn  btn-outline-light my-2  my-sm-0" onClick={this.finduser}>Search</button>
                            </form>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to='/'> Home</Link>

                           
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:8000/#/user/posts">My Posts</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:8000/#/post">CREATE</a>

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hi! {this.props.userinfo.userdata.username}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/user/accountsettings'> Account Settings </Link>
                            <Link className="dropdown-item" to='/Simulations'> Simulations </Link>
                            <Link className="dropdown-item" to='/About-us'> About Us </Link>
                            <a className="dropdown-item"  onClick={this.props.logout}>Logout</a>
                            </div>
                        </li>
                        </ul>
                        
                    </div>
                        </div>
                </nav>
                )
        }
        }
        else{
            return null
        }
    }
}

const mapStateToProps = state => ({
    userinfo:state.getdata
})

export default connect(mapStateToProps,{logout, getuserdata,loadallposts})(Usernavbar)

    