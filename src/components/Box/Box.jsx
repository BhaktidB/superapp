import React,{useEffect, useState} from 'react'
import styles from '../Box/Box.module.css'


const Box = ({boxText,boxImage,boxBg,onBoxClick,bgColor}) => {
    const [imageSrc, setImageSrc] = useState("/image/action.png");
    const [isSelected, setIsSelected] = useState(false);
    const [customBgColor, setCustomBgColor] = useState({ backgroundColor: 'rgba(255, 82, 9, 1)' });
    
    useEffect(()=>{
        setImageSrc(boxImage);
    setCustomBgColor({ backgroundColor: boxBg });

  }, [boxImage, boxBg]);

  const onClickHandler = () => {
    setIsSelected(!isSelected);
    onBoxClick(name, !isSelected);
  };

    
//   style={{ backgroundColor: bgColor }}
  return (
<>
<div className={styles.box} onClick={onClickHandler} style={{ ...customBgColor, border: isSelected ? '3px solid rgba(17, 184, 0, 1)' : 'none' }}>
<p className={styles.boxText}>{boxText}</p>
<img className={styles.boxImg} src={imageSrc} alt="" />
</div>
</>
    )
}

export default Box

