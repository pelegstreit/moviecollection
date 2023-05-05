import { configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies.slice"
import amovieReducer from "./amovie.slice";
import userReducer from "./user.slice";
import actorReducer from "./actor.slice";

let lastSavedData = {"movies":{items: [],
  pages: 1,
  isLoading: false,
  errorMessage: '',
} ,"amovie":{movieId: 550,
  theMovie: {},
  actors_list: [],
  recommendation:{},
  images:{},
  galleryIndex:0,
  bgImg: '',
  isLoading: false,
  errorMessage: ''},"user":{name:"Guest",
  mail:"",
  movie:[],
  fullDetailsMovie:[],
  isLoading: false,
  errorMessage: '',}};
const local = localStorage.getItem("MoviesStorage");
if (local) lastSavedData = JSON.parse(local);
const initialAppState = lastSavedData;

const saveToStorage = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  window.localStorage.setItem("MoviesStorage", JSON.stringify(store.getState()));
};

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    amovie: amovieReducer,
    user: userReducer,
    actor: actorReducer,
  },
  // preloadedState: initialAppState,
  // middleware: [saveToStorage]
});

export default store;
