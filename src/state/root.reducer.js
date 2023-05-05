import { combineReducers } from "redux";
import moviesReducer from "./movies.slice";
import amovieReducer from "./amovie.slice";
import userReducer from "./user.slice";
import actorReducer from "./actor.slice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    amovie: amovieReducer,
    user: userReducer,
    actor: actorReducer,
  });
  
  export default rootReducer;
  

