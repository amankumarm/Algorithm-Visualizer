import React, { Component } from 'react'
import {getuserdata,postapost,getposts} from '../../actions/getusername'
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import Usernavbar from './subcomps/usernavbar'
import './subcomps/styles.css'
import { withAlert } from 'react-alert'
import { customerror } from '../../actions/errors'
class Posthere extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:false,
             file:false,
             category:""

        }
    }

    static proptypes={
        getuserdata:Proptypes.func.isRequired,
        getposts:Proptypes.func.isRequired,
        postapost:Proptypes.func.isRequired,
        userdata:Proptypes.object.isRequired,
        userposts:Proptypes.array.isRequired,
        customerror:Proptypes.array.isRequired
    }
    componentDidMount(){
        this.props.getuserdata()
        this.props.getposts()

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
                this.props.postapost(form_data)
                this.props.alert.success("Posted")
                this.setState({
                image:null,
                file:null,
                category:""
            })
            }
            else{
                this.props.alert.error("Select Category")
            }
            
        }  
        else{   
            this.props.customerror("Please select both the files")
        }        
    }
    render() {

        return (
            <div className="submit-outer">
                    <Usernavbar />
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
                                        <input type='file' className="hideit" accept="image/png , image/jpeg"  name="image" id="image1" onChange={this.changeHandler}/>
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
}

const mapStateToProps = (state, ownProps) => ({
    userdata:state.getdata.userdata,
    userposts:state.getdata.userposts
})


export default connect(mapStateToProps,{getuserdata,postapost,getposts,customerror})(withAlert()(Posthere))

