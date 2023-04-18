import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
// import Home from  './pages/Home';
// import MoviePage from './pages/moviePage';
import ResetCSS from './styles/resetcss'
import store from "../src/state/configure.store"
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import AppRouter from './pages/AppRouter';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
    </Provider>
    <ResetCSS/>
  </>,
)

