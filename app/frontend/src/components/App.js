import ReactDom from 'react-dom'
import "regenerator-runtime/runtime.js";
import React, { Component } from 'react'
import { Provider,connect } from 'react-redux';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import Alert from './minors/Alerts'
import Alerts from './minors/Alerts';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './common/privateroute'
      
import Simulations from "./components/routecomps/Simulations/simulations";
import About from "./components/routecomps/about/about";
import Sorting from "./sorting";
import { LinRegress } from "./components/lin-regress/linRegress";
import { NavBar } from "./components/navbar/navbar";
import { KMeans } from "./components/kmeans/kmeans";





const alertoptions={
    timeout:3000,
    position:'top right'
}

class App extends Component{

    render() {
        return (
                                <Router>
                                <Switch>
                                    <Route exact path="/Simulations" component={Simulations}></Route>
                                    <Route exact path="/Simulations/algorithms/array"component={Sorting}></Route>
        							<Route exact path="/k-means" component={KMeans} />
                                    <Route exact path="/linear-regression" component={LinRegress} /> 
                                    <Route  component={Simulations}></Route>
                                </Switch>
                                </Router>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"));
