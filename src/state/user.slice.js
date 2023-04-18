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
    updateName: (state, action) => {
        state.name = action.payload;
    },
    updateMail: (state, action) => {
        state.mail = action.payload;
    },
    updateMovies: (state, action) => {
        state.movie = action.payload;
    },
    getMovieDetails: (state, action) => {
        state.fullDetailsMovie = action.payload;
    },
    addmovie: (state, action) => {
        state.movie.push(action.payload);
    },
    deletemovie: (state, action) => {
        //add filter
        for(let i=0; i<state.length; i++){
        // if(state[i].task === action.payload){
        //    state.splice(i, 1)
        // }
    }},   
    fetchMoviesStarted: (state) => {
        state.isLoading = true;
      },
      fetchMoviesFailed: (state, action) => {
        state.errorMessage = action.payload;
      },
}
})
export default user.reducer;
export const {updateName, updateMail,updateMovies,getMovieDetails,addmovie, deletemovie,fetchMoviesStarted,fetchMoviesFailed} = user.actions;

export const fetchUserMovies = (moviearray) => async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        let tempArr= []
        for(var i=0; i<moviearray.length; i++){
            let endpoint = `https://api.themoviedb.org/3/movie/${moviearray[i]}?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
            let response = await (await fetch(endpoint)).json();
            tempArr.push(response);
            console.log(tempArr);
        }
        dispatch(getMovieDetails(convertGenres_and_checkPoster(response)));
    }
    catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }
  export function convertGenres_and_checkPoster(movie) {
    let only_names_genre = [];
    for (let obj of movie.genres) {
      only_names_genre.push(obj[`name`]);
    }
    movie.genres = only_names_genre;
    let newDateArr= movie.release_date.split(`-`);
    movie.release_date= `${newDateArr[2]}/${newDateArr[1]}/${newDateArr[0]}`;
    movie.runtime= `${Math.floor(movie.runtime/60)}h ${movie.runtime%60}m`;
    movie.budget= addCommas(movie.budget);
    if(movie.poster_path === null){
      movie.poster_path = `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
      movie.backdrop_path = `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
    }
    else{
      movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
      movie.backdrop_path = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
    }
  // console.log(data);
  return movie;
}

