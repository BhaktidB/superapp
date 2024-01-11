import React,{useState} from 'react'
import styles from './Genre.module.css'
import Logo from '../Logo/Logo'
import GreenPillBtn from '../Buttons/GreenPillBtn'
import Box from '../Box/Box'
import { useNavigate } from 'react-router-dom'

const Genre = () => {
  const navigate=useNavigate()

  const handleNextBtnClick=()=>{
    navigate('/home')
  }
  const [click, setClick] = useState(false);
  const bgColor = click ? { border: '3px solid rgba(17, 184, 0, 1)' } : null;

  const handleBoxClick = () => {

    setClick((prevClick) => !prevClick);
    console.log(click)
  };

  return (<>
  <div className={styles.flexContainer}>
  {/* left container */}
    <div className={styles.flexItem1}>
      <Logo />
      <p className={styles.subheading}>Choose your entertainment category</p>
      <div className={styles.arrangeSelBtn}>
        {/* buttons */}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'Action'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'Drama'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        {click?<GreenPillBtn dependsOnBtn={setClick} genreSelected={'huh'} crossmark={'X'} />:null}
        
      </div>
      <div className={styles.groupWarning}>
      <img className={styles.warningSign} src='/svg/warning.svg' alt="Minimum 3 category required" />
      <p className={styles.warning}>Minimum 3 category required</p>
      </div>
      
    </div>

{/* right conatainer */}
    <div className={styles.flexItem2}>
        <div className={styles.arrangeBox}>
        {/* 9box */}

        <Box onBoxClick={handleBoxClick} bgColor={bgColor}  boxText={'Action'} name='Action' boxImage={"/image/action.png"} boxBg={'rgba(255, 82, 9, 1)'} />
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Drama'} boxImage={"/image/drama.png"} boxBg={'rgba(215, 164, 255, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Romance'} boxImage={"/image/romance.png"} boxBg={'rgba(17, 184, 0, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Thriller'} boxImage={"/image/thriller.png"} boxBg={'rgba(132, 194, 255, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Western'} boxImage={"/image/western.png"} boxBg={'rgba(144, 37, 0, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Horror'} boxImage={"/image/horror.png"} boxBg={'rgba(115, 88, 255, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Fantasy'} boxImage={"/image/fantasy.png"} boxBg={'rgba(255, 74, 222, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Music'} boxImage={"/image/music.png"} boxBg={'rgba(230, 30, 50, 1)'}/>
        <Box onBoxClick={handleBoxClick} bgColor={bgColor} boxText={'Fiction'} boxImage={"/image/fiction.png"} boxBg={'rgba(108, 208, 97, 1)'}/>
        </div>
        {/* next button */}
        <div className={styles.nextBtn} onClick={handleNextBtnClick}>
        <GreenPillBtn genreSelected={'Next Page'}/>
        </div>
    </div>

  </div>
  </> )
}

export default Genre