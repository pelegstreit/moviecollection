import styled from "styled-components";

export const Background= styled.div`
 background-image: url('https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg');
 background-size: cover;
`;
///movie zone
export const Themovie = styled.div`
width: 90%;
/* height:400px; */
height: fit-content;
/* border: 1px double red; */
font-family: "Roboto", sans-serif;
display: flex;
/* flex-wrap: wrap; */
flex-direction: row;
margin-top: 0rem;
padding-top: 0px;
margin-left: 5%;
margin-right: 5%;
background-color: #00000089;
`;
export const Wrapper= styled.div`
  display: flex;
  /* flex-direction:column; */
  flex-wrap: wrap;
  /* border: 1px solid green; */
  width:100%;

`
export const Poster = styled.img`
`;
export const MovieName = styled.div`
font-size: 5rem;
width: 100%;
/* margin-left: 1rem; */
margin-top:1rem;
margin-bottom: 1rem;
margin-left: 1rem;
color: #dfdf00;
/* border: 1px solid blue; */
height:fit-content;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-shadow: 2px 2px #333;
font-Weight: bold;
letter-Spacing: 1px;
`
export const Votes = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
padding:0;
font-size: 2rem;
height: 6rem;
width: 6rem;
border: green 4px solid;
border-radius: 50%;
color: white;
margin-left: 750px;
margin-top: 30px;
`;
export const Tagline = styled.div`
font-size: 2.3rem;
margin-left: 1rem;
margin-top:0rem;
margin-bottom: 0.5rem;
width: 85%;
color: whitesmoke;
/* border: 1px solid blue; */
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const Watchlist = styled.button`
/* font-size: 2rem;
width: fit-content;
height: 40px;
cursor: pointer;
border-radius: 8%;
border-color: transparent;
color: white;
margin-top:1rem; */
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
export const Description = styled.div`
font-size: 1.8rem;
margin-left: 1rem;
margin-bottom: 0.5rem;
width: 80%;
color: whitesmoke;
/* border: 1px solid blue; */
margin-top: 2rem;
font-family:Arial, Helvetica, sans-serif;
width:100%;
`
export const Genrestitle= styled.div`
font-size: 1.5rem;
margin-left: 1rem;
margin-bottom: 0.5rem;
color: whitesmoke;
/* border: 1px solid blue; */
margin-top: 1rem;
font-family:Arial, Helvetica, sans-serif;
width: fit-content;
height: fit-content;
padding: 0.5rem;
`
export const Genres= styled.div`
font-size: 1.5rem;
margin-left: 1rem;
margin-bottom: 0.5rem;
color: whitesmoke;
background-color:#c4c407;
border: 1px solid #c4c407;
margin-top: 1rem;
font-family:Arial, Helvetica, sans-serif;
padding: 0.5rem;
width: fit-content;
height: fit-content;
border-radius: 75%;
`
export const DetaielsLine= styled.div`
width: 100%;
background-color:black;
display: flex;
font-family:Arial, Helvetica, sans-serif;
padding: 0.5rem;
align-items: center;
/* height: fit-content; */
`
export const DetailsReleaseDate = styled.div`
color: whitesmoke;
font-size: 1.8rem;
margin-left: 1rem;
`
export const DetailsDuration = styled.div`
color: whitesmoke;
font-size: 1.8rem;
margin-left: 3rem;
`
export const DetailsBudget= styled.div`
color: whitesmoke;
font-size: 1.8rem;
margin-left: 3rem;
`
/////
export const ViewImg = styled.img`
width: 100%;
`;
///actors zone
export const Actors = styled.div`
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
export const NiceTitle = styled.div`
  color:silver;
  font-size: 3rem;
  width:70%;
  margin-left:1rem;
`
export const ActorCard = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 1rem;
margin-left: 1rem;
width: 15rem;
height: 28rem;
background-color:grey;
font-size: 1rem;
cursor: pointer;
/* border: 1px solid green; */


&:hover{
  margin-top: 0px;
}
`;
export const ActorImg = styled.img`
width:100%;
height: 80%;
`;
export const ActorName = styled.div`
font-size: 1.4rem;
margin-bottom: 0.5rem;
width: 100%;
color:white;
text-align: center;
/* border:1px solid blue; */

`;
export const ActorRole = styled.div`
font-size: 1.2rem;
margin-bottom: 0.5rem;
width: 100%;
color:white;
text-align: center;
`;
export const ShowMain = styled.button`
background-color: ${({ bg }) => bg === 'showLead' ? '#2ecc71' : '#e74c3c'};
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ShowAll = styled.button`
background-color: ${({ bg }) => bg === 'showAll' ? '#2ecc71' : '#e74c3c'};
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;



//////

///galerry zone
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;
export const PrevButton = styled(ArrowButton)`
  left: 0;
`;

export const NextButton = styled(ArrowButton)`
  right: 0;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-top:2rem;
  margin-left: 5%;
`;

/////

///recomddation

export const RECOMMENDATIONS = styled.div`
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
export const NiceTitle2 = styled.div`
  color:silver;
  font-size: 3rem;
  width:90%;
  margin-left:10px;
`
export const MovieCard = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 1rem;
margin-left: 1rem;
width: 18%;
height: 38rem;
background-color: black;
font-size: 1rem;
cursor: pointer;
/* border: 1px solid green; */


&:hover{
  margin-top: 0px;
}
`;
export const Rec_Poster = styled.img`
`;

export const Title = styled.div`
font-size: 1.8rem;
margin-bottom: 0.5rem;
width: 85%;
color:white;
margin-left: 0.2rem;
`;
export const Rec_Votes = styled.div`
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

//////

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
const Hello = styled.div`
font-size: 1.8rem;
/* margin-bottom: 0.5rem; */
/* width: 85%; */
margin-left: 20px;
width:30rem;
/* border: 1px solid red; */
color:white;
`;
const MyWatchlist = styled.button`
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
