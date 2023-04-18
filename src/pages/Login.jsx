import styled from "styled-components";
import {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName,updateMail,updateMovies} from "../state/user.slice";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
const Login = () => {
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const myname = useSelector((state)=> state.user.name);
  const mymail= useSelector((state)=> state.user.mail);
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
      // console.log("name:", data.data.name, "mail:", data.data.mail, "movie:", data.data.movie );
      if (data.status == "ok") {
        console.log("data:", data.data);
        dispatch(updateName(data.data.name));
        console.log("usercomponame:",myname);
        dispatch(updateMail(data.data.mail));
        console.log("usercompomail:",mymail);
        dispatch(updateMovies(data.data.movie));
        window.localStorage.setItem("data-name", data.data.name);
        console.log("local:", window.localStorage.getItem("data-name"));
        alert(`login was successful`);
        navigate(`/`);
      }
    });
    }
    useEffect(() => {
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
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <>
    <Background>
     <Container>
     {/* <Top bg={backgroundColor}>
        <Logo src={'https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'} onClick={() => { navigate(`/`)}}/>
        <HomeButton>BlockBuster</HomeButton>
        <Hello>Hello {myname}</Hello>
        <MoviesButton onClick={() => { navigate(`/`)}}>📄 MOVIES</MoviesButton>
        <Git src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} onClick={() => { window.location.href ='https://github.com/pelegstreit'}}/>
        <Signin onClick={() => { navigate(`/login`)}} >SIGN IN</Signin>
      </Top> */}
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
///top part
const Top = styled.div` 
width: 100%;
height: 100px;
/* font-family: "Roboto", sans-serif; */
display: flex;
flex-direction: row;
margin-top: 1rem;
padding-top: 0px;
/* border: 1px solid blue; */
align-items: center;
padding-left: 5%;
padding-right: 5%;
position: sticky;
top: 0;
background-color:  ${({ bg }) => bg  ? bg : bg};
`
const Logo = styled.img`
width: 90px;
height: auto;
cursor: pointer;
/* align-items: center; */

`;
const HomeButton = styled.button`
font-size: 3rem;
height: 60px;
cursor: pointer;
background-color: transparent;
color: #dfdf00;
border-color: transparent;
font-family: 'Courgette', cursive;
`
const Search = styled.input`
font-size: 4rem;
width: 340px;
height: 35px;
margin-left: 20px;
/* margin-right:400px; */
align-items: center;
/* border-radius: 10%; */
border-color: transparent;
font-size: 2rem;
`
const Hello = styled.div`
font-size: 1.8rem;
/* margin-bottom: 0.5rem; */
/* width: 85%; */
margin-left: 0.5rem;
width:30rem;
/* border: 1px solid red; */
color:white;
`;
const MoviesButton = styled.button`
font-size: 2rem;
/* width: 125px;
height: 60px; */
border-color: transparent;
cursor: pointer;
background-color: transparent;
color: white;
margin-left:200px;
/* border: 1px solid blueviolet; */
`
const Git = styled.img`
 width: 50px; 
cursor: pointer;
background-color: transparent;
color: white;
margin-left:auto;
/* margin-right:20px;  */
`
const Signin = styled.button`
font-size: 2rem;
width: 110px;
height: 40px;
cursor: pointer;
background-color: #fb5050;
border-radius: 15%;
border-color: transparent;
color: white;
margin-left:auto;
margin-right:0;
`
///
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color:white; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
`;
const Tag= styled.div`
 color: white;
 font-size: 2rem;
`;
const Headline= styled.div`
 color: white;
 font-size: 4rem;
 margin-bottom: 2rem;
`;
const Background= styled.div`
 background-image: url('https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg');
 background-size: cover;
`;