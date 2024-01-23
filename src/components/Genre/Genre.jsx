import React, { useEffect, useState } from 'react'
import styles from './Genre.module.css'
import Logo from '../Logo/Logo'
import GreenPillBtn from '../Buttons/GreenPillBtn'
import Box from '../Box/Box'
import { useNavigate } from 'react-router-dom'

const Genre = () => {
  const navigate = useNavigate()
  const [categories,setCategories]=useState([])
  const  [lengthError,setLengthError]=useState(false)



useEffect(()=>{
  console.log(categories)
},[categories])

  const handleNextBtnClick = () => {
    if(!categories.length){
      setLengthError(true)
    }else{
      localStorage.setItem("genre",categories)
      navigate('/')
    }
  }

  const removeCategory=(value)=>{
    const newCategoryList=categories
    .filter((category)=>{return category!==value
    })
    console.log('remaining = ',newCategoryList)
    setCategories(newCategoryList)
  }

  const [box, setBox] = useState([
    {
      id: 'Action',
      color: ['rgba(255, 82, 9, 1)'],
      img: "/image/action.png"
    },
    {
      id: 'Drama',
      color: 'rgba(255, 165, 225, 1)',
      img: "/image/drama.png"
    }, {
      id: 'Romance',
      color: 'rgba(17, 184, 0, 1)',
      img: "/image/romance.png"
    }, {
      id: 'Thriller',
      color: 'rgba(132, 194, 225, 1)',
      img: "/image/thriller.png"
    }, {
      id: 'Western',
      color: 'rgba(144, 37, 0, 1)',
      img: "/image/western.png"
    }, {
      id: 'Horror',
      color: 'rgba(115, 88, 225, 1)',
      img: "/image/horror.png"
    }, {
      id: 'Fantasy',
      color: 'rgba(255, 74, 222, 1)',
      img: "/image/fantasy.png"
    }, {
      id: 'Music',
      color: 'rgba(230, 30, 50, 1)',
      img: "/image/music.png"
    }, {
      id: 'Fiction',
      color: 'rgba(108, 208, 97, 1)',
      img: "/image/fiction.png"
    },
  ])

  // const borderChange = click ? { border: '3px solid rgba(17, 184, 0, 1)' } : null;


  return (<>
    <div className={styles.flexContainer}>
      {/* left container */}
      <div className={styles.flexItem1}>
        <Logo />
        <p className={styles.subheading}>Choose your entertainment category</p>
        <div className={styles.arrangeSelBtn}>
          {/* buttons */}
          {categories.map((cat)=>{
            return <p key={cat} style={{color:'purple'}}>{cat}<span><button onClick={()=>{removeCategory(cat)}}>xxxx</button></span></p>
          })}
        </div>
        <div className={styles.groupWarning}>
          {lengthError?<>
          <img className={styles.warningSign} src='/svg/warning.svg' alt="Minimum 3 category required" />
          <p className={styles.warning}>Minimum 3 category required</p>
          </>:null
          }
        </div>

      </div>

      {/* right conatainer */}
      <div className={styles.flexItem2}>
        <div className={styles.arrangeBox}>
          {/* 9box */}
          {box.map((ele) => {
            return <Box key={ele.id} setCategories={setCategories} categoryList={categories} color={ele.color} boxText={ele.id} imageSrc={ele.img} alt={ele.id}  />
          })}

        </div>
        {/* next button */}
        <div className={styles.nextBtn} onClick={handleNextBtnClick}>
          <GreenPillBtn genreSelected={'Next Page'} />
        </div>
      </div>

    </div>
  </>)
}

export default Genre