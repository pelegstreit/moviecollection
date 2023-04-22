import styled from "styled-components";

export const Top = styled.div` 
/* border: 1px solid blue; */
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
padding-top: 0px;
align-items: center;
padding-left: 5%;
padding-right: 5%;
position: sticky;
z-index: 1;
top: 0;
background-color:  ${({ bg }) => bg  ? bg : bg};
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`;
export const Logo = styled.img`
width: 7%;
height: auto;
cursor: pointer;
/* align-items: center; */
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`;
export const HomeButton = styled.button`
font-size: 2.5rem;
/* height: 60px; */
cursor: pointer;
background-color: transparent;
color: #dfdf00;
border-color: transparent;
font-family: 'Courgette', cursive;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
    font-size: 3rem;
}
`;
export const Search = styled.input`
font-size: 4rem;
width: 34%;
height: 35px;
margin-left: 20px;
align-items: center;
border-color: transparent;
font-size: 2rem;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){}
`
export const Hello = styled.div`
font-size: 1.6rem;
margin-left: 20px;
width:15%;
color:white;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
    font-size: 1.8rem;
}
`;
export const Watchlist = styled.button`
background-color: green;
border:none;
cursor:pointer;
font-Weight:bold;
color:white;

font-size: 1.2rem;
width: 20%;
margin-left: 8px;
padding: 3px;
border-Radius:3px;
letter-Spacing:0.8px;
margin-right:8px;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
font-size: 1.5rem;
width: 20%;
margin-left: 10px;
padding: 4px;
border-Radius:5px;
letter-Spacing:1px;
margin-right:10px;
}
`;
export const MoviesButton = styled.button`
/* border:1px solid blue; */
border-color: transparent;
cursor: pointer;
background-color: transparent;
color: white;

font-size: 1.5rem;
margin-right: 20px;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
font-size: 2rem;
margin-right: 20px;
}
`;
export const Git = styled.img`
cursor: pointer;
background-color: transparent;
color: white;
margin-left:auto;

width: 4%; 
margin-right:20px; 
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
width: 7%; 
margin-right:20px; 
}
`;
export const Signin = styled.button`
cursor: pointer;
background-color: #fb5050;
border-radius: 15%;
border-color: transparent;
color: white;
margin-left:auto;
margin-right:0;

font-size: 1.6rem;
width: 120px;
height: 40px;
@media all and (min-width: 767px){}
@media all and (min-width: 990px){}
@media all and (min-width: 1175px){
font-size: 2rem;
width: 150px;
height: 40px;
}
`;

