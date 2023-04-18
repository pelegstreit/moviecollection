import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoviePage from './MoviePage';
import Login from './Login';
import Register from './Register';
import Watchlist from './watchlist'
import Error from './Error';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/watchlist' element= {<Watchlist/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default AppRouter;