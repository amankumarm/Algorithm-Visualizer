import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../usercomps/subcomps/styles.css";

class Searchresult extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            searcheduser:this.props.search[0],
            
        }
    }
    
    componentDidMount(){

    }
    
    
                

    render() {  
        if(this.state.searchedpostsarray.length>0){
        return (
            <div className="search-outer"> 
                 <nav className="navbar navbar-expand-lg navbar-light search-navbar">
                                <div className="container">
                    <Link className="navbar-brand nav-things" to='/'>AlgoVizz</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2"  placeholder="Search" aria-label="Search"  name="usersearch" value={this.props.searched} readOnly/>
                            </form>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link nav-things" to='/'> Home </Link>  <span className="sr-only">(current)</span>
                        </li><li className="nav-item active">
                            <Link  className="nav-link nav-things" to="/user/posts"> My Posts </Link>  <span className="sr-only">(current)</span>
                        </li><li className="nav-item active">
                            <Link  className="nav-link nav-things" to='/post'> CREATE</Link>  <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle nav-things" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hi! {this.props.location.state.username}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/user/accountsettings'> Account Settings </Link>
                            <a className="dropdown-item"  onClick={this.props.logout}>Logout</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                        </div>
                </nav>
                    <div className="allpostsofuserappearhere" id="searchedposts">
                    {   
                        this.state.searchedpostsarray.map(function (item,i) {
                                return (<div className="shadow post" key={item['id']}>
                                <h3 className="postusername"><b>{this.props.location.state.searched}</b></h3>
                                <div className="postcontent">
                                    <div className="imgdiv">
                                    <a href={item['htmlfile']} id="seeit" target="__blank"><img src={item['postimage']} className="displayimage"/>
                                    </a>
                                    </div>
                                    <p>
                                          
                                    </p>
                                </div>
                                <br />  

                                  <button  className="btn btn-primary shadow-sm votes">upvote</button>
                                  <button className="btn btn-danger shadow-sm votes"> downvote</button>
                              </div>)
                            }.bind(this))
                    }
                    </div>
            </div>

        )
    }

    else if(this.state.userstatus===false){
        return (
                <div className="search-outer" id="nouserfound">    
                 <nav className="navbar navbar-expand-lg navbar-light search-navbar">
                                <div className="container">
                    <Link className="navbar-brand nav-things" to='/'>AlgoVizz</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2"  placeholder="Search" aria-label="Search"  name="usersearch" value={this.props.location.state.searched} readOnly/>
                            </form>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link nav-things" to='/'> Home </Link>  <span className="sr-only">(current)</span>
                        </li><li className="nav-item active">
                            <Link  className="nav-link nav-things" to="/user/posts"> My Posts </Link>  <span className="sr-only">(current)</span>
                        </li><li className="nav-item active">
                            <Link  className="nav-link nav-things" to='/post'> CREATE</Link>  <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle nav-things" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hi! {this.props.location.state.username}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/user/accountsettings'> Account Settings </Link>
                            <a className="dropdown-item"  onClick={this.props.logout}>Logout</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                        </div>
                </nav>
                
                <div className="userdoesntexist">
                    <div className="usernotfoundpng box"></div> <div className="box"><h2 align="center">Oops! User Doesn't Exist.</h2></div> 
                    <br /><br/><h5 style={{margin:`${12}px`}}>try searching again here <Link to='/'>Home</Link></h5>
                </div>
            </div>    
        )

    }
    else if(this.state.searchedpostsarray.length===0){
        return (
            <div className="search-outer" id="nouserfound">    
             <nav className="navbar navbar-expand-lg navbar-light search-navbar">
                            <div className="container">
                <Link className="navbar-brand nav-things" to='/'>AlgoVizz</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2"  placeholder="Search" aria-label="Search"  name="usersearch" value={this.props.location.state.searched} readOnly/>
                        </form>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link nav-things" to='/'> Home </Link>  <span className="sr-only">(current)</span>
                    </li><li className="nav-item active">
                        <Link  className="nav-link nav-things" to="/user/posts"> My Posts </Link>  <span className="sr-only">(current)</span>
                    </li><li className="nav-item active">
                        <Link  className="nav-link nav-things" to='/post'> CREATE</Link>  <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle nav-things" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hi! {this.props.location.state.username}</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to='/user/accountsettings'> Account Settings </Link>
                        <a className="dropdown-item"  onClick={this.props.logout}>Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
                    </div>
            </nav>
            
            <div className="userdoesntexist">
                <div className="postnotfoundpng box"></div> <div className="box"><h2 align="center">Seems like {this.props.location.state.searched} has'nt Posted anything yet .</h2></div> 
                <br /><br/><h5 style={{margin:`${12}px`}}>try searching again here <Link to='/'>Home</Link></h5>
            </div>
        </div>    
    )

    }
    else {
        return <h1>shit</h1>
    }

    }

}

export default Searchresult
