import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import ResetCSS from './styles/resetcss'
import store from "../src/state/configure.store"
import { BrowserRouter } from 'react-router-dom';
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

