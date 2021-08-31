import React, { Component } from 'react'
import './subcomps.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Loading from './loading';
class Postsdiv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading:false,
            isAuthenticated:false,
        }
        this.asyncFunc=this.asyncFunc.bind(this)
        this.asyncposts=this.asyncposts.bind(this)
    }
    
    asyncFunc= async ()=> {
        try {
          const response = await axios.get("/user/getstatus");
          if(response.status===200){
          this.setState({
                ...this.state,
                isLoading:false,
                isAuthenticated:true
            })
            const setauth=this.props.auth[1]
            setauth({isAuthenticated:true,user:response.data.user,isLoading:false})
        }
        console.log(response)
        } catch (error) {
           this.setState({
               ...this.state,
               isLoading:false
           })
        }
      }
    asyncposts = async()=>{
        try {
            const resp= await axios.get('/user/getuserposts')
            if (resp.status===200) {
                const setposts=this.props.posts[1]
                setposts({userposts:resp.data.posts,status:true})
            }
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }
    componentDidMount(){
        if (!this.props.auth[0].isAuthenticated) { 
        this.setState({
            ...this.state,
            isLoading:true
        })
        this.asyncFunc()
    }
        if (!this.props.posts[0].status) {
            this.setState({
                isLoading:true
            })
            this.asyncposts()
        }
        this.setState({isLoading:false})
    }
    render(){

        const {isLoading,isAuthenticated}=this.state
        const posts=this.props.posts[0].userposts
        if (this.state.isLoading) {
            return(
                <Loading />
            )
        }
        if (!isLoading && !this.props.auth[0].isAuthenticated) {
            return(
                <Redirect to='/Login' />
        )}
        
        if (!isLoading && this.props.auth[0].isAuthenticated) {
        if(posts.length>0){    
            return (
                <div className="allpostsofuserappearhere" id="searchedposts">
                    {
                        posts.map(function (item,i) {
                                return (<div className="shadow post" key={item['id']}>
                                <h3 className="postusername"><b>{"aman"}</b></h3>
                                <div className="postcontent">
                                    <div className="imgdiv">
                                       <a href={String(item['html'])} id="seeit" target="_blank">
                                        <img src={String(item['image'])} className="displayimage"/>
                                       </a>
                                       
                                       <h5 style={{"color":"white","margin":`${20}px ${0}px ${0}px ${30}px`}}>
                                          {`Category : #${item['category']}`}
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
    else{
        return(<><Loading /></>)
    }
    
        
    }
}




export default Postsdiv


