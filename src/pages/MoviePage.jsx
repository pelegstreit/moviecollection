import {useRef, useEffect } from 'react'
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import {fetchUserMovies} from "../state/user.slice";
import { fetch_the_movie,nextImage, prevImage,fetchActorsReady,updateMovieId } from '../state/amovie.slice';
import {Themovie,FirstLine, Wrapper, Poster, MovieName, Votes, Tagline, Watchlist, Description, Genrestitle, Genres, DetaielsLine, DetailsReleaseDate, DetailsDuration, DetailsBudget, ViewImg, Actors, ActorsTitle, ActorCard, ActorImg, ActorName, ActorRole, ShowMain, ShowAll, ArrowButton, PrevButton, NextButton, ImageWrapper, RECOMMENDATIONS, NiceTitle2, MovieCard, Rec_Poster, Title, Rec_Votes, Genere} from "../styles/MoviePageStyle";
import Menu from './Menu';

const MoviePage = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  let amovie = useSelector((state) => state.amovie);
  let aMovieID= useSelector((state) => state.amovie.movieId);
  const userMovies = useSelector((state)=> state.user.movie);
  const currentIndex = useSelector((state) => state.amovie.galleryIndex);
  const images = useSelector((state) => state.amovie.images);
  const CustomBG= useSelector((state) => state.amovie.bgImg);
  let currentActors = useSelector((state) => state.amovie.actors_list);

  let ActorsFilter= useRef("showLead");

  let filtered;
  const currentImage = images[currentIndex];


    
  
    function handleNext() {
      dispatch(nextImage());
    }
    function handlePrev() {
      dispatch(prevImage());
    }


  function ShowAllActors(actors){
    try{
      const updatedArray = actors.map((actor) => {
        return {
          ...actor,
          show: true,
        };
      });
      ActorsFilter.current = "showAll";
      dispatch(fetchActorsReady(updatedArray));
  }
  catch(err){
  }
  }
  function ShowLeadAcotrs(actors){
    const updatedActorssArray = actors.map((actor, index) => {
      if (index < 6) {
        return {
          ...actor,
          show: true,
        };
      } else {
        return {
          ...actor,
          show: false,
        };
      }
    });
    ActorsFilter.current = "showLead";
    dispatch(fetchActorsReady(updatedActorssArray));
  }
  function addToWatchList(){
    let copyArr=userMovies.map((num)=> num);
    copyArr.push(amovie.movieId);
    fetch("http://localhost:3030/addmovie", {
      method: "PUT",
      crossDomain:"true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"), movieIDObj: {"movie":copyArr}
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       });
  };

   
    useEffect(() => {
        dispatch(fetch_the_movie(amovie.movieId));
        filtered = amovie.actors_list.filter((obj) => obj.gender=== 1);      
      }, []);
    
    
      useEffect(() => {
        filtered = amovie.actors_list.filter((obj) => obj.show=== true);
      }, [amovie]);

      useEffect(() => {
        dispatch(fetch_the_movie(amovie.movieId));
      }, [aMovieID])
 
return (
    <Background CustomBG={CustomBG}>
      <Menu></Menu>
      <Themovie>
      <Poster src={amovie.theMovie.poster_path} />
      <Wrapper>
      <MovieName>{amovie.theMovie.original_title}</MovieName>
      <Votes>{amovie.theMovie.vote_average}</Votes>
      <Tagline>{amovie.theMovie.tagline} </Tagline>
      <Watchlist onClick={() => {addToWatchList(); dispatch(fetchUserMovies(amovie.movieId)); }}>Add to my Watchlist</Watchlist>
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
        {/* <ViewImg src={currentImage.file_path} /> */}
        <NextButton onClick={handleNext}>&rarr;</NextButton>
      </ImageWrapper>
      <Actors>
        <ActorsTitle>Actors</ActorsTitle> 
        <ShowMain bg={ActorsFilter.current} onClick={() => {ShowLeadAcotrs(currentActors);}}> Show lead</ShowMain>
        <ShowAll bg={ActorsFilter.current} onClick={() => {ShowAllActors(currentActors); }}>Show All</ShowAll>
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
      <NiceTitle2> Our Recommedations</NiceTitle2>
      {
          amovie.recommendation.results?.map((obj) =>
            <MovieCard key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}>
              <Rec_Poster src={obj.poster_path} />
              <FirstLine>
              <Title>{obj.title}</Title>
              <Rec_Votes>{obj.vote_average}</Rec_Votes>
              </FirstLine>
              {/* <Genere>{obj.genre_ids}</Genere> */}
            </MovieCard>
          )
        }
      </RECOMMENDATIONS>
      </Background>
 
  )
}

export default MoviePage;

export const Background= styled.div`

 background-size: cover;
 background-attachment: fixed;
 width: 100%;
 height: 100%;
`;