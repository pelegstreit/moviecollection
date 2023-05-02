import {  useState, useRef, useEffect } from 'react'
import {search_movie, fetch_movie} from '../state/movies.slice';
import { updateMovieId } from '../state/amovie.slice';
import {fetchUserMovies} from '../state/user.slice';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate, useSearchParams } from 'react-router-dom';
import {FirstLine, Background,Filter, Popular, Toprated, Nowplaying, Upcoming, Movies, MovieCard, Poster, Title, Votes, Genere, Pages, Pagenum} from "../styles/homeStyle";
import Menu from './Menu';

const Home = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  let filterStat = useRef("popular");
  const pageNumber = useRef(1);

  const movies = useSelector((state) => state.movies.items);
  const totalPages = useSelector((state) => state.movies.pages);

  useEffect(() => {
    dispatch(fetch_movie(filterStat.current, pageNumber.current));
    return () => {
    };
  }, []);

  useEffect(() => {
  }, [movies])

  return (
    <Background>
      <Menu></Menu>
      <Filter>
        <Popular bg={filterStat.current} onClick={() => { filterStat.current = 'popular'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Popular</Popular>
        <Nowplaying bg={filterStat.current} onClick={() => { filterStat.current = 'now_playing'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Now Playing</Nowplaying>
        <Toprated bg={filterStat.current} onClick={() => { filterStat.current = 'top_rated'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Top Rated</Toprated>
        <Upcoming bg={filterStat.current} onClick={() => { filterStat.current = 'upcoming'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Upcoming</Upcoming>
      </Filter>
      <Movies>
        {
          movies?.map((obj) =>
            <MovieCard key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}>
              <Poster src={obj.poster_path} />
              <FirstLine>
              <Title>{obj.original_title}</Title>
              <Votes>{obj.vote_average}</Votes>
              </FirstLine>
              <Genere>{obj.genre_ids}</Genere>
            </MovieCard>
          )
        }
    
      </Movies>
     {/* pagination */}
      {
        (() => {
          switch (pageNumber.current) {
            case 1:
            case 2:
            case 3:
            case 4:

              return (

                <Pages>
                  <Pagenum border={1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>1</Pagenum>
                  <Pagenum border={2} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 2; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>2</Pagenum>
                  <Pagenum border={3} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 3; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>3</Pagenum>
                  <Pagenum border={4} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 4; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>4</Pagenum>
                  <Pagenum border={5} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 5; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>5</Pagenum>
                  <Pagenum border={6} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 6; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>6</Pagenum>
                  <Pagenum border={0} >...</Pagenum>
                  <Pagenum border={totalPages-1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-1}</Pagenum>
                  <Pagenum border={totalPages} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages}</Pagenum>
                </Pages>);
                 case totalPages:
                  case totalPages-1:
                  case totalPages-2:
                  case totalPages-3:
      
                    return (
                      <Pages>
                        <Pagenum border={1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>1</Pagenum>
                        <Pagenum border={2} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 2; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>2</Pagenum>
                        <Pagenum border={0} >...</Pagenum>
                        <Pagenum border={totalPages-5} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-5; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-5}</Pagenum>
                        <Pagenum border={totalPages-4} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-4; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-4}</Pagenum>
                        <Pagenum border={totalPages-3} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-3; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-3}</Pagenum>
                        <Pagenum border={totalPages-2} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-2; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-2}</Pagenum>
                        <Pagenum border={totalPages-1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-1}</Pagenum>
                        <Pagenum border={totalPages} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages}</Pagenum>
                      </Pages>);
            default:
              return (

                <Pages>
                  <Pagenum border={1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>1</Pagenum>
                  <Pagenum border={2} currentpage={pageNumber.current} onClick={() => { pageNumber.current = 2; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>2</Pagenum>
                  <Pagenum border={0} >...</Pagenum>
                  <Pagenum border={pageNumber.current-2} currentpage={pageNumber.current} onClick={() => { pageNumber.current = pageNumber.current-2; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{pageNumber.current-2}</Pagenum>
                  <Pagenum border={pageNumber.current-1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = pageNumber.current-1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{pageNumber.current-1}</Pagenum>
                  <Pagenum border={pageNumber.current} currentpage={pageNumber.current} onClick={() => { pageNumber.current = pageNumber.current; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{pageNumber.current}</Pagenum>
                  <Pagenum border={pageNumber.current+1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = pageNumber.current+1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{pageNumber.current+1}</Pagenum>
                  <Pagenum border={pageNumber.current+2} currentpage={pageNumber.current} onClick={() => { pageNumber.current = pageNumber.current+2; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{pageNumber.current+2}</Pagenum>
                  <Pagenum border={0} >...</Pagenum>
                  <Pagenum border={totalPages-1} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages-1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages-1}</Pagenum>
                  <Pagenum border={totalPages} currentpage={pageNumber.current} onClick={() => { pageNumber.current = totalPages; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>{totalPages}</Pagenum>

                </Pages>);
          }
        })()}

</Background>
   
  )
}

export default Home;

