import React, { Component } from 'react'
import Usernavbar from './subcomps/usernavbar'
import './subcomps/styles.css'
import { withAlert } from 'react-alert'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Posthere extends Component {
    constructor(props) {
        super()
        this.state = {
             image:false,
             file:false,
             category:"",
             posting:false,
            loggedin:false,
            isLoading:false
        }
        this.loggedInCheck=this.loggedInCheck.bind(this)
    }
    
    loggedInCheck=async()=>{
        try {
          const resp = await axios.get('/user/getstatus')
          const status=resp.status
         if (status===200) {
            this.setState({
              loggedin:true
            })
         }
        } catch (error) {
          console.log(error)
        }
    }
    
    componentDidMount() {
        if(!this.props.auth[0].isAuthenticated){
            this.setState({...this.state,isLoading:true})
            this.loggedInCheck()
        }
        else{
            this.setState({...this.state,loggedin:true})
        }
        this.setState({...this.state,isLoading:false})
        
    }   
    
    
    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    categchangehandler=(e)=>{
        this.setState({
            category:e.target.value
        })
    }

    asyncsubmit=async (form_data)=>{
        try {
            const response  = await axios.post('/user/post/',form_data)
            if(response.status===200){
                this.setState({
                    ...this.state,
                    posting:false,
                    image:false,
                    file:false,
                    category:""
                })
            }            
            
        } catch (error) {
                console.log(error)
        }
    }

    submithandler=(e)=>{
        e.preventDefault();
        let form_data = new FormData()
        const element=document.getElementById('image1')
        const Helement =document.getElementById('htmlfile')
        const ifile=element.files[0] 
        const Hfile=Helement.files[0]
        if(ifile && Hfile ){

            if(this.state.category!==""){
                form_data.append('postimage',ifile,ifile.name)
                form_data.append('htmlfile',Hfile,Hfile.name)
                form_data.append('categ',this.state.category)
                this.asyncsubmit(form_data)
                const successmessage = () => toast("Posted")
                
                this.setState({
                image:null,
                file:null,
                category:""
            })
            }
            else{
                // this.props.alert.error("Select Category")
            }
            
        }  
        else{   
            // this.props.customerror("Please select both the files")
        }        
    }
    render() {


        const auth=this.props.auth[0]
        const user=this.props.auth[0].user
        if (user.googleid) {
        return (
            
            <div className="submit-outer">
                <ToastContainer />
                    <Usernavbar auth={this.props.auth} posts={this.props.posts}/>
            <div className="postsdiv">
                <div className="submit-left submit-box">
                    <div className="submit-right-inner">
                        <br />
                            <br />

                                <h3 align="center" style={{color:"white"}}> Submit Here...  :) </h3>
                                <hr id="hrline"/>
                                <br/>
                                <div className="submission-sec">
                                    <div className="btn-img">
                                        <label  htmlFor="image1" id="labelid" >Image </label>
                                    </div>
                                        <input type='file' className="hideit" accept="image/*"  name="image" id="image1" onChange={this.changeHandler}/>
                                <br />
                                    <div className="btn-img">
                                        <label  htmlFor="htmlfile" id="labelid"> Html - File</label>
                                    </div>
                                        <input type='file' className="hideit" name='file' id="htmlfile" onChange={this.changeHandler}/>
                                <br/>
                                <br/>
                                <br/>
                                </div>
                                <div  className="categ">
                                    <h3 className="categ-head">Category</h3>
                                    <hr className="categ-hr"/>
                                    <input type="radio" id="DSA" name="category" className='items' value="Data-Structure" onChange={this.categchangehandler} />
                                    <label htmlFor="DSA" className='items'>Data Structures & Algorithms</label>
                                    <input type="radio" id="ML" name="category" className='items' value="Machine-Learning" onChange={this.categchangehandler}/>
                                    <label htmlFor="ML" className='items'>Machine-Learning  </label>
                                    <input type="radio" id="AI" name="category" className='items'  value="Artificial-Intelli" onChange={this.categchangehandler}/>
                                    <label htmlFor="AI" className='items'>AI</label>
                                    <input type="radio" id="OTH" name="category" className='items' value="Micellaneous" onChange={this.categchangehandler}/>
                                    <label htmlFor="OTH" className='items'>Other</label>
                                </div>
                                <button className="btn btn-primary btn-submit shadow-sm" onClick={this.submithandler}> Post </button>
                                <br/>
                                <br/>   
                        </div>
                    </div>
                <div className="submit-right submit-box">
                   
                    <div className="submit-instruction">
                        <h1 style={{color:"white"}} align='center'>Instructions</h1>
                        <br />
                        <ul className="submit-ul">
                            <li>
                                Image resolution : Width - xxxx px ; Height- xxxx px     
                            </li>
                            <li>
                                Html file : All the javascript functionality should be written <br>
                                </br>in the html file itself, and CSS (if any) should be included in the same.
                            </li>
                            
                        </ul>
                    </div>
                </div>
{/*  */}

            </div>
            </div>
        )
    } 
    else if(this.state.isLoading && !user.googleid){
        return (<><Loading /></>)

    }
    else if(!this.state.isLoading && !user.googleid) {
     return <Redirect to='/Login' />       
    }
    


// 

}
}



export default Posthere

