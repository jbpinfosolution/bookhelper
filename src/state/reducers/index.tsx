import {combineReducers} from "redux";
import  showaddress from "./showaddress";

const reducers= combineReducers({
         address :showaddress,
         address2:showaddress,
         address3:showaddress,
         address4:showaddress,
         address5:showaddress
});

export default reducers;