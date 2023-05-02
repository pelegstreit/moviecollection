import {useSelector} from 'react-redux';
import {useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import {Container, Form, Input, Button, Tag, Headline, Background} from "../styles/registerStyle";
import Menu from './Menu';

const Register = () => {
  const navigate= useNavigate();

  const [name, setName] = useState('');
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');

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
// console.log(name, mail, password);
}
useEffect(() => {console.log(myname) }, []);
  return (
  <Background>
    <Menu></Menu>
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