import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo.jsx'
import styles from '../MoviesP/MoviesP.module.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const BASE_URL = 'http://www.omdbapi.com/?';




const MoviesP = () => {
  const [userDataGenre, setUserDataGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()
  let movieref=useRef('Horror')
  console.log('this is before',movieref.current)

  const navigateHome = () => {
    navigate('/')
  }

  useEffect(() => {
    const storedUserDataGenre = localStorage.getItem('genre');
    console.log(storedUserDataGenre)

    if (storedUserDataGenre) {
      const genres = storedUserDataGenre.split(',');
      setUserDataGenre(genres);
      movieref.current = genres[0];
      
    const getMovies = async () => {
      try {
        const res = await axios.get(BASE_URL + `apikey=${import.meta.env.VITE_MOVIES_API_KEY}&s=${movieref.current}`);
        console.log(res.data.Search);
        setMovies(res.data.Search);
      } catch (error) {
        console.log('something went wrong');
      }
    };

    getMovies();
  
    }
  }, []);


  return (
    <>
      <header className={styles.navbar}>
        <Logo />
        <img onClick={navigateHome} className={styles.user} src="image/home_user.png" alt="home" />
      </header>

      <div className={styles.flexContainerMovies}>
        <p>Entertainment according to your choice</p>

        <section >
        {
          userDataGenre?<>
          <p>{userDataGenre[0]}</p>
          <div className={styles.flexMovies}>
          {movies.map((item,index)=> <img className={styles.poster} src={item.Poster}></img>)}
          </div>
          </>
          :"Fetching data"
        }

        </section>

      </div>
    </>
  );
}

export default MoviesP;
