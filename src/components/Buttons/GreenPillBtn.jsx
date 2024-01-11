import React from 'react'
import styles from '../Buttons/GreenPillBtn.module.css'

const GreenPillBtn = ({genreSelected,crossmark,dependsOnBtn}) => {
    const handleclick=()=>{
       dependsOnBtn(false)

     
}

  return (<>
    <div className={styles.ddiv}>{genreSelected}<span onClick={handleclick} className={styles.cross} >{crossmark}</span></div>
 {dependsOnBtn}
  </>
  )
}

export default GreenPillBtn