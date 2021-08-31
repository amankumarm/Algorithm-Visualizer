import React, { Component } from "react";
import NavBar from "../../inputcomponents/ic";
import "./simulations.css";
class Simulations extends Component {
	render() {
		return (
			<div className="SimOuter">
				<NavBar
					name="PES INNOVATION LAB"
					className="myNavSimBar navbar-light"
					navitem="mySimnavitem"
					brandcolor="WHEAT"
					position=""
					navbarpos="fixed"
				/>
				<div id="simouter2">
					<div className="algorithm">
						<p className="heading">Algorithms & Machine Learning Techniques</p>
						<hr></hr>
						<br></br>
						<ol className="algool">
							<ol>
								{" "}
								<li style={{ color: "#8BBEE8FF", fontSize: `${25}px` }}>
									{" "}
									Algorithms
								</li>
								<ol>
									<li className="heads">Sorting Visualisation</li>
									<ul>
										<li className="li">
											<a
												href='/v#/Simulations/algorithms/array'
												target='__blank'
												style={{ textDecoration: "none", color: "white" }}>
												Bubble Sort/ Selection Sort/ Insertion Sort/ Merge Sort/
												Quick Sort/
											</a>
										</li>
									</ul>

									<li className="heads">Graph Traversal Algorithms </li>
									<ul>
										<li className="li">
											<a
												href="/graph"
												style={{ textDecoration: "none", color: "white" }}
											>
												Breadth First Search
											</a>
										</li>
										<li className="li">
											<a
												href="/graph"
												style={{ textDecoration: "none", color: "white" }}
											>
												Depth First Search
											</a>
										</li>
										<li className="li">
											<a
												href="/graph"
												style={{ textDecoration: "none", color: "white" }}
											>
												Djikstra{" "}
											</a>
										</li>
										<li className="li">
											<a
												href="/graph"
												style={{ textDecoration: "none", color: "white" }}
											>
												Iterative Depth First Search
											</a>
										</li>
										<li className="li">
											<a
												href="/graph"
												style={{ textDecoration: "none", color: "white" }}
											>
												A Star
											</a>
										</li>
										<br></br>
									</ul>
								</ol>
								<li style={{ color: "#8BBEE8FF", fontSize: `${25}px` }}>
									Machine Learing Algorithms
								</li>
								<ul>
									<li className="li">Liner Regression</li>
									<li className="li">K-Nearest Neighbours</li>
									<li className="li">Clustering</li>
									<li className="li">Simple Neural Network</li>
								</ul>
							</ol>
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default Simulations;
