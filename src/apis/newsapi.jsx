import axios from 'axios';
const BASE_URL='https://newsapi.org/v2/everything?q=Apple&';

export const getNewsDetails=async()=>{
    try {
       const res=await axios.get(BASE_URL+`apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    //    console.log(res.data)
       return res.data.articles[1];
    } catch (error) {
        console.log('something went wrong',error)
    }
}

