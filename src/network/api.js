const apiKey = '8363ff1f821b3c4a310b38701890d3ba';
const apiUrl = 'https://api.themoviedb.org/3';


// const Popular_endpoint = `${apiUrl}/movie/popular?api_key=${apiKey}`;
const Popular_endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=https://api.themoviedb.org/3`;
const Now_endpoint = `${apiUrl}/movie/now_playing?api_key=${apiKey}`;
const Toprated_endpoint = `${apiUrl}/movie/top_rated?api_key=${apiKey}`;
const Upcomoioing_endpoint = `${apiUrl}/movie/upcoming?api_key=${apiKey}`;

 let popular_Arr = []
 let now_Arr = []
 let toprated_Arr = []
 let upcoming_Arr = []



fetch(Popular_endpoint )
  .then(response => response.json())
  .then(data => {
    popular_Arr = data.results;
    console.log(data.results); // Prints an array of popular movies
  })
  .catch(error => {
    console.error(error);
  });

  fetch(Now_endpoint )
  .then(response => response.json())
  .then(data => {
    now_Arr = data.results;
    console.log(data.results); // Prints an array of popular movies
  })
  .catch(error => {
    console.error(error);
  });

  fetch(Toprated_endpoint)
  .then(response => response.json())
  .then(data => {
    toprated_Arr = data.results;
    console.log(data.results); // Prints an array of popular movies
  })
  .catch(error => {
    console.error(error);
  });


  fetch(Upcomoioing_endpoint)
  .then(response => response.json())
  .then(data => {
    upcoming_Arr = data.results;
    console.log(data.results); // Prints an array of popular movies
  })
  .catch(error => {
    console.error(error);
  });
  
export async function getPopularMovies() {
  const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=8363ff1f821b3c4a310b38701890d3ba`;
  const response = await (await fetch(endpoint)).json();
  const data = response.results;
  console.log(data);
  return data;
}


export {popular_Arr, now_Arr, toprated_Arr, upcoming_Arr,apiKey, apiUrl,Popular_endpoint}