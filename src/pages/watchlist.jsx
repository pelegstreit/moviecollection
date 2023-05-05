import {  useState, useRef, useEffect } from 'react'
import {updateMovieId} from "../state/amovie.slice";
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {fetchUserMovies,deletemovie} from '../state/user.slice';
import { search_movie, fetch_movie} from '../state/movies.slice';
import {Background, Movies,FirstLine, MovieCard,Poster,Title,Votes,Genere, RemoveWatchlist} from "../styles/watchlistStyle";
import Menu from './Menu';
import { sendMovies } from '../network/imdbNetwork';

const Watchlist = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const myMovies = useSelector((state)=> state.user.movie);
  const fullDetailsMovie =  useSelector((state)=> state.user.fullDetailsMovie);
  const movieInstate = useSelector((state)=> state.amovie.movieID);


  const input = useRef(null);
  let dispatched = true;
  let duplicated= [];
 

  function RemoveFromWatchList(movieID){
    let copyArr=myMovies.filter((num)=> num!==movieID);
    console.log("arr after deleted movie:",copyArr);
    sendMovies(copyArr);
    dispatched = true;
    onlyOnce();
   
    // fetch("http://localhost:3030/addmovie", {
    //   method: "PUT",
    //   crossDomain:"true",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     token: window.localStorage.getItem("token"), movieIDObj: {"movie":copyArr}
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //    });
  

      
  }
  function onlyOnce(){
    if(dispatched){
      dispatched= false;
      for(let movie of myMovies){
        console.log("movie",movie);
        dispatch(fetchUserMovies(movie));
      }
    }
  }
   function ResetWatchListPage(id){
    console.log("received id:", id, "mymovies:", myMovies);
    dispatch(deletemovie(id));
    console.log("action reset. now mymovies:", myMovies);
    // onlyOnce();
  }

  useEffect(() => {    
    onlyOnce();
    // fetch("http://localhost:3030/userdata", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     token: window.localStorage.getItem("data"),
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "userData"); });
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    
  }, []);


  useEffect(() => {
  }, [myMovies])

  
  return (
    <Background>
 <Menu></Menu>
      <Movies>
        {
          fullDetailsMovie?.map((obj) =>{
          if(duplicated.includes(obj.id) === false){
            return (
            <MovieCard>
              <Poster src={obj.poster_path}  key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));  console.log("new movie id:",movieInstate );  navigate(`/movie/${obj.id}`)}}/>
              <FirstLine>
              <Title>{obj.original_title}</Title>
              <Votes>{obj.vote_average}</Votes>
              </FirstLine>
              <Genere>{obj.genres}</Genere>
              <RemoveWatchlist onClick={() => { RemoveFromWatchList(obj.id);}}>Remove from watch list</RemoveWatchlist>
              {/* ResetWatchListPage(obj.id); */}
            </MovieCard>)}}
          )
        }
      </Movies>
      </Background>
  )
}

export default Watchlist;

