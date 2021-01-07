import Accsett from "./accountsettings";
import Dashboard from './dashboard'
import Login from "./login";
import Posthere from "./posthere";
import register from "./register";
import searchresult from "./searchresult";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import ReactDom from 'react-dom'

function Main(){
    return (
        <Router>
            <Switch>
                <Route exact path='/accsett' component={Accsett} />
                <Route exact path='/Dashboard' component={Dashboard}/>
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Posthere' component={Posthere} />
                <Route exact path='/searchresult' component={searchresult} />
                <Route exact path="/register" component={register} />
            </Switch>
        </Router>
    )
}

ReactDom.render(<Main/>,document.getElementById('root'))