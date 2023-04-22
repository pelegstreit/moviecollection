import styled from "styled-components";
export const Background= styled.div`
 background-image: url('https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg');
 background-size: cover;
 min-height: 61rem;
`;
export const Top = styled.div` 
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
export const Logo = styled.img`
width: 90px;
height: auto;
cursor: pointer;
/* align-items: center; */

`;
export const HomeButton = styled.button`
font-size: 3rem;
height: 60px;
cursor: pointer;
background-color: transparent;
color: #dfdf00;
border-color: transparent;
font-family: 'Courgette', cursive;
`
export const Search = styled.input`
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
export const Hello = styled.div`
font-size: 1.8rem;
/* margin-bottom: 0.5rem; */
/* width: 85%; */
margin-left: 0.5rem;
width:30rem;
/* border: 1px solid red; */
color:white;
`;
export const MoviesButton = styled.button`
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
export const Git = styled.img`
width: 50px; 
cursor: pointer;
background-color: transparent;
color: white;
margin-left:auto;
/* margin-right:20px;  */
`
export const Signin = styled.button`
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
export const MyWatchlist = styled.button`
/* font-size: 2rem;

height: 40px;
cursor: pointer;
border-radius: 8%;
border-color: transparent;
color: white;
margin-top:1rem; */
width: 300px;
background-color: green;
margin-left: 1rem;
color:white;
padding: 4px;
border-Radius:5px;
border:none;
cursor:pointer;
font-Weight:bold;
letter-Spacing:1px;
`
////
////
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
border: 1px solid green;
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