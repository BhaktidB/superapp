import React from 'react'
import styles from '../HomeP/HomeP.module.css'
const HomeP = () => {
  return (
    <>
    <div className={styles.gridContainer}>
    {/* profile */}
    <div className={styles.girdItem1}>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus ratione ipsum amet aliquam harum illo fugiat, qui facilis error. */}
    </div>

{/* notes */}
    <div className={styles.girdItem2}>
      notes
    </div>

{/* article */}
    <div className={styles.girdItem3}>
      article
    </div>

{/* weather */}
    <div className={styles.girdItem4}>
      weather
    </div>

{/* clock */}
    <div className={styles.girdItem5}>
      clock
    </div>

    </div>
    </>
  )
}

export default HomeP