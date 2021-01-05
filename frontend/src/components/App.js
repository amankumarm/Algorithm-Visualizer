import ReactDom from 'react-dom'
import "regenerator-runtime/runtime.js";
import React, { Component } from 'react'
import { Provider,connect } from 'react-redux';
import store from '../store';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import Alert from './minors/Alerts'
import Dashboard from "./usercomps/dashboard";
import Alerts from './minors/Alerts';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from "../components/usercomps/login";
import Register from '../components/usercomps/register'
import PrivateRoute from './common/privateroute'
import { loadeuser } from "../actions/auth";
      
import Simulations from "./components/routecomps/Simulations/simulations";
import About from "./components/routecomps/about/about";
import Sorting from "./sorting";
import { LinRegress } from "./components/lin-regress/linRegress";
import { NavBar } from "./components/navbar/navbar";
import { KMeans } from "./components/kmeans/kmeans";





// import Home from './usercomps/home'
// import Accsett from "./usercomps/accountsettings"; 
// import Usernavbar from './usercomps/subcomps/usernavbar';
// import Posthere from './usercomps/posthere';
// import Searchresult from "./usercomps/searchresult";
// import Wrapper from './usercomps/subcomps/wrapper';




const alertoptions={
    timeout:3000,
    position:'top right'
}

class App extends Component{
    componentDidMount(){
        store.dispatch(loadeuser())
    }
    render() {
        return (
                        <Provider store={store}>
                            <AlertProvider template={AlertTemplate}{...alertoptions}>
                                <Alerts />
                                <Router>

                                <Switch>
                                    <Route exact path="/Simulations" component={Simulations}></Route>
                                    <Route exact path="/About" component={About}></Route>
                                    <Route exact path="/Contribute" component={Login}></Route>
                                    <Route exact path="/Simulations/algorithms/array"component={Sorting}></Route>
        							<Route exact path="/k-means" component={KMeans} />
                                    <Route exact path="/linear-regression" component={LinRegress} /> 

















                                    {/* <PrivateRoute exact path='/userhome' component={Home}/>
                                    <PrivateRoute exact path='/user/accountsettings' component={Accsett} />
                                    <PrivateRoute exact path='/user/posts' component={Dashboard} />
                                    <PrivateRoute exact path='/usersearch' component={Searchresult} />
                                    <PrivateRoute exact path='/post' component={Posthere} />
 */}

                                    



                                    <Route path='/login' component={Login}/>
                                    <Route path='/register' component={Register}/>
                                     
                                </Switch>
                                </Router>
                                
                            </AlertProvider>
                        
                
                        </Provider>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"));
