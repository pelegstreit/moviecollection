import {  useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { updateMovieId } from '../state/amovie.slice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {fetchUserMovies,ResetFullDetails,deletemovie} from '../state/user.slice';
import { search_movie, fetch_movie} from '../state/movies.slice';
import {Background, Movies,MovieCard,Poster,Title,Votes,Genere, RemoveWatchlist} from "../styles/watchlistStyle";
import Menu from './Menu';

const Watchlist = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const input = useRef(null);
  let dispatched = true;
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const myName = useSelector((state)=> state.user.name);
  const myMovies = useSelector((state)=> state.user.movie);
  const fullDetailsMovie =  useSelector((state)=> state.user.fullDetailsMovie);
  // const [userData, setUserData] = useState("");
  let duplicated= [];

  function RemoveFromWatchList(movieID){
    // dispatch(addNewMovie(amovie.movieId));
    console.log("arr before deleted movie:",myMovies);
    let copyArr=myMovies.filter((num)=> num!==movieID);
    console.log("arr after deleted movie:",copyArr);
    fetch("http://localhost:3030/addmovie", {
      method: "PUT",
      crossDomain:"true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"), movieIDObj: {"movie":copyArr}
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "addToWatchList");
       });
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
    // dispatch(ResetFullDetails());
    console.log("action reset. now mymovies:", myMovies);
    onlyOnce();
  }

  useEffect(() => {    
    onlyOnce();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackgroundColor("whitesmoke");
      } else {
        setBackgroundColor(`transparent`);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    // console.log("mymovies in watchlist page" + myMovies);
    // console.log("fulldetails in watchlist page" + fullDetailsMovie);
    console.log(fullDetailsMovie);
  }, [myMovies])

  const update_list = () => {
    const txt = input.current.value;
    if (txt !== ``) {
      dispatch(search_movie(txt));
    }
    else {
      dispatch(fetch_movie(filterStat.current, pageNumber.current));
    }
  }
  



  return (
    <Background>
 <Menu></Menu>
      <Movies>
        {
          fullDetailsMovie?.map((obj) =>{
          if(duplicated.includes(obj.id) === false){
            return (
            <MovieCard key={obj.id}>
              <Poster src={obj.poster_path} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}/>
              <Title>{obj.original_title}</Title>
              <Votes>{obj.vote_average}</Votes>
              <Genere>{obj.genres}</Genere>
              <RemoveWatchlist onClick={() => { RemoveFromWatchList(obj.id); ResetWatchListPage(obj.id); }}>Remove from watch list</RemoveWatchlist>
              {/* ResetWatchListPage(obj.id); */}
            </MovieCard>)}}
          )
        }
      </Movies>
      </Background>
  )
}

export default Watchlist;

