import { combineReducers } from "redux";
import { mataData } from "./APIreducers";
import { theme } from "./themeReducers";

export default combineReducers({mataData,theme})