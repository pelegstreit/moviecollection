import styled from "styled-components";

export const Background= styled.div`
 background-image: url('src/images/background1.jpg');
 background-size: cover;
 /* background-position: center center; */
 background-attachment: fixed;
 width: 100%;
 height: 100%;
`;

///filter part
 export const Filter = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left:5%;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  height: 4rem;
  width:fit-content;
  height: fit-content;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 15%;
`;
export const Popular = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'popular' ? `green` : `transparent`};
`;
export const Toprated = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'top_rated' ? `green` : `transparent`};
`;
export const Nowplaying = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'now_playing' ? `green` : `transparent`};
`;
export const Upcoming = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'upcoming' ? `green` : `transparent`};
`;
/////
/////movies part
export const Movies = styled.div`
width: 90%;
/* height:800px; */
/* border: 1px double red; */
font-family: "Roboto", sans-serif;
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
margin-left: 5%;
margin-right: 5%;
`;

export const MovieCard = styled.div`
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
/* border: 1px solid green; */
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
  margin-right: auto;
  margin-left: 5rem;
  width: 20rem;
}
`;
export const Poster = styled.img`
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
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
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`;
export const Votes = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* position: absolute; */
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
@media all and (min-width: 1175px){}
`;
export const Genere = styled.div`
font-size: 1.5rem;
color:white;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`;
/////
////pagination part
export const Pages = styled.ul` 
list-style-type: none;
display: flex;
flex-direction: row;
margin-top: 10rem;
margin-left:5%;
margin-right: 5%;
width: 90%;
height: 4rem;
/* border: 1px solid white; */
background-color: #0000008f;
align-items:center;
justify-content:center;`

export const Pagenum = styled.li`
  color:white;
  border: ${({ border, currentpage }) => border === currentpage ? `1px solid white` : `transparent`}; //give key
  font-size: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
`;
/////