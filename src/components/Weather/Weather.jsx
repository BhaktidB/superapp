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
    <p>{weather.location.localtime}{(weather.location.localtime>12)?'PM':'AM'}</p>
    <div><img src={weather.current.condition.icon} alt="" /><p>{weather.current.condition.text}</p></div>
    <div><p>{weather.current.temp_c}</p>
    <p><img src="" alt="" />{weather.current.pressure_mb}</p></div>
    <div><p><img src="" alt="" />{weather.current.wind_kph}</p>
    <p><img src="" alt="" />{weather.current.humidity}</p></div>
    </>
  )
}

export default News