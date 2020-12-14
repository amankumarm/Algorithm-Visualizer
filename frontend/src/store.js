import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootreducers from "./reducers";


const initialstate={}

const middleware=[thunk]
const store=createStore(
    rootreducers,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store