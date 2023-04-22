import {  useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { search_movie, fetch_movie} from '../state/movies.slice';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import {Top, Logo, HomeButton, Search, Hello, MoviesButton, Git, Signin, Watchlist} from "../styles/menuStyle";

const Menu = () => {
const dispatch = useDispatch();
  const navigate= useNavigate();
  let filterStat = useRef("popular");
  const input = useRef(null);
  const pageNumber = useRef(1);
  const movies = useSelector((state) => state.movies.items);
  const totalPages = useSelector((state) => state.movies.pages);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const name = useSelector((state)=> state.user.name);
  const mymovies = useSelector((state)=> state.user.movie);
  const [userData, setUserData] = useState("");
  const fullDetailsMovie =  useSelector((state)=> state.user.fullDetailsMovie);


  useEffect(() => {
    dispatch(fetch_movie(filterStat.current, pageNumber.current));
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackgroundColor("whitesmoke");
        // console.log("white");
      } else {
        setBackgroundColor(`transparent`);
        // console.log(`transparent`);
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
        // console.log(data, "userData");
       });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        <Top bg={backgroundColor}>
        <Logo src={'https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'} onClick={() => { navigate(`/`)}}/>
        <HomeButton>BlockBuster</HomeButton>
        <Search ref={input} onChange={update_list} placeholder="Search by a movie title"></Search>
        <Hello>Hello {name}</Hello>
        <Watchlist onClick={() => { navigate(`/watchlist`)}}>My watch list</Watchlist>
        <MoviesButton onClick={() => { navigate(`/`)}}>📄 MOVIES</MoviesButton>
        <Git src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} onClick={() => { window.location.href ='https://github.com/pelegstreit'}}/>
        <Signin onClick={() => { navigate(`/login`)}} >SIGN IN</Signin>
      </Top>
    )
}
export default Menu;
