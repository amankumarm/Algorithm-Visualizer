import React, { Component } from 'react'
import './subcomps.css'
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import {getuserdata,getposts} from '../../../actions/getusername'
import { Link } from 'react-router-dom'


class Postsdiv extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            image:'',
            file:'',
        }
    }
    
    static proptypes ={
        getuserdata:Proptypes.func.isRequired,
        getposts:Proptypes.func.isRequired,
        userdata:Proptypes.object.isRequired,
        userposts:Proptypes.array.isRequired
    }

    componentDidMount(){
        this.props.getuserdata()
        this.props.getposts()

        this.setState({
            username:this.props.userdata.username
        })

    }

    
    render() 
    {
        if(this.props.userposts.length>0){    
            return (
                <div className="allpostsofuserappearhere" id="searchedposts">
                    {
                        this.props.userposts.map(function (item,i) {
                                return (<div className="shadow post" key={item['id']}>
                                <h3 className="postusername"><b>{this.props.userdata.username}</b></h3>
                                <div className="postcontent">
                                    <div className="imgdiv">
                                       <a href={item['htmlfile']} id="seeit" target="_blank">
                                        <img src={item['postimage']} className="displayimage"/>
                                       </a>
                                       
                                       <h5 style={{"color":"white","margin":`${20}px ${0}px ${0}px ${30}px`}}>
                                          {`Category : #${item['categ']}`}
                                       </h5>
                                    </div>
                                </div>
                                <div className='votescount'>
                                  <button  className="btn btn-primary shadow-sm votes"> <div className="upvote"></div>Upvote (21) </button>
                                  <button className="btn btn-danger sh  adow-sm votes"> Downvote (0)</button>
                                </div>
                                <br/>
                              </div>)
                            }.bind(this))
                    }
                </div>
            )
        }
        else{
            return (
                <div className="noposts">
                <div className="userdoesntexist postview">
                    <div className="usernotfoundpng box "></div> <div className="box"><h2 align="center">You Haven't Posted Anything.</h2></div> 
                    <br /><br/><h5 style={{margin:`${12}px`}}>start Innovating Today  <Link to='/post' className="postview"> {`<Submit Here! />`}</Link></h5>
                </div>    
                </div>    
        )
        }
    }
}

const mapStateToProps = state => ({
    userdata:state.getdata.userdata,
    userposts:state.getdata.userposts

    
})



export default connect(mapStateToProps,{getuserdata,getposts})(Postsdiv)


