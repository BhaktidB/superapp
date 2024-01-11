import React, { useState } from 'react'
import styles from './Register.module.css'

import Card from '../../components/Card/Card'
import Logo from '../../components/Logo/Logo'
import FormInput from '../../components/RegisterInputFields/FormInput'
import SignUp from '../../components/Buttons/SignUp'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        username:'',
        email: '',
        mobile:'',
        isAgreeded:false
      });

      const [errorName,setNameError]=useState({
        name: '',
        username:'',
        email: '',
        mobile:'',
        isAgreeded:false
      })

      const handleInput=(event)=>{
        const {name,value}=event.target
        setFormData({...formData,[name]:value})

      }

      const handleClick=(event)=>{
        event.preventDefault()
        let isValid=true;

        if (!formData.name.trim().length) {
          setNameError((prevError) => ({ ...prevError, name: 'Name is required' }));
          isValid=false
        } else if (!formData.username.trim().length) {
          setNameError((prevError) => ({ ...prevError, username: 'Username is required' }));
          isValid=false
        } else if (!formData.email.trim().length) {
          setNameError((prevError) => ({ ...prevError, email: 'Email is required' }));
          isValid=false
        } else if (!formData.mobile.trim().length) {
          setNameError((prevError) => ({ ...prevError, mobile: 'Mobile is required' }));
          isValid=false
        } else if (!formData.isAgreeded) {
          setNameError((prevError) => ({ ...prevError, isAgreeded: 'Check this box if you want to proceed' }));
          isValid=false
        }


        if(isValid){
          localStorage.setItem('userData',formData);
          navigate('/genre')
        }

      }

  return (<>
 <div className={styles.flexContainerH}>

{/* left side */}
<Card />

{/* right side */}
<div className={styles.flexContainerV}>

  <div>
  <Logo />
  <p>Create your new account</p>
  </div>

  <div>
      <FormInput text={'text'}  name='name' value={formData.name} placeholder={'Name'} onChange={handleInput} errorCheck={errorName} />

      <FormInput text={'text'} name='username' value={formData.username} placeholder={'UserName'} onChange={handleInput} errorCheck={errorName} />

      <FormInput text={'email'} name='email' value={formData.email} placeholder={'Email'} onChange={handleInput} errorCheck={errorName}/>

      <FormInput text={'text'} name='mobile' value={formData.mobile} placeholder={'Mobile'} onChange={handleInput} errorCheck={errorName}/>

      <input type='checkbox' id='signupCheck' name='isAgreeded' value={formData.isAgreeded} className={styles.signupCheck} 
      onChange={(e)=>{
        setFormData({...formData,[e.target.name]:e.target.checked})
      }}/>
      <label htmlFor="signupCheck">Share my registration data with Superapp</label>
      {!errorName.isAgreeded?<p className={styles.error}>{errorName.isAgreeded}</p>:<></>}

      <SignUp handleClicker={handleClick}/>
  </div>

  <div>
  <p className={styles.tnc}>By clicking on Sign up. you agree to Superapp <span className={styles.tncgreen}>Terms and Conditions of Use</span></p>
  <p className={styles.tnc}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className={styles.tncgreen}>Privacy Policy</span></p>
  </div>

</div>

</div>
</>  )
}

export default Register