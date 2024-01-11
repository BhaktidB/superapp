import React from 'react'
import styles from './FormInput.module.css'


const FormInput = ({name,text,placeholder,value,onChange,errorCheck}) => {
  return (<>

    <input type={text} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
    {errorCheck?<p className={styles.error}>{errorCheck.name}</p>:<></>}

  </>)
}

export default FormInput