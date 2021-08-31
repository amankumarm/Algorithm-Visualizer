import Dashboard from './dashboard'
import Login from "./login";
import regeneratorRuntime from "regenerator-runtime";
import Posthere from "./posthere";
import Searchresult from "./searchresult";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import ReactDom from 'react-dom'
import { authState,errState,postState } from "./initialStates";
import Home from './home'
import Loading from './subcomps/loading';


function Main(){
    const [auth, setauth] = useState(authState)
    const [err, seterr] = useState(errState)
    const [posts, setposts] = useState(postState)
    const [search,setsearch] = useState("")
    const authprop=[auth,setauth]
    const errprop=[err,seterr]
    const postprop=[posts,setposts]
    const searchprop=[search,setsearch]

   

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home auth={authprop} err={errprop} />
                </Route>
                <Route exact path='/Dashboard' >
                    <Dashboard auth={authprop} search={search} posts={postprop} />
                </Route>
                <Route exact path='/Login'  >
                    <Login auth={authprop} />
                </Route>
                <Route exact path='/post' >
                    <Posthere auth={authprop} err={errprop} posts={postprop}/> 
                </Route>
                <Route exact path='/searchresult' >
                    <Loading auth={authprop} search={search}/> 
                </Route>
                
            </Switch>
        </Router>
    )
}

ReactDom.render(<Main/>,document.getElementById('root'))