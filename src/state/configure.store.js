import { configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies.slice"
import amovieReducer from "./amovie.slice";
import userReducer from "./user.slice"



const store = configureStore({
  reducer: {
    movies: moviesReducer,
    amovie: amovieReducer,
    user: userReducer,
  },
});

export default store;
