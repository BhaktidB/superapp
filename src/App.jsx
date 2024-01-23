import React, { useEffect, useRef } from 'react';

import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import GenrePage from './pages/GenrePage/GenrePage'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'

function App() {
  const userRef = useRef(null);
  useEffect(() => {
    // Check if the user is logged in from local storage
    const userLog = localStorage.getItem('userData');
    const userData = JSON.parse(userLog);
    userRef.current = userData;


  }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage /> } />
      <Route path='/genre' element={userRef.current?<GenrePage /> : <Navigate to="/register" />} />
      <Route path='/' element={userRef.current?<HomePage />: <Navigate to="/register" /> } />
      <Route path='/movie' element={userRef.current?<MoviesPage /> : <Navigate to="/register" /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
