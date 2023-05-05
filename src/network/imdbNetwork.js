const {VITE_SERVER_URL} = import.meta.env;

export async function getMoviefromDB(){
    const endpoint = `${VITE_SERVER_URL}/getMovies`;
    const response = await (await fetch(endpoint)).json();
    return response;
}

export async function sendMovies(copyArr){
    const endpoint = `${VITE_SERVER_URL}/addmovie`;
    fetch(endpoint, {
        method: "PUT",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({token: window.localStorage.getItem("token"), movieIDObj: {"movie":copyArr}})
    })
}
export async function checkIfLogged(data){
    fetch("http://localhost:3030/userdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: data,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       });

}
