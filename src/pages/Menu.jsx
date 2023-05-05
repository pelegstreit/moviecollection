import {  useState, useRef, useEffect } from 'react'
import { search_movie, fetch_movie} from '../state/movies.slice';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import {Top, Logo, HomeButton, Search, Hello, MoviesButton, Git, Signin, Watchlist} from "../styles/menuStyle";
import LogoImg from "../images/SiteLogo.png";
import GitLogo from "../images/GitHub.png";

const Menu = () => {
const dispatch = useDispatch();
  const navigate= useNavigate();

  let filterStat = useRef("popular");
  const input = useRef(null);
  const pageNumber = useRef(1);

  const name = useSelector((state)=> state.user.name);
  const mail = useSelector((state)=> state.user.mail);
  
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  function checkIfLogged(){
    if(mail)
    {
      navigate(`/watchlist`);
    }
    else{
      alert("Please log in!");
    }
  }

  useEffect(() => {
    dispatch(fetch_movie(filterStat.current, pageNumber.current));
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 90) {
        setBackgroundColor("whitesmoke");
      } else {
        setBackgroundColor(`transparent`);
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
        console.log(data);
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
        <Logo src={LogoImg} onClick={() => { navigate(`/`)}}/>
        <HomeButton>BlockBuster</HomeButton>
        <Search ref={input} onChange={update_list} placeholder="Search by a movie title"></Search>
        <Hello>Hello {name}</Hello>
        <Watchlist onClick={() => { checkIfLogged()}}>My watch list</Watchlist>
        <MoviesButton onClick={() => { navigate(`/`)}}>📄 MOVIES</MoviesButton>
        <Git src={GitLogo} onClick={() => { window.location.href ='https://github.com/pelegstreit'}}/>
        <Signin onClick={() => { navigate(`/login`)}}>SIGN IN</Signin>
      </Top>
    )
}
export default Menu;
