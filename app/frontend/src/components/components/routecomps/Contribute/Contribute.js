import React, { Component } from "react";
import NavBar from "../../inputcomponents/ic";
import "./Contribute.css";
class Contribute extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			cpassword: "",
		};
	}

	SubmitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="About1">
				<NavBar
					name="PES INNOVATION LAB"
					className="myNavCBar navbar-light"
					navitem="myCnavitem"
					brandcolor="white"
					position=""
					navbarpos="fixed"
				/>
				<div className="outerc">
					<div className="inner1">
						<div className="box">
							<h1 className="heading">Sign Up To Contribute </h1>
							<input
								type="text"
								value={this.state.firstname}
								className="inputfield"
								placeholder="First Name"
								onChange={(event) => {
									this.setState({ firstname: event.target.value });
								}}
							/>
							<input
								type="text"
								value={this.state.lastname}
								className="inputfield"
								placeholder="Last Name"
								onChange={(event) => {
									this.setState({ lastname: event.target.value });
								}}
							/>
							<br />
							<input
								type="text"
								value={this.state.email}
								className="inputfield"
								id="email"
								placeholder="Email"
								onChange={(event) => {
									this.setState({ email: event.target.value });
								}}
							/>
							<input
								type="text"
								value={this.state.username}
								className="inputfield"
								id="email"
								placeholder="Username"
								onChange={(event) => {
									this.setState({ username: event.target.value });
								}}
							/>
							<input
								type="password"
								value={this.state.password}
								className="inputfield"
								id="email"
								placeholder="Password"
								onChange={(event) => {
									this.setState({ password: event.target.value });
								}}
							/>
							<input
								type="password"
								value={this.state.cpassword}
								className="inputfield"
								id="email"
								placeholder="Confirm Password"
								onChange={(event) => {
									this.setState({ cpassword: event.target.value });
								}}
							/>
							<button type="submit" onClick={this.SubmitHandler}>
								{" "}
								Sign Up{" "}
							</button>
							<p>
								Already a member?
								<a href="" style={{ texDecoration: "none" }}>
									Login here
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contribute;
