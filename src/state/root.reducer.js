import { combineReducers } from "redux";
import moviesReducer from "./movies.slice";
import amovieReducer from "./amovie.slice";
import userReducer from "./user.slice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    amovie: amovieReducer,
    user: userReducer,
  });
  
  export default rootReducer;
  

