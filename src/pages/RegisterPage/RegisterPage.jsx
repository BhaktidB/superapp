import React, { useState } from 'react'
import styles from './RegisterPage.module.css'
import Card from '../../components/Card/Card'
import Logo from '../../components/Logo/Logo'
import FormInput from '../../components/RegisterInputFields/FormInput'
import SignUp from '../../components/Buttons/SignUp'


const RegisterPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        username:'',
        email: '',
        mobile:''
      });

      const [filledFields, setFilledFields] = useState({
        name: false,
        username:false,
        email: false,
        mobile:false
      });

      const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [fieldName]: value,
        }));

        setFilledFields((prevFilledFields) => ({
            ...prevFilledFields,
            [fieldName]: !!value,
          }));
        };

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
    <form>
        <FormInput text={'text'} value={formData.name} placeholder={'Name'} onChange={(e) => handleInputChange('name', e.target.value)}
          style={{ borderColor: filledFields.name ? 'initial' : 'red' }}/>
        <FormInput text={'text'} value={formData.username} placeholder={'UserName'} onChange={(e) => handleInputChange('username', e.target.value)}
          style={{ borderColor: filledFields.username ? 'initial' : 'red' }}/>
        <FormInput text={'email'} value={formData.email} placeholder={'Email'} onChange={(e) => handleInputChange('email', e.target.value)}
          style={{ borderColor: filledFields.email ? 'initial' : 'red' }}/>
        <FormInput text={'text'} value={formData.mobile} placeholder={'Mobile'} onChange={(e) => handleInputChange('mobile', e.target.value)}
          style={{ borderColor: filledFields.mobile ? 'initial' : 'red' }}/>
        <input type='checkbox' id='signupCheck' name='signupCheck' value='false' className={styles.signupCheck} />
        <label htmlFor="signupCheck">Share my registration data with Superapp</label><br /><br />
        <SignUp />
    </form>
    <div>
    <p className={styles.tnc}>By clicking on Sign up. you agree to Superapp <span className={styles.tncgreen}>Terms and Conditions of Use</span></p>
    <p className={styles.tnc}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className={styles.tncgreen}>Privacy Policy</span></p>
    </div>
  </div>
  </div>


  </>)
}

export default RegisterPage