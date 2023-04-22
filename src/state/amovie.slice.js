import { createSlice } from "@reduxjs/toolkit";

const amovie = createSlice({
    name: "amovie",
    initialState: {
      movieId: 550,
        theMovie: {},
        actors_list: [],
        recommendation:{},
        images:{},
        galleryIndex:0,
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
            state.theMovie = action.payload;
            state.isLoading = false;
            state.errorMessage = "";
          },
          fetchActorsReady(state, action) {
            state.actors_list = action.payload;
          },
          fetchRecommendation(state, action) {
            // console.log("recomss", action.payload);
            state.recommendation = action.payload;
          },
          fetchImagesReady(state, action) {
            console.log("images:",action.payload);
            state.images = action.payload;
          },
        setInitialMovies: (state, action) => {
            // console.log("setInitialMovies", action.payload.length);
            state = action.payload;
            // console.log('after assignment ', state);
        },
        updateMovieId:  (state, action) => {
          state.movieId = action.payload;
        },
        nextImage: (state) => {
          state.galleryIndex = (state.galleryIndex + 1) % state.images.length;
        },
        prevImage: (state) => {
          state.galleryIndex = (state.galleryIndex - 1 + state.images.length) % state.images.length;
        },
        showActors(state, action) {
          state.actors_list = action.payload;
        },
      
    }
})
export default amovie.reducer;
export const { 
    fetchMoviesStarted,
    fetchMoviesFailed,
    fetchMoviesReady,showActors,
    setInitialMovies,updateMovieId,fetchActorsReady,fetchImagesReady,fetchRecommendation,nextImage, prevImage
} = amovie.actions;



  export const fetch_the_movie = (newmovieId)=> async (dispatch)=> {
    try{
        dispatch(fetchMoviesStarted());
        //the main movie api call
        let endpoint = `https://api.themoviedb.org/3/movie/${newmovieId}?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
        const response = await (await fetch(endpoint)).json();
        dispatch(fetchMoviesReady(convertGenres_and_checkPoster(response)));
        //the actors api call
        let actors_endpoint = `https://api.themoviedb.org/3/movie/${newmovieId}/credits?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        const actors_response = await (await fetch(actors_endpoint)).json();
        const actors_data= actors_response.cast;
        dispatch(fetchActorsReady(fix_actors_images(actors_data)));
        //add recommand api call
        let recommendation_endpoint = `https://api.themoviedb.org/3/movie/551/recommendations?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        let recommendation_response = await (await fetch(recommendation_endpoint)).json();
        // let recommendation_fixed = recommendation_response.results;
        // let recommendation_fixed_again = fix_recomss_images(recommendation_fixed);
        dispatch(fetchRecommendation(fix_recomss_images(recommendation_response)));
        //the images api call
        let images_endpoint = `https://api.themoviedb.org/3/movie/${newmovieId}/images?api_key=8363ff1f821b3c4a310b38701890d3ba`;
        const images_response = await (await fetch(images_endpoint)).json();
        dispatch(fetchImagesReady(fix_images_gallery(images_response.backdrops)));
        // dispatch(fetchImagesReady(images_response));
       
        

    }catch(err){
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
  export function fix_actors_images(actors) {

    for(let actor of actors)
    {
      if(actor.profile_path === null){
        actor.profile_path= `https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png`
      }
      else{
        actor.profile_path= `https://image.tmdb.org/t/p/w300${actor.profile_path}`;
      }
    }
    for(let i=0; i<actors.length; i++ )
    {
      if(i<6){
        actors[i].show = true;
      }
      else{
        actors[i].show = false;
      }
    }


  // console.log(data);
  return actors;
}
export function ShowAllActors(actors){
  try{
    dispatch(fetchMoviesStarted());
    const updatedArray = actors.map((actor) => {
      return {
        ...actor,
        show: true,
      };
    });
    dispatch(fetchActorsReady(updatedArray));
  // let tempArr= [];
  // for(let i=0; i<actors.length; i++ )
  //   {
  //     tempArr.push(actors[i]);
  //     tempArr[i].show = true;
  //   }
  
}
catch(err){
  dispatch(fetchMoviesFailed(err.errorMessage));
}
}
export function ShowLeadAcotrs(actors){
  // let tempArr= [];
  // for(let i=0; i<actors.length; i++ )
  //   {
  //     tempArr.push(actors[i]);
  //     if(i<6){
  //       tempArr[i].show = true;
  //     }
  //     else{
  //       tempArr[i].show = false;
  //     }
  //   }
  const updatedObjectsArray = actors.map((object, index) => {
    if (index < 6) {
      return {
        ...object,
        show: true,
      };
    } else {
      return {
        ...object,
        show: false,
      };
    }
  });
  dispatch(fetchActorsReady(updatedObjectsArray));
}


export function fix_recomss_images(recommendation) {
  for(let rec of recommendation.results)
  {
    if(rec.poster_path === null){
      rec.poster_path= `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
    }
    else{
      rec.poster_path= `https://image.tmdb.org/t/p/w300${rec.poster_path}`;
    }
  }
  return recommendation;
}
export function fix_images_gallery(images) {
  for(let img of images)
  {
    if(img.file_path === null){
      img.file_path= `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
    }
    else{
      img.file_path= `https://image.tmdb.org/t/p/w300${img.file_path}`;
    }
  }
  return images;
}

  function addCommas(number) {
    let numberArray =number.toString().split('');
    let commaCounter = 0;
    for (let i = numberArray.length - 1; i >= 0; i--) {
      if (commaCounter === 3) {
        numberArray.splice(i + 1, 0, ',');
        commaCounter = 0;
      }
      commaCounter++;
    }
    return numberArray.join('');
  }
  