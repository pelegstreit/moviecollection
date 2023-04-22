import { createSlice } from "@reduxjs/toolkit";


const movies = createSlice({
    name: "movies",
    initialState: {
        items: [],
        pages: 1,
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        fetchMoviesStarted: (state) => {
            state.isLoading = true;
          },
          fetchMoviesFailed: (state, action) => {
            state.errorMessage = action.payload;
          },
          fetchMoviesReady(state, action) {
            state.items = action.payload;
            state.isLoading = false;
            state.errorMessage = "";
          },
        setInitialMovies: (state, action) => {
            // console.log("setInitialMovies", action.payload.length);
            state = action.payload;
            // console.log('after assignment ', state);
        },
        getNumberofPages: (state,action) =>{
            state.pages= action.payload;
            // console.log("getNumberofPages " + action.payload);
        }
        // addtask: (state, action) => {state.push({"task":action.payload, "open": true, "show": true})},
        // changestat: (state,action) => {state.map((obj) => {if(obj.task===action.payload) {obj.open = !obj.open} })},
        // deletetask: (state, action) => {for(let i=0; i<state.length; i++){
        //     if(state[i].task === action.payload){
        //        state.splice(i, 1)
        //     }
        // }},
        // deleteAllCompleted:(state) => {for(let obj of state){
        //     if(obj.open === false){
        //        let index = state.indexOf(obj);
        //        state.splice(index, 1);
        //     }
        // }},
        // showAll:(state) => {state.map((obj) => { obj.show = true} )},
        // showActive:(state) => {state.map((obj) => {obj.open? obj.show = true : obj.show = false} )},
        // showClosed:(state) => {state.map((obj) => {obj.open? obj.show = false : obj.show = true})},


    }
})
export default movies.reducer;
export const { 
    fetchMoviesStarted,
    fetchMoviesFailed,
    fetchMoviesReady,
    setInitialMovies,
    getNumberofPages
} = movies.actions;
// export const {getInitialTasks,addtask,changestat, deletetask,deleteAllCompleted,showAll,showActive,showClosed} = tasks.actions;

export const fetchPopularMovies = ()=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results;
        dispatch(fetchMoviesReady(convert_genreid_to_name(data)));        
    }catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }
  export const fetch_NowMovies = ()=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results;
        dispatch(fetchMoviesReady(convert_genreid_to_name(data)));       
    }catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }
  export const fetch_top_rated = ()=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results;
        dispatch(fetchMoviesReady(convert_genreid_to_name(data)));      
    }catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }
  export const fetch_upcoming = ()=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        const endpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results;
        dispatch(fetchMoviesReady(convert_genreid_to_name(data)));       
    }catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }
  export const fetch_movie = (category, page)=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        let endpoint = `https://api.themoviedb.org/3/movie/${category}?api_key=8363ff1f821b3c4a310b38701890d3ba&page=${page}`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results;
        // console.log("data",data);
        dispatch(fetchMoviesReady(convert_genreid_to_name(data)));
        dispatch(getNumberofPages(response.total_pages));
    }catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }

  
  export const search_movie = (seritem)=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=8363ff1f821b3c4a310b38701890d3ba&query=${seritem}`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results;
        dispatch(fetchMoviesReady(convert_genreid_to_name(data)));     
        dispatch(getNumberofPages(response.total_pages));  
    }catch(err){
        dispatch(fetchMoviesFailed(err.errorMessage));
    }
  }
  export function convert_genreid_to_name(data) {
    const genres = [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 16,
        name: "Animation"
      },
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 80,
        name: "Crime"
      },
      {
        id: 99,
        name: "Documentary"
      },
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 10751,
        name: "Family"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 36,
        name: "History"
      },
      {
        id: 27,
        name: "Horror"
      },
      {
        id: 10402,
        name: "Music"
      },
      {
        id: 9648,
        name: "Mystery"
      },
      {
        id: 10749,
        name: "Romance"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 10770,
        name: "TV Movie"
      },
      {
        id: 53,
        name: "Thriller"
      },
      {
        id: 10752,
        name: "War"
      },
      {
        id: 37,
        name: "Western"
      }
    ];
    for (let movie of data) {
      let genrelist = [];
      // console.log( movie.genre_ids);
      for (let genre_id of movie.genre_ids) {
        // console.log("genreid", genre_id);
        for (let obj of genres) {
          // console.log(obj);
          // console.log(obj[`id`]);
          if (obj[`id`] === genre_id) {
            // console.log(obj[`id`] === genre_id);
            // console.log(obj[`id`]);
            // console.log(movie.genre_ids);
            genrelist.push(obj[`name`]);
            movie.genre_ids = genrelist.join(", ");
            // console.log(genrelist);
          }
        }
      }
      if(movie.poster_path === null){
        movie.poster_path = `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
      }
      else{
        movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
      }
    }
    // console.log(data);
    return data;
  }
  // export function choose_movie()=>

