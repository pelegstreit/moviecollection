import styled from "styled-components";

export const Background= styled.div`
 background-image: url('src/images/background1.jpg');
 background-size: cover;
 background-position: center center;
 background-attachment: fixed;
 width: 100%;
 height: 100%;
`;
///actor zone
export const TheActor = styled.div`
width: 90%;
/* height:400px; */
height: fit-content;
/* border: 1px double red; */
font-family: "Roboto", sans-serif;
display: flex;
/* flex-wrap: wrap; */
flex-direction: column;
margin-top: 0rem;
padding-top: 0px;
margin-left: 5%;
margin-right: 5%;
background-color: #00000089;
@media all and (min-width: 767px){
  flex-direction: row;

}
`;
export const Wrapper = styled.div`
  display: flex;
  /* flex-direction:column; */
  flex-wrap: wrap;
  /* border: 1px solid green; */
  width:100%;

`
export const Poster = styled.img`
width:60%;
margin-left:20%;
margin-right:20%;
@media all and (min-width: 767px){
  width:auto;
  margin-left:0;
  margin-right:0;
}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`;
export const ActorName = styled.div`
/* border: 1px solid blue; */
width: 90%;
height:fit-content;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-shadow: 2px 2px #333;
font-Weight: bold;
margin-top:1rem;
margin-bottom: 1rem;
margin-left: 1rem;
color: #dfdf00;
font-size: 3rem;
letter-Spacing: 1px;

 @media all and (min-width: 767px){
  font-size: 3rem;
letter-Spacing: 1px;
 }
@media all and (min-width: 990px){
  font-size: 4rem;
}
 @media all and (min-width: 1175px){
  font-size: 5rem;
  letter-Spacing: 1px;
 }
`
export const Votes = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* position: relative; */
padding:0;
font-size: 1.4rem;
height: 4rem;
width: 4rem;
border: green 3px solid;
border-radius: 50%;
color: white;
/* margin-left: 50%; */

@media all and (min-width: 767px){
  font-size: 1.4rem;
height: 4rem;
width: 4rem;
border: green 3px solid;
}
@media all and (min-width: 990px){
  font-size: 1.5rem;
height: 5rem;
width: 5rem;

}
@media all and (min-width: 1175px){
  font-size: 2rem;
height: 6rem;
width: 6rem;
} 
`;
export const Description = styled.div`
font-size: 1.4rem;
margin-left: 1rem;
margin-bottom: 0.5rem;
width: 80%;
color: whitesmoke;
/* border: 1px solid blue; */
margin-top: 2rem;
font-family:Arial, Helvetica, sans-serif;
width:100%;
@media all and (min-width: 767px){
  font-size: 1.4rem;
}
 @media all and (min-width: 990px){
  font-size: 1.6rem;
 }
 @media all and (min-width: 1175px){
  font-size: 1.5rem;
 }
`
export const DetaielsLine = styled.div`
width: 100%;
background-color:black;
display: flex;
font-family:Arial, Helvetica, sans-serif;
padding: 0.5rem;
align-items: center;
/* height: fit-content; */
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`
export const DetailsPlace_of_birth = styled.div`
color: whitesmoke;
font-size: 1.6rem;
margin-left: 1rem;
@media all and (min-width: 767px){}
 @media all and (min-width: 990px){font-size: 1.5rem;}
 @media all and (min-width: 1175px){
  font-size: 1.8rem;
margin-left: 3rem;
 }
`
export const DetailsBirthday = styled.div`
color: whitesmoke;
font-size: 1.6rem;
margin-left: 1rem;
@media all and (min-width: 767px){}
 @media all and (min-width: 990px){font-size: 1.5rem;}
 @media all and (min-width: 1175px){
  font-size: 1.8rem;
margin-left: 3rem;
 }
`
export const DetailsDeathday = styled.div`
color: whitesmoke;
font-size: 1.6rem;
margin-left: 1rem;
@media all and (min-width: 767px){}
 @media all and (min-width: 990px){font-size: 1.5rem;}
 @media all and (min-width: 1175px){font-size: 1.8rem;
margin-left: 3rem;}
`
/////

///Credits
export const Credits = styled.div`
background-color:white;
width: 90%;
height:fit-content;
/* border: 1px double red; */
font-family: "Roboto", sans-serif;
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin-top: 2rem;
padding-top: 0px;
margin-left: 5%;
margin-right: 5%;
align-items:center;
justify-content: center;
`;
export const CreditTitle = styled.div`
  font-size: 3rem;
  width:90%;
  margin-left:1rem;
  color:  #888888;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
`
export const MovieCard = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 1rem;
margin-left: 1rem;
width: 12rem;
height: 23rem;
background-color: black;
font-size: 1rem;
cursor: pointer;
/* border: 1px solid green; */
&:hover{
  margin-top: 0px;
}
// @media all and (min-width: 767px){}
// @media all and (min-width: 990px){}
@media all and (min-width: 1175px){
  width: 15rem;
height: 28rem;
}

`;
export const Credit_Poster = styled.img`
width:100%;
height: 80%;
`;
export const Title = styled.div`
font-size: 1.4rem;
margin-bottom: 0.5rem;
width: 85%;
color:white;
margin-left: 0.2rem;

@media all and (min-width: 1175px){
  font-size: 1.5rem;}
`;
export const FirstLine= styled.div`
display: flex;
flex-direction:row;
width:100%;
height: fit-content;
/* border: 1px solid red; */
`;
export const Credit_Votes = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* position: relative; */
padding:0;
font-size: 1rem;
height: 20px;
width: 20px;
border: grey 2px solid;
border-radius: 50%;
color: yellow;
/* background-color: black; */
/* margin-left: 8rem; */
/* margin-top: -20rem; */
font-weight:bold;
@media all and (min-width: 767px){
  font-size: 1.5rem;
height: 30px;
width: 30px;
border: grey 3px solid;
}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
font-size: 1.5rem;
height: 30px;
width: 30px;
border: grey 3px solid;
}
`;
export const Genere = styled.div`
font-size: 1.5rem;
color:white
`;


