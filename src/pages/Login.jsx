import styled from "styled-components";
import {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName,updateMail,updateMovies, fetchUserMovies} from "../state/user.slice";
import {useNavigate } from 'react-router-dom';
import {Container, Form, Input, Button, Tag, Headline, Background} from "../styles/loginStyle";
import Menu from './Menu';

const Login = () => {
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const myname = useSelector((state)=> state.user.name);
  const mymail= useSelector((state)=> state.user.mail);
  const myMovies= useSelector((state)=> state.user.movie);
  const fullDetailsMovie =  useSelector((state)=> state.user.fullDetailsMovie);
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const navigate= useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3030/login", {method:"POST",crossDomain: "true",headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      mail,
      password,
    }),
    }) .then((res) => res.json()). then((data)=> {
      // console.log("name:", data.data.name, "mail:", data.data.mail, "movie:", data.data.movie);
      if (data.status == "ok") {
        // console.log("data:", data.data);
        dispatch(updateName(data.data.name));
        // console.log("usercomponame:",myname);
        dispatch(updateMail(data.data.mail));
        // console.log("usercompomail:",mymail);
        dispatch(updateMovies(data.data.movie));
        // console.log("usercompomaovies:",mymail);
        window.localStorage.setItem("data-name", data.data.name);
        window.localStorage.setItem("token", data.token);
        // console.log("my token -",window.localStorage.getItem("token"));
        // console.log("local:", window.localStorage.getItem("data-name"));
        alert(`login was successful`);
        navigate(`/`);
      }
    });
    }
    useEffect(() => {
      // const handleScroll = () => {
      //   const scrollPosition = window.scrollY;
      //   if (scrollPosition > 100) {
      //     setBackgroundColor("whitesmoke");
      //     console.log("white");
      //   } else {
      //     setBackgroundColor(`transparent`);
      //     console.log(`transparent`)
      //   }
      // };
      // window.addEventListener("scroll", handleScroll);
      // return () => {
      //   window.removeEventListener("scroll", handleScroll);
      // };
    }, []);


  return (
    <>
    <Background>
      <Menu></Menu>
     <Container>
      <Form onSubmit={handleSubmit}>
        <Headline>Sign in</Headline>
        <Input type="text" placeholder="Email" onChange={(e)=> setmail(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        <Button type="submit">Sign in</Button>
        <Tag onClick={() => { navigate(`/register`)}}>Not an User? Create an account</Tag>
      </Form>
     
    </Container>
    </Background>
  </>
  )
}

export default Login;