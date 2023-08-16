// Import from redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import quizReducer from "../redux/reducer";
// Import from redux-thunk
import thunk from "redux-thunk";

//Store setup
const allreducers = combineReducers({ quizReducer });
const store = createStore(allreducers, applyMiddleware(thunk));

export default store;
