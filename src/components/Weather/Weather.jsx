import React, { useEffect, useState } from 'react'
import { getWeatherDetails } from '../../apis/waetherapi'
import styles from '../Weather/Weather.module.css'

const News = () => {
    const [weather,setWeather]=useState([]);

    useEffect(()=>{
        fetchWeather()
    },[])

    const fetchWeather =async()=>{
        const result=await getWeatherDetails()
        setWeather(result)

        console.log(result)
    }
  return (
    <>
    <p className={styles.weatherDate}>{weather?.location?.localtime}{(weather?.location?.localtime.slice(-6,-1))?' PM':' AM'}</p>
    
    <span className={styles.weatherFlexC}>
    <div><img src={weather?.current?.condition?.icon} alt="" /><p className={styles.weatherOvercast}>{weather?.current?.condition?.text}</p></div>
    
    <span className={styles.lines}></span>
    
    <div><p className={styles.weatherTemp}>{weather?.current?.temp_c}°C</p>
    <p className={styles.weatherCondition}><img className={styles.weatherIcons} src="/svg/pressure.svg" alt="pressure" />{weather?.current?.pressure_mb} mbar</p><span className={styles.weatherCondition}>Pressure</span></div>
    
    <span className={styles.lines}></span>
   
    <div><p className={styles.weatherCondition}><img className={styles.weatherIcons} src="/svg/wind.svg" alt="wind" />{weather?.current?.wind_kph} km/h<span> Wind</span></p>
    <p className={styles.weatherCondition}><img className={styles.weatherIcons} src="/svg/humidity.svg" alt="humidity" />{weather?.current?.humidity}%<span> Humidiy</span> </p></div>
    </span>

    </>
  )
}

export default News