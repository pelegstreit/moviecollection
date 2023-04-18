import {  useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { updateMovieId } from '../state/amovie.slice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {fetchUserMovies} from '../state/user.slice';
import { search_movie, fetch_movie} from '../state/movies.slice';
import {Top, Logo,HomeButton, Search, Hello,MoviesButton, Git,Signin,MyWatchlist,Movies,MovieCard,Poster,Title,Votes,Genere} from "../styles/watchlistStyle";


const Watchlist = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const input = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const myName = useSelector((state)=> state.user.name);
  const myMovies = useSelector((state)=> state.user.movie);
  const FullDetailedMovie =  useSelector((state)=> state.user.fullDetailsMovie);
  // const [userData, setUserData] = useState("");


  useEffect(() => {
    dispatch(fetchUserMovies(myMovies));
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackgroundColor("whitesmoke");
        console.log("white");
      } else {
        setBackgroundColor(`transparent`);
        console.log(`transparent`)
      }
    };
    window.addEventListener("scroll", handleScroll);
    fetch("http://localhost:3030/userdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("data"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData"); });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    console.log("mymovies " + FullDetailedMovie);
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
    <>
     <div style={{ backgroundImage:`url(https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
  }}>
    <Top bg={backgroundColor}>
        <Logo src={'https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'} onClick={() => { navigate(`/`)}}/>
        <HomeButton>BlockBuster</HomeButton>
        <Search ref={input} onChange={update_list} placeholder="Search by a movie title"></Search>
        <Hello>Hello {myName}</Hello>
        <MyWatchlist onClick={() => { navigate(`/watchlist`)}}>My watch list</MyWatchlist>
        <MoviesButton onClick={() => { navigate(`/`)}}>📄 MOVIES</MoviesButton>
        <Git src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} onClick={() => { window.location.href ='https://github.com/pelegstreit'}}/>
        <Signin onClick={() => { navigate(`/login`)}} >SIGN IN</Signin>
      </Top>
      <Movies>
        {/* <ul> */}
        {
          FullDetailedMovie?.map((obj) =>
            <MovieCard key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}>
              <Poster src={obj.poster_path} />
              <Title>{obj.original_title}</Title>
              <Votes>{obj.vote_average}</Votes>
              <Genere>{obj.genres}</Genere>
            </MovieCard>
          )
        }
        {/* </ul> */}
      </Movies>
      </div>
  </>
  )
}

export default Watchlist;

