import { createSlice } from "@reduxjs/toolkit";

const actor = createSlice({
    name: "actor",
    initialState: {
        actorId: 287,
        theActor: {},
        credits_list: [],
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        fetchActorStarted: (state) => {
            state.isLoading = true;
          },
          fetchActorFailed: (state, action) => {
            state.errorMessage = action.payload;
          },
          fetchActorReady(state, action) {
            state.theActor = action.payload;
            state.isLoading = false;
            state.errorMessage = "";
          },
          updateActorId:  (state, action) => {
            state.actorId = action.payload;
          },
          fetchCredits: (state, action) => {
            state.credits_list = action.payload;
          },
    
          
       
      
    }
})
export default actor.reducer;
export const {
    fetchActorStarted,
    fetchActorFailed,
    fetchActorReady,
    updateActorId,fetchCredits
} = actor.actions;



  export const fetch_the_actor = (newactorId)=> async (dispatch)=> {
    try{
        dispatch(fetchActorStarted());
        //the main actor api call
        let endpoint = `https://api.themoviedb.org/3/person/${newactorId}?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
        const response = await (await fetch(endpoint)).json();
        dispatch(fetchActorReady(fixActorDetails(response)));
       
        //the credits api call
        let credits_endpoint = `https://api.themoviedb.org/3/person/${newactorId}/combined_credits?api_key=8363ff1f821b3c4a310b38701890d3ba&language=en-US`;
        const credits_response = await (await fetch(credits_endpoint)).json();
        const credits_data= credits_response.cast;
        dispatch(fetchCredits(fixCreditsDetails(credits_data)));
    }catch(err){
        dispatch(fetchActorFailed(err.errorMessage));
    }
  }

  export function fixActorDetails(actor) {
      
      let newBirthArr= actor.birthday.split(`-`);
      actor.birthday= `${newBirthArr[2]}/${newBirthArr[1]}/${newBirthArr[0]}`;
      if(actor.deathday !== null)
      {
         let newDeathArr= actor.deathday.split(`-`);
          actor.deathday= `${newDeathArr[2]}/${newDeathArr[1]}/${newDeathArr[0]}`;
      }
      actor.popularity = Math.round(actor.popularity * 10) / 10;
      if(actor.profile_path === null){
        actor.profile_path= `https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png`;
      }
      else{
        actor.profile_path = `https://image.tmdb.org/t/p/w300${actor.profile_path}`;
      }
    return actor;
  }



export function fixCreditsDetails(credits) {
  for(let credit of credits)
  {
    if(credit.poster_path === null){
        credit.poster_path= `https://edit.org/images/cat/movies-short-films-posters-big-2021083116.jpg`;
    }
    else{
        credit.poster_path= `https://image.tmdb.org/t/p/w300${credit.poster_path}`;
    }
    credit.vote_average = Math.round(credit.vote_average * 10) / 10;
  }
  return credits;
}


