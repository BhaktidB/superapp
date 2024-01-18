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
    <img className={styles.articleImage} src={news.urlToImage} alt="" />
    <p className={styles.articleTitle}>{news.title}</p>
    <p className={styles.articleDescription}>{news.description}</p>
    </>
  )
}

export default News