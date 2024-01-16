import axios from 'axios';
const BASE_URL='http://api.weatherapi.com/v1/current.json?';
const DEFAULT_LOCATION='Mumbai';

export const getWeatherDetails=async()=>{
    try {
       const res=await axios.get(BASE_URL+`key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${DEFAULT_LOCATION}`)
    //    console.log(res.data)
       return res.data;
    } catch (error) {
        console.log('something went wrong',error)
    }
}

