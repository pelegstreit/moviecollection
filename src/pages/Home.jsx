import {  useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { search_movie, fetch_movie} from '../state/movies.slice';
import { updateMovieId } from '../state/amovie.slice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  let filterStat = useRef("popular");
  const input = useRef(null);
  const pageNumber = useRef(1);
  const movies = useSelector((state) => state.movies.items);
  const totalPages = useSelector((state) => state.movies.pages);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const name = useSelector((state)=> state.user.name);
  const mymovies = useSelector((state)=> state.user.movie);
  const [userData, setUserData] = useState("");
  
  //navigate("/movies/:id")
  // const [searchParams, setSearchParams] = useSearchParams ({n :3})
  //const number = searchParams.get("n");

  useEffect(() => {
    dispatch(fetch_movie(filterStat.current, pageNumber.current));
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackgroundColor("whitesmoke");
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
        token: window.localStorage.getItem("data"),
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
    console.log("mymovies ", mymovies);
    //if(!movies.length) 
   
  }, [movies])

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
    // <>
    <div style={{ backgroundImage:`url(https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
  }}>
      <Top bg={backgroundColor}>
        <Logo src={'https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'} onClick={() => { navigate(`/`)}}/>
        <HomeButton>BlockBuster</HomeButton>
        <Search ref={input} onChange={update_list} placeholder="Search by a movie title"></Search>
        <Hello>Hello {name}</Hello>
        <Watchlist onClick={() => { navigate(`/watchlist`)}}>My watch list</Watchlist>
        <MoviesButton onClick={() => { navigate(`/`)}}>📄 MOVIES</MoviesButton>
        <Git src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} onClick={() => { window.location.href ='https://github.com/pelegstreit'}}/>
        <Signin onClick={() => { navigate(`/login`)}} >SIGN IN</Signin>
      </Top>
      <Filter>
        <Popular bg={filterStat.current} onClick={() => { filterStat.current = 'popular'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Popular</Popular>
        <Nowplaying bg={filterStat.current} onClick={() => { filterStat.current = 'now_playing'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Now Playing</Nowplaying>
        <Toprated bg={filterStat.current} onClick={() => { filterStat.current = 'top_rated'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Top Rated</Toprated>
        <Upcoming bg={filterStat.current} onClick={() => { filterStat.current = 'upcoming'; pageNumber.current = 1; dispatch(fetch_movie(filterStat.current, pageNumber.current)); }}>Upcoming</Upcoming>
      </Filter>

      <Movies>
        {/* <ul> */}
        {
          movies?.map((obj) =>
            <MovieCard key={obj.id} onClick={() => {dispatch(updateMovieId(obj.id));   navigate(`/movie/${obj.id}`)}}>
              <Poster src={obj.poster_path} />
              <Title>{obj.original_title}</Title>
              <Votes>{obj.vote_average}</Votes>
              <Genere>{obj.genre_ids}</Genere>
            </MovieCard>
          )
        }
        {/* </ul> */}
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

</div>
    // </>
  )
}

export default Home;
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

///menu part
const Filter = styled.ul`
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
const Popular = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'popular' ? `green` : `transparent`};
`;
const Toprated = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'top_rated' ? `green` : `transparent`};
`;
const Nowplaying = styled.li`
  color:white;
  border: 1px solid white;
  font-size: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg === 'now_playing' ? `green` : `transparent`};
`;
const Upcoming = styled.li`
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
const Movies = styled.div`
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

const MovieCard = styled.div`
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
const Poster = styled.img`
`;

const Title = styled.div`
font-size: 1.8rem;
margin-bottom: 0.5rem;
width: 85%;
color:white;
`;
const Votes = styled.div`
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


/////

////pagination part
const Pages = styled.ul` 
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
const Pagenum = styled.li`
  color:white;
  border: ${({ border, currentpage }) => border === currentpage ? `1px solid white` : `transparent`}; //give key
  font-size: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
`;
/////
