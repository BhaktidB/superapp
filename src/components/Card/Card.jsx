import React from 'react'
import styles from './Card.module.css'


const Card = () => {
  return (
    <>
    <img src="\image\register.png" alt="super app register card" className={styles.registerCard}/>
    <p className={styles.placeCardText}>Discover new things on Superapp</p>
    </>
  )
}

export default Card