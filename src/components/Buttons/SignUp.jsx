import React from 'react'
import styles from './SignUp.module.css'


const SignUp = ({handleClicker}) => {
  return (
    <button className={styles.signUpBtn} onClick={handleClicker}>SIGN UP</button>
  )
}

export default SignUp