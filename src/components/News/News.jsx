import React, { useEffect, useState } from 'react'
import { getNewsDetails } from '../../apis/newsapi'
import styles from '../News/News.module.css'

const News = () => {
    const [news,setNews]=useState([]);

    useEffect(()=>{
        fetchNews()
    },[])

    const fetchNews =async()=>{
        const result=await getNewsDetails()
        setNews(result)

        console.log(result)
    }
  return (
    <>
    <img src={news.urlToImage} alt="" />
    <p>{news.title}</p>
    <p>{news.description}</p>
    </>
  )
}

export default News