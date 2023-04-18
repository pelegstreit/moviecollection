import {  useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { fetch_the_movie,nextImage, prevImage, ShowLeadAcotrs, ShowAllActors,fetchActorsReady } from '../state/amovie.slice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


const MoviePage = () => {

    let filterStat = useRef("popular");
    const input = useRef(null);
    const pageNumber = useRef(1);
    const backgroundimg= useRef(``);
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.items);
    const totalPages = useSelector((state) => state.movies.pages);
    let amovie = useSelector((state) => state.amovie);
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    let filtered;
    const {movieId}= useParams(); 
    const navigate= useNavigate();
    let ActorsFilter= useRef("showLead");
    const name = useSelector((state)=> state.user.name);

    const currentIndex = useSelector((state) => state.amovie.galleryIndex);
    const images = useSelector((state) => state.amovie.images);
    const currentImage = images[currentIndex];
    let currentActors = useSelector((state) => state.amovie.actors_list);
  
    function handleNext() {
      dispatch(nextImage());
    }
  
    function handlePrev() {
      dispatch(prevImage());
    }


    function allclick(actors) {
      for(let i=0; i<actors.length; i++ )
      {
        actors[i].show = true;
      }
    dispatch(fetchActorsReady(currentActors));
    }

    function Leadclick(actors) {
        for(let i=0; i<actors.length; i++ )
    {
      if(i<6){
        actors[i].show = true;
      }
      else{
        actors[i].show = false;
      }
    }
  dispatch(fetchActorsReady(currentActors));
     
    }
   
    useEffect(() => {
      // console.log("current movieID:",amovie.movieId);
        dispatch(fetch_the_movie(amovie.movieId));
        filtered = amovie.actors_list.filter((obj) => obj.gender=== 1);
        // console.log("movie:", amovie);
        backgroundimg.current = amovie.theMovie.backdrop_path;
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 100) {
            setBackgroundColor("whitesmoke");
            filtered = amovie.actors_list.filter((obj) => obj.gender=== 1);
            // console.log("white");
          } else {
            setBackgroundColor(`transparent`);
            // console.log(`transparent`);
          }
        };
        window.addEventListener("scroll", handleScroll);
        fetch("http://localhost:3030/userdata", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData"); });
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    
      useEffect(() => {
        filtered = amovie.actors_list.filter((obj) => obj.show=== true);
        console.log("actors:", currentActors);
      }, [amovie])
    
      const update_list = () => {
        const txt = input.current.value;
        if (txt !== ``) {
          dispatch(search_movie(txt));
        }
        else {
          dispatch(fetch_movie(filterStat.current, pageNumber.current));
        }
      }
     
  
  
  
 
return (
    <>
  <div style={{ backgroundImage:`url(${amovie.theMovie.backdrop_path})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
  }}>
      <Top bg={backgroundColor}>
        <Logo src={'https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'} onClick={() => { navigate(`/`)}}/>
        <HomeButton>BlockBuster</HomeButton>
        <Search ref={input} onChange={update_list} placeholder="Search by a movie title"></Search>
        <Hello>Hello {name}</Hello>
        <MyWatchlist onClick={() => { navigate(`/watchlist`)}}>My watch list</MyWatchlist>
        <MoviesButton onClick={() => { navigate(`/`)}}>📄 MOVIES</MoviesButton>
        <Git src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} onClick={() => { window.location.href ='https://github.com/pelegstreit'}}/>
        <Signin onClick={() => { navigate(`/login`)}}>SIGN IN</Signin>
      </Top>
      <Themovie>
      <Poster src={amovie.theMovie.poster_path} />
      <Wrapper>
      <MovieName>{amovie.theMovie.original_title}</MovieName>
      <Votes>{amovie.theMovie.vote_average}</Votes>
      <Tagline>{amovie.theMovie.tagline} </Tagline>
      <Watchlist>Add to my Watchlist</Watchlist>
      <Description>{amovie.theMovie.overview} </Description>
      <Genrestitle>Genres:</Genrestitle>
      {
        amovie.theMovie.genres?.map((gene) => 
        <Genres key={gene}>{gene}</Genres>
        )
      }
      <DetaielsLine>
      <DetailsReleaseDate>Release date: {amovie.theMovie.release_date}</DetailsReleaseDate>
      <DetailsDuration>Duration: {amovie.theMovie.runtime}</DetailsDuration>
      <DetailsBudget>Budget: {amovie.theMovie.budget}$ </DetailsBudget>
      </DetaielsLine>
      </Wrapper>
      </Themovie>
      <ImageWrapper>
      <PrevButton onClick={handlePrev}>&larr;</PrevButton>
        <ViewImg src={currentImage.file_path} />
        <NextButton onClick={handleNext}>&rarr;</NextButton>
      </ImageWrapper>
      <Actors>
        <NiceTitle>Actors</NiceTitle> 
        <ShowMain onClick={() => Leadclick(amovie.actors_list)}> Show lead</ShowMain>
        <ShowAll onClick={() => allclick(amovie.actors_list)}>Show All</ShowAll>
        {  
          amovie.actors_list?.map((actor) => {
            if(actor.show=== true) {
              return (
            <ActorCard key={actor.id}>
            <ActorImg src={actor.profile_path} />
            <ActorName>{actor.name}</ActorName>
            <ActorRole>{actor.character}</ActorRole>
            </ActorCard>);
            }
})
        }
      </Actors>

      <RECOMMENDATIONS>
      <NiceTitle2>Recommedations</NiceTitle2>
      {
          amovie.recommendation.results?.map((obj) =>
            <MovieCard key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}>
              <Rec_Poster src={obj.poster_path} />
              <Title>{obj.title}</Title>
              <Rec_Votes>{obj.vote_average}</Rec_Votes>
              {/* <Genere>{obj.genre_ids}</Genere> */}
            </MovieCard>
          )
        }
      </RECOMMENDATIONS>
      </div>
      </>
 
  )
}

export default MoviePage;



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

///movie zone
const Themovie = styled.div`
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
const Wrapper= styled.div`
  display: flex;
  /* flex-direction:column; */
  flex-wrap: wrap;
  /* border: 1px solid green; */
  width:100%;

`
const Poster = styled.img`
`;
const MovieName = styled.div`
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
const Votes = styled.div`
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
const Tagline = styled.div`
font-size: 2.3rem;
margin-left: 1rem;
margin-top:0rem;
margin-bottom: 0.5rem;
width: 85%;
color: whitesmoke;
/* border: 1px solid blue; */
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Watchlist = styled.button`
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
const Description = styled.div`
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
const Genrestitle= styled.div`
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
const Genres= styled.div`
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
const DetaielsLine= styled.div`
width: 100%;
background-color:black;
display: flex;
font-family:Arial, Helvetica, sans-serif;
padding: 0.5rem;
align-items: center;
/* height: fit-content; */
`
const DetailsReleaseDate = styled.div`
color: whitesmoke;
font-size: 1.8rem;
margin-left: 1rem;
`
const DetailsDuration = styled.div`
color: whitesmoke;
font-size: 1.8rem;
margin-left: 3rem;
`
const DetailsBudget= styled.div`
color: whitesmoke;
font-size: 1.8rem;
margin-left: 3rem;
`
/////
const ViewImg = styled.img`
width: 100%;
`;
///actors zone
const Actors = styled.div`
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
const NiceTitle = styled.div`
  color:silver;
  font-size: 3rem;
  width:70%;
  margin-left:1rem;
`
const ActorCard = styled.div`
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
const ActorImg = styled.img`
width:100%;
height: 80%;
`;
const ActorName = styled.div`
font-size: 1.4rem;
margin-bottom: 0.5rem;
width: 100%;
color:white;
text-align: center;
/* border:1px solid blue; */

`;
const ActorRole = styled.div`
font-size: 1.2rem;
margin-bottom: 0.5rem;
width: 100%;
color:white;
text-align: center;
`;
const ShowMain = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: green;
border-radius: 15%;
/* background-color: ${({ bg }) => bg === 'showAll' ? `turquoise` : `grey`}; */
`;
const ShowAll = styled.button`
font-size: 2rem;
width: 125px;
height: 50px;
cursor: pointer;
background-color: white;
border-radius: 15%;
/* background-color: ${({ bg }) => bg === 'showAll' ? `turquoise` : `grey`}; */
`;

//////

///galerry zone
const ArrowButton = styled.button`
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
const PrevButton = styled(ArrowButton)`
  left: 0;
`;

const NextButton = styled(ArrowButton)`
  right: 0;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-top:2rem;
  margin-left: 5%;
`;

/////

///recomddation

const RECOMMENDATIONS = styled.div`
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
const NiceTitle2 = styled.div`
  color:silver;
  font-size: 3rem;
  width:90%;
  margin-left:10px;
`
const MovieCard = styled.div`
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
const Rec_Poster = styled.img`
`;

const Title = styled.div`
font-size: 1.8rem;
margin-bottom: 0.5rem;
width: 85%;
color:white;
margin-left: 0.2rem;
`;
const Rec_Votes = styled.div`
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
const Genere = styled.div`
font-size: 1.5rem;
color:white
`;


//////