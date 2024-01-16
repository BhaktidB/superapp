import React, { useState,useEffect } from 'react'
import styles from '../HomeP/HomeP.module.css'
import News from '../News/News';
import Weather from '../Weather/Weather';
const HomeP = () => {
  const [userData, setUserData] = useState(null);
  const [userDataGenre, setUserDataGenre] = useState(null);
  const [homeNotes, setHomeNotes] = useState('');



  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedUserDataGenre = localStorage.getItem('genre');
    const storedUserHomeNotes = localStorage.getItem('HomeNotes');
  
    if (storedUserData || storedUserDataGenre || storedUserHomeNotes) {
      const parsedUserData = JSON.parse(storedUserData);
  
      setUserData(parsedUserData);
      setUserDataGenre(storedUserDataGenre);
      setHomeNotes(storedUserHomeNotes);
    }
  }, []);

  const handleOnchange = (e) => {
    const updatedHomeNotes = e.target.value;
    setHomeNotes(updatedHomeNotes);
    localStorage.setItem('HomeNotes', updatedHomeNotes);
  };

  return (
    <>
    <div className={styles.gridContainer}>
    {/* profile */}
    <div className={styles.girdItem1}>
      <img src="/image/home_user.png" alt="" />
      <div>
      {userData ? <p>{userData.name}</p> : <p>No user data found.</p>}
      {userData ? <p>{userData.email}</p> : <p>No user data found.</p>}
      {userData ? <p style={{fontSize: 'xx-large'}}>{userData.username}</p> : <p>No user data found.</p>}
      <div className={styles.flexGenreChips}>
      {userDataGenre ? 
      userDataGenre.split(',').map((ele)=>{
        return <p key={ele} className={styles.genreChips}>{ele}</p>}): <p>No user data found.</p>}
      </div>
      </div>
      
      
    </div>

{/* notes */}
    <div className={styles.girdItem2}>
      <p>All notes</p>
      <textarea name="homeNotes" id="homeNotes" cols="30" rows="10" value={homeNotes} onChange={handleOnchange}>{homeNotes}</textarea>
    </div>

{/* news */}
    <div className={styles.girdItem3}>
      <News />
    </div>

{/* weather */}
    <div className={styles.girdItem4}>
      <Weather />
    </div>

{/* clock */}
    <div className={styles.girdItem5}>
      clock
    </div>

    </div>
    </>
  )
}

export default HomeP