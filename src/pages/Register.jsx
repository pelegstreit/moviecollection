import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {  useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Register = () => {
  const navigate= useNavigate();
  const [name, setName] = useState('');
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const myname = useSelector((state)=> state.user.name);
function handleSubmit(e){
e.preventDefault();
fetch("http://localhost:3030/register", {method:"POST",crossDomain: "true",headers: {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
},
body: JSON.stringify({
  name,
  mail,
  password,
}),
}) .then((res) => res.json()). then((data)=> {console.log(data, "user registered")});
console.log(name, mail, password);
}
useEffect(() => {console.log(myname) }, []);
  return (
 
  <Background>
   <Container>
      <Form onSubmit={handleSubmit}>
        <Headline>Register</Headline>
        <Input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} />
        <Input type="text" placeholder="Mail" onChange={(e)=> setmail(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        <Button type="submit">Sign up</Button>
        <Tag onClick={() => { navigate(`/login`)}}>Already User? Sign In</Tag>
      </Form>
     
    </Container>
  </Background>
 
  )
}

export default Register;

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

