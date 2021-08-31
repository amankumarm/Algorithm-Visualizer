import React, { Component } from "react";
import Navigation from "./components/navigation.jsx";
import Header from "./components/header.jsx";
import Features from "./components/features.jsx";
import About from "./components/about.jsx";
// import Services from './components/services.jsx';
import Gallery from "./components/gallery.jsx";
import Testimonials from "./components/testimonials.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/contact.jsx";
import JsonData from "./data/data.json";

class App extends Component {
	state = {
		landingPageData: {},
	};
	getlandingPageData() {
		this.setState({ landingPageData: JsonData });
	}

	componentDidMount() {
		this.getlandingPageData();
	}

	render() {
		return (
			<div>
				<Navigation />
				<Header data={this.state.landingPageData.Header} />
				<Features data={this.state.landingPageData.Features} />
				<About data={this.state.landingPageData.About} />
				{/* <Services data={this.state.landingPageData.Services} /> */}
				<Gallery />
				<Testimonials data={this.state.landingPageData.Testimonials} />
				<Team data={this.state.landingPageData.Team} />
				<Contact data={this.state.landingPageData.Contact} />
			</div>
		);
	}
}

export default App;
