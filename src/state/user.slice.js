import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
name:"user",
initialState: {
    name:"Guest",
    mail:"",
    movie:[],
    fullDetailsMovie:[],
    isLoading: false,
    errorMessage: '',
},
reducers:{
  updateMoviefulldetauls: (state, action) => {
    let unique = true;
    for(let movie of state.fullDetailsMovie){
      if(movie.id === action.payload.id){
        unique = false;
      }
    }
    if (unique === true)
    {state.fullDetailsMovie.push(action.payload);}
},
ResetFullDetails: (state, action) => {
  state.fullDetailsMovie = [];
},
    updateName: (state, action) => {
        state.name = action.payload;
    },
    updateMail: (state, action) => {
        state.mail = action.payload;
    },
    updateMovies: (state, action) => {
        state.movie = action.payload;
    },
    // getMovieDetails: (state, action) => {
    //     state.fullDetailsMovie = action.payload;
    // },
    
    addMovieToState: (state, action) => {
        state.movie.push(action.payload);
    },
    deletemovie: (state, action) => {
      for(let i=0; i<state.movie.length; i++){
        if(state.movie[i] === action.payload){
          state.movie.splice(i,1);
        }
      }
    },   
    fetchMoviesStarted: (state) => {
        state.isLoading = true;
      },
      fetchMoviesFailed: (state, action) => {
        state.errorMessage = action.payload;
      },

}
})
export default user.reducer;
export const {updateMoviefulldetauls,ResetFullDetails,updateName, updateMail,updateMovies,addMovieToState, deletemovie,fetchMoviesStarted,fetchMoviesFailed} = user.actions;

// export const fetchUserMovies = (moviearray) => async (dispatch)=> {
//     try{
//         dispatch(fetchMoviesStarted());
//         let tempArr= [];
//         for(var i=0; i<moviearray.length; i++){
//             let endpoint = `https://api.themoviedb.org/3/movie/${moviearray[i]}?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
//             let response = await (await fetch(endpoint)).json();
//             tempArr.push(response);
//             console.log("temp array now:",tempArr);
//             dispatch(updateMoviefulldetauls(response));
//         }    
//     }
//     catch(err){
//         dispatch(fetchMoviesFailed(err.errorMessage));
//     }
//   }
export const fetchUserMovies = (movieID) => async (dispatch)=> {
  try{
      dispatch(fetchMoviesStarted());
      let endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
      let response = await (await fetch(endpoint)).json();
      dispatch(updateMoviefulldetauls(convertGenres_and_checkPoster(response)));   
  }
  catch(err){
      dispatch(fetchMoviesFailed(err.errorMessage));
  }
}
export const addNewMovie = (movieID) => async (dispatch)=> {
  try{
      dispatch(fetchMoviesStarted());
      dispatch(addMovieToState(movieID));
      let endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
      let response = await (await fetch(endpoint)).json();
      dispatch(updateMoviefulldetauls(convertGenres_and_checkPoster(response)));   
  }
  catch(err){
      dispatch(fetchMoviesFailed(err.errorMessage));
  }
}

  export function convertGenres_and_checkPoster(movie) {
    // for(let movie of movieArray){
    let only_names_genre = [];
    for (let obj of movie.genres) {
      only_names_genre.push(obj[`name`]);
    }
    movie.genres = only_names_genre.join(", ");
   /////
    if(movie.poster_path === null){
      movie.poster_path = `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
      movie.backdrop_path = `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
    }
    else{
      movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
      movie.backdrop_path = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
    }
    ////
    movie.vote_average = Math.round(movie.vote_average * 10) / 10;
  // }
  // console.log(data);
  return movie;
}

