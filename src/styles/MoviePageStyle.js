import styled from "styled-components";

///movie zone
export const Themovie = styled.div`
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
export const MovieName = styled.div`
/* border: 1px solid blue; */
width: 100%;
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
margin-left: 88%;

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
export const FirstLine= styled.div`
display: flex;
flex-direction:row;
width:100;
height: fit-content;
`;
export const Tagline = styled.div`
font-size: 2.3rem;
margin-left: 1rem;
margin-top:-50px;
height: fit-content;
width: 60%;
color: whitesmoke;
/* border: 1px solid blue; */
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

 @media all and (min-width: 767px){
  font-size: 1.9rem;
  margin-top:-70px;
 }
 @media all and (min-width: 990px){
  font-size: 2.1rem;
 }
 @media all and (min-width: 1175px){
  font-size: 2.3rem;
 }
`
export const Watchlist = styled.button`
background-color: green;
margin-left: 1rem;
margin-top: -20px;
color:white;
padding: 0.5px;
border-Radius:3px;
border:none;
cursor:pointer;
font-Weight:bold;
letter-Spacing:1px;
font-size: 1rem;
margin-right:50%;
 @media all and (min-width: 767px){
  font-size: 1.4rem;
  padding: 2px;
 }
 @media all and (min-width: 990px){
  border-Radius:5px;
  padding: 3px;
 }
 @media all and (min-width: 1175px){
  padding: 4px;
 }

`
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
  font-size: 2rem;
 }
`
export const Genrestitle = styled.div`
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
 @media all and (min-width: 767px){
  font-size: 1.4rem;
 }
 @media all and (min-width: 990px){
  font-size: 1.5rem;
 }
 @media all and (min-width: 1175px){
  font-size: 1.5rem;
 }
`
export const Genres = styled.div`
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
 @media all and (min-width: 767px){font-size: 1.4rem;}
 @media all and (min-width: 990px){
  font-size: 1.5rem;
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
export const DetailsReleaseDate = styled.div`
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
export const DetailsDuration = styled.div`
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
export const DetailsBudget = styled.div`
color: whitesmoke;
font-size: 1.6rem;
margin-left: 1rem;
@media all and (min-width: 767px){}
 @media all and (min-width: 990px){font-size: 1.5rem;}
 @media all and (min-width: 1175px){font-size: 1.8rem;
margin-left: 3rem;}
`
/////
export const ViewImg = styled.img`
width: 100%;
`;
///actors zone
export const Actors = styled.div`
background-color: rgba(255,255,255,0.9);
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
export const ActorsTitle = styled.div`
  font-size: 2rem;
  width:60%;
  margin-left:1rem;
  color:  #888888;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  /* border:1px solid blue; */
@media all and (min-width: 767px){
  font-size: 3rem;
  /* width:70%; */
}
@media all and (min-width: 990px){
   width:75%;
}
@media all and (min-width: 1175px){}
`
export const ShowMain = styled.button`
background-color: ${({ bg }) => bg === 'showLead' ? '#2ecc71' : '#e74c3c'};
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  @media all and (min-width: 767px){
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 24px;
  }
  @media all and (min-width: 990px){
    font-size: 18px;
    padding: 8px 16px;
    border-radius: 24px;
  }
  @media all and (min-width: 1175px){}
`;
export const ShowAll = styled.button`
background-color: ${({ bg }) => bg === 'showAll' ? '#2ecc71' : '#e74c3c'};
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
@media all and (min-width: 767px){
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 24px;
}
@media all and (min-width: 990px){
  font-size: 18px;
    padding: 8px 16px;
    border-radius: 24px;
}
@media all and (min-width: 1175px){}
`;
export const ActorCard = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10%;
margin-left: 10%;
width: 15rem;
height: 28rem;
background-color:grey;
font-size: 1rem;
cursor: pointer;
/* border: 1px solid green; */
&:hover{
  margin-top: 0px;
}
@media all and (min-width: 767px){
width: 20rem;
height:auto;
/* height: 30rem; */
margin-right:  1rem;
margin-left: 1rem;
}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
  width: 15rem;
  height: 28rem;
}
`;
export const ActorImg = styled.img`
width:100%;
height: 80%;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`;
export const ActorName = styled.div`
font-size: 1.2rem;
margin-bottom: 0.5rem;
width: 100%;
color:white;
text-align: center;
/* border:1px solid blue; */
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
  font-size: 1.4rem;
}
`;
export const ActorRole = styled.div`
font-size: 0.9rem;
margin-bottom: 0.5rem;
width: 100%;
color:white;
text-align: center;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
  font-size: 1.2rem;
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
export const Rec_Poster = styled.img`
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
  font-size: 1.8rem;}
`;
export const Rec_Votes = styled.div`
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


