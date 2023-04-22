import styled from "styled-components";
///menu part
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
margin-right: 1rem;
margin-left: 1rem;
width: 18%;
height: auto;
background-color: black;
font-size: 1rem;
cursor: pointer;
/* border: 1px solid green; */


&:hover{
  margin-top: 0px;
}
`;
export const Poster = styled.img`
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
position: absolute;
padding:0;
font-size: 1.2rem;
height: 3rem;
width: 3rem;
border: grey 2px solid;
border-radius: 50%;
color: yellow;
margin-left: 162px;
margin-top: 308px;
`;
export const Genere = styled.div`
font-size: 1.5rem;
color:white;
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


///top part
const Top = styled.div` 
width: 100%;
height: 100px;
/* font-family: "Roboto", sans-serif; */
display: flex;
flex-direction: row;
/* margin-top: 1rem; */
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
margin-left: 20px;
width:30rem;
/* border: 1px solid red; */
color:white;
`;
const MoviesButton = styled.button`
font-size: 2rem;
/* width: 125px;
height: 60px; */
border-color: transparent;
/* border:1px solid blue; */
cursor: pointer;
background-color: transparent;
color: white;
/* margin-left:100px; */
margin-right: 20px;
/* border: 1px solid blueviolet; */
`
const Git = styled.img`
 width: 50px; 
cursor: pointer;
background-color: transparent;
color: white;
margin-left:auto;
margin-right:20px; 
`
const Signin = styled.button`
font-size: 2rem;
width: 150px;
height: 40px;
cursor: pointer;
background-color: #fb5050;
border-radius: 15%;
border-color: transparent;
color: white;
margin-left:auto;
margin-right:0;
`
const Watchlist = styled.button`
/* font-size: 2rem;
height: 40px;
cursor: pointer;
border-radius: 8%;
border-color: transparent;
color: white;
margin-top:1rem; */
font-size: 1.5rem;
width: 300px;
background-color: green;
margin-left: 10px;
color:white;
padding: 4px;
border-Radius:5px;
border:none;
cursor:pointer;
font-Weight:bold;
letter-Spacing:1px;
margin-right:10px;
`
///
