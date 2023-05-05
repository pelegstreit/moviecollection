import {useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import {fetchUserMovies} from "../state/user.slice";
import { fetch_the_movie,nextImage, prevImage,fetchActorsReady,updateMovieId } from '../state/amovie.slice';
import {fetch_the_actor} from "../state/actor.slice";
import {Background, TheActor,Wrapper,Poster,ActorName,Votes,Description,DetaielsLine, DetailsPlace_of_birth, DetailsBirthday, DetailsDeathday,Credits,CreditTitle, MovieCard,Title,Credit_Poster,FirstLine,Credit_Votes} from "../styles/actorStyle";
import Menu from './Menu';


const ActorPage = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const actorId = useSelector((state)=> state.actor.actorId);
  const actor = useSelector((state)=> state.actor.theActor);
  const actorCredits = useSelector((state)=> state.actor.credits_list);
  let amovie = useSelector((state) => state.amovie);
  let aMovieID= useSelector((state) => state.amovie.movieId);
  const userMovies = useSelector((state)=> state.user.movie);
  let currentActors = useSelector((state) => state.amovie.actors_list);
  const mail = useSelector((state)=> state.user.mail);

  let filtered;

useEffect(() => {
    dispatch(fetch_the_actor(actorId));
    console.log("credtis in pages:",actorCredits);
    }, []);


  
 
return (
    <Background>
      <Menu></Menu>
      <TheActor>
      <Poster src={actor.profile_path}/>
      <Wrapper>
        <FirstLine>
      <ActorName>{actor.name}</ActorName>
      <Votes>{actor.popularity}</Votes>
      </FirstLine>
      <Description>{actor.biography} </Description>
      <DetaielsLine>
      <DetailsPlace_of_birth>Place of birth: {actor.place_of_birth}</DetailsPlace_of_birth>
      <DetailsBirthday>Date of Birth: {actor.birthday}</DetailsBirthday>
      {
        actor.deathday ?  <DetailsDeathday>Date of death: {actor.deathday} </DetailsDeathday> : <div></div>
      }
     
      </DetaielsLine>
      </Wrapper>
      </TheActor>
         <Credits>
       <CreditTitle>Actor's movies:</CreditTitle>
       {
           actorCredits?.map((obj) =>
             <MovieCard key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}>
               <Credit_Poster src={obj.poster_path} />
               <FirstLine>
               <Title>{obj.title}</Title>
               <Credit_Votes>{obj.vote_average}</Credit_Votes>
               </FirstLine>
               {/* <Genere>{obj.genre_ids}</Genere> */}
             </MovieCard>
           )
         }
       </Credits>
      </Background>
  )
}

export default ActorPage;
