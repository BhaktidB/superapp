import React from 'react'
import styles from './SignUp.module.css'


const SignUp = ({handleClicker}) => {
  const token=localStorage.setItem('token',true)
  return (
    <button className={styles.signUpBtn} onClick={handleClicker}>SIGN UP</button>
  )
}

export default SignUp