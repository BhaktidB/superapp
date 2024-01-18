import React, { useEffect, useState } from 'react'
import styles from '../Stopwatch/Stopwatch.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Stopwatch = () => {
    const [seconds,setSeconds]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [hours,setHours]=useState(0)
    const [totalTime,setTotalTime]=useState(0)
    const [start,setStart]=useState(false)

    const incrementSeconds=()=>{
        if(seconds===59){return;}
        setSeconds((prev)=>prev+1)
    }
    const decrementSeconds=()=>{
        if(seconds===0){return;}
        setSeconds((prev)=>prev-1)
    }
    const incrementMinutes=()=>{
        if(minutes===59){return;}
        setMinutes((prev)=>prev+1)
    }
    const decrementMinutes=()=>{
        if(minutes===0){return;}
        setMinutes((prev)=>prev-1)
    }
    const incrementHours=()=>{
        setHours((prev)=>prev+1)
    }
    const decrementHours=()=>{
        if(hours===0){return;}
        setHours((prev)=>prev-1)
    }

useEffect(()=>{
console.log('changed')
calculateTime()
})

const calculateTime=()=>{
    
    setTotalTime(seconds+(minutes*60)+(hours*3600))
}
  return (
    <>
    <span className={styles.flexContainer}>
    <div className={styles.circle}>
    <CountdownCircleTimer
    isPlaying={start}
    size={120}
    duration={totalTime}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
    </div>
    <div className={styles.settings}>
        <div className={styles.timing}>
            <span><p>Hours</p><img onClick={incrementHours} src="/svg/uparrow.svg" alt="" /><p  style={{fontSize:' x-large',color: '#FFFFFF',marginBottom:'unset'}}>{hours}</p><img onClick={decrementHours} src="/svg/downarrow.svg" alt="" /></span>
            <span><p>Minutes</p><img onClick={incrementMinutes} src="/svg/uparrow.svg" alt="" /><p style={{fontSize:' x-large',color: '#FFFFFF',marginBottom:'unset'}}>{minutes}</p><img onClick={decrementMinutes} src="/svg/downarrow.svg" alt="" /></span>
            <span><p>Seconds</p><img onClick={incrementSeconds} src="/svg/uparrow.svg" alt="" /><p style={{fontSize:' x-large',color: '#FFFFFF',marginBottom:'unset'}}>{seconds}</p><img onClick={decrementSeconds} src="/svg/downarrow.svg" alt="" /></span>
     
        </div>
        <div>
            <button onClick={()=>{setStart(!start)}} className={styles.stopwatchBtn}>{start?'Stop':'Start'}</button>
        </div>
    </div>
    </span>
    </>
  )
}

export default Stopwatch