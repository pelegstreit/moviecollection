import {  useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { fetch_the_movie,nextImage, prevImage, ShowLeadAcotrs, ShowAllActors,fetchActorsReady } from '../state/amovie.slice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {Background,Themovie, Wrapper, Poster, MovieName, Votes, Tagline, Watchlist, Description, Genrestitle, Genres, DetaielsLine, DetailsReleaseDate, DetailsDuration, DetailsBudget, ViewImg, Actors, NiceTitle, ActorCard, ActorImg, ActorName, ActorRole, ShowMain, ShowAll, ArrowButton, PrevButton, NextButton, ImageWrapper, RECOMMENDATIONS, NiceTitle2, MovieCard, Rec_Poster, Title, Rec_Votes, Genere} from "../styles/MoviePageStyle";
import {fetchUserMovies} from "../state/user.slice";
import Menu from './Menu';

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
    const userMovies = useSelector((state)=> state.user.movie);
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
    // dispatch(addNewMovie(amovie.movieId));
    let copyArr=userMovies.map((num)=> num);
    copyArr.push(amovie.movieId);
    // console.log("arr to push:",copyArr);
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
        // console.log(data, "addToWatchList");

       });
      // dispatch(fetchUserMovies(amovie.movieId));
  }
   
    useEffect(() => {
      // console.log("current movieID:",amovie.movieId);
        dispatch(fetch_the_movie(amovie.movieId));
        filtered = amovie.actors_list.filter((obj) => obj.gender=== 1);
        // console.log("movie:", amovie);
        backgroundimg.current = amovie.theMovie.backdrop_path;
        // const handleScroll = () => {
        //   const scrollPosition = window.scrollY;
        //   if (scrollPosition > 100) {
        //     setBackgroundColor("whitesmoke");
        //     filtered = amovie.actors_list.filter((obj) => obj.gender=== 1);
        //     // console.log("white");
        //   } else {
        //     setBackgroundColor(`transparent`);
        //     // console.log(`transparent`);
        //   }
        // };
        // window.addEventListener("scroll", handleScroll);
        // fetch("http://localhost:3030/userdata", {
        //   method: "POST",
        //   crossDomain: true,
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //   },
        //   body: JSON.stringify({
        //     token: window.localStorage.getItem("token"),
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data, "userData"); });
    
        // return () => {
        //   window.removeEventListener("scroll", handleScroll);
        // };
      }, []);
    
    
      useEffect(() => {
        filtered = amovie.actors_list.filter((obj) => obj.show=== true);
        console.log("actors:", currentActors);
      }, [amovie])
    
      // const update_list = () => {
      //   const txt = input.current.value;
      //   if (txt !== ``) {
      //     dispatch(search_movie(txt));
      //   }
      //   else {
      //     dispatch(fetch_movie(filterStat.current, pageNumber.current));
      //   }
      // }
     
  
  
  
 
return (
    <Background>
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
        <NiceTitle>Actors</NiceTitle> 
        <ShowMain bg={ActorsFilter.current} onClick={() => {ShowLeadAcotrs(currentActors); console.log(currentActors)}}> Show lead</ShowMain>
        <ShowAll bg={ActorsFilter.current} onClick={() => {ShowAllActors(currentActors); console.log(currentActors)}}>Show All</ShowAll>
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
      </Background>
 
  )
}

export default MoviePage;