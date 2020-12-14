import { combineReducers } from "redux";
import getdata from "./getdata";
import errors from "./errors";
import auth from './auth'
export default combineReducers({
    getdata,
    errors,
    auth
})