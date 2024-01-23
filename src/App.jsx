import React, { useEffect, useState } from 'react';

import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import GenrePage from './pages/GenrePage/GenrePage'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is logged in from local storage
    const userLog = localStorage.getItem('userData');
    if(userLog){
      setIsLoggedIn(true)
    }


  }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage /> } />
      <Route path='/genre' element={isLoggedIn?<GenrePage /> : <Navigate to="/register" />} />
      <Route path='/' element={isLoggedIn?<HomePage />: <Navigate to="/register" /> } />
      <Route path='/movie' element={isLoggedIn?<MoviesPage /> : <Navigate to="/register" /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
