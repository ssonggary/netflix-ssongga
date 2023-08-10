import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRedcuer from "./reducers";

let store = createStore(rootRedcuer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
