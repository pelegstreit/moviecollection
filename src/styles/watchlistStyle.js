import styled from "styled-components";
export const Background = styled.div`
 background-image: url('src/images/background2.jpg');
 background-size: cover;
 /* background-position: center center; */
 background-attachment: fixed;
 width: 100%;
 height: 100%;
 min-height: 100vh;
`;

export const Movies = styled.div`
border: 1px double red;
width: 90%;
margin-top: 0rem;
padding-top: 0px;
margin-left: 5%;
margin-right: 5%;
font-family: "Roboto", sans-serif;
display: flex;
flex-wrap: wrap;
flex-direction: row;
`;

export const MovieCard = styled.div`
/* border: 1px solid green; */
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 25%;
margin-left: 25%;
width: 50%;
height: auto;
background-color: black;
font-size: 1rem;
cursor: pointer;
&:hover{
  margin-top: 0px;
}
@media all and (min-width: 767px){
  margin-right: 10%;
  margin-left: 10%;
  width: 30%;
}
@media all and (min-width: 990px){
  margin-right: 5%;
  margin-left: 5%;
  width: 20%;
}
@media all and (min-width: 1175px){
  margin-right: 2rem;
  margin-left: 2rem;
  width: 18rem;
}
`;
export const Poster = styled.img`
`;
export const FirstLine= styled.div`
display: flex;
flex-direction:row;
width:100;
height: fit-content;
`;
export const Title = styled.div`
font-size: 1.8rem;
margin-bottom: 0.5rem;
width: 85%;
color:white;
`;
export const Votes = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:0;
border-radius: 50%;
color: yellow;
border: grey 2px solid;

font-size: 1.2rem;
height: 3rem;
width: 3rem;
@media all and (min-width: 767px){
font-size: 1.2rem;
height: 3rem;
width: 3rem;
}
@media all and (min-width: 990px){
font-size: 1.2rem;
height: 3rem;
width: 3rem;
}
`;
export const Genere = styled.div`
font-size: 1.5rem;
color:white
`;

export const RemoveWatchlist = styled.button`
width: 90%;
background-color: red;
font-Weight:bold;
font-size: 1rem;
letter-Spacing:1px;
color:white;
padding: 4px;
border-Radius:5px;
border:none;
cursor:pointer;
margin-right:10px;
margin-left: 10px;
margin-top: auto;
margin-bottom:10px;
`;