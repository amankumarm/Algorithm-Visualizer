import Subapp from './subcomps/SubApp'
import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'
import { Provider, connect } from 'react-redux';
import store from "./store";
import { HashRouter as Router, Redirect } from 'react-router-dom';
import { logout } from "./actions/auth";
import PropTypes from 'prop-types'


export class Subindex extends Component {
    static proptypes={
        authstate:PropTypes.object
    }
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Subapp /> 
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default Subindex

ReactDom.render(<Subindex/>,document.getElementById("subapp"));


