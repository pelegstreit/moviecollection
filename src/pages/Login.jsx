import {useState,useEffect} from 'react';
import {useDispatch } from 'react-redux';
import { updateName,updateMail,updateMovies} from "../state/user.slice";
import {useNavigate } from 'react-router-dom';
import {Container, Form, Input, Button, Tag, Headline, Background} from "../styles/loginStyle";
import Menu from './Menu';

const Login = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
 
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
      if (data.status == "ok") {
        dispatch(updateName(data.data.name));
        dispatch(updateMail(data.data.mail));
        dispatch(updateMovies(data.data.movie));
        window.localStorage.setItem("data-name", data.data.name);
        window.localStorage.setItem("token", data.token);
        alert(`login was successful`);
        navigate(`/`);
      }
    });
    }
    useEffect(() => {}, []);


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