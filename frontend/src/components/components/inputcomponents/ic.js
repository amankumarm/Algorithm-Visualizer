import React, { Component } from "react";
import './ic.css'
import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Usernavbar from '../../usercomps/subcomps/usernavbar'

class NavBar extends Component{
	constructor(props) {
		super(props)
	}	
	componentDidMount(){
		console.log(this.props.auth)
	}
	
	static propTypes={
		auth:PropTypes.object.isRequired
	}





	render(){

	if(!this.props.auth.token){
		return (
			<div>
				<Navbar className={this.props.className} expand="lg">
					<Navbar.Brand
						href="#home"
						style={{
							"marginLeft": "3.5em",
							fontSize: `${22}px`,
							color: `${this.props.brandcolor}`,
							position: `${this.props.position}`,
						}}
					>
						AlgoVizz
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					
					<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto mynav navs">
				<Link to="/" className={this.props.navitem}>
					Home	
				</Link>
				<Link to="/Simulations" className={this.props.navitem}>
					Simulations
				</Link>
				<Link to="/About" className={this.props.navitem}>
					About Us
				</Link>
				<Link to="/Contribute" className={this.props.navitem}>
					Contribute
				</Link>
			</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
	else{
		return <div id="thisid">
			<Usernavbar />

			</div>
	}
	
};
}

const mapStateToProps = state => ({
	auth:state.auth
})

export default connect(mapStateToProps,{})(NavBar)