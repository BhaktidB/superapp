import React,{useEffect, useState} from 'react'
import styles from '../Box/Box.module.css'


const Box = (props) => {
  const [isselected,setIsselected]=useState(false)

  

  const addValuesToCategories=(value)=>{
    const existingValue=props.categoryList.filter((category)=>category===value)
    console.log(existingValue)
    if(!existingValue.length){
      props.setCategories([...props.categoryList,value])
    }else{
      const newCategoryList=props.categoryList
    .filter((category)=>{return category!==value
    })
    props.setCategories(newCategoryList)

    }
  }
  useEffect(()=>{
    setIsselected(props.categoryList.includes(props.boxText));
   },[props.categoryList, props.boxText])     

  return (
<>
<div className={styles.box} style={{backgroundColor:props.color,border: isselected ? '3px solid rgba(17, 184, 0, 1)' : 'none'}}
 onClick={()=>{
  addValuesToCategories(props.boxText);
  setIsselected(!isselected);
}}>
<p className={styles.boxText}>{props.boxText}</p>
<img className={styles.boxImg} src={props.imageSrc} alt={props.alt} />
</div>
</>
    )
}

export default Box

