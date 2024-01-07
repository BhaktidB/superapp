import React from 'react'
import styles from './FormInput.module.css'


const FormInput = ({text,placeholder,value,onChange,style}) => {
  return (<>

    <input type={text} placeholder={placeholder} value={value} style={style} onChange={onChange}/>
    {/* {!filled&&(<p>Field is required</p>)} */}

  </>)
}

export default FormInput