import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo.jsx'
import styles from '../MoviesP/MoviesP.module.css'

const MoviesP = () => {
  const [userDataGenre, setUserDataGenre] = useState(null);


  useEffect(() => {
    const storedUserDataGenre = localStorage.getItem('genre');
    if (storedUserDataGenre) {
      setUserDataGenre(storedUserDataGenre);
    }
  })

  return (
    <>
      <header className={styles.navbar}>
        <Logo />
        <img className={styles.user} src="image/home_user.png" alt="home" />
      </header>
      <div className={styles.flexContainerMovies}>
        <p>Entertainment according to your choice</p>
        <section>
          {userDataGenre ?
            userDataGenre.split(',').map((ele) => {
              return <><p key={ele} className={styles.genreChips}>{ele}</p>
              <img src='image/action.png' /><br /><br /></>

            }) : <p>No user data found.</p>}
        </section>
      </div>
    </>
  )
}

export default MoviesP