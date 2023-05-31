import React from 'react'
import styles from './home.module.css'
import Card from '../../molecules/home/Card'
import Header from '../../molecules/home/header';
import Tweet from '../../molecules/home/tweet';
import { useState,useEffect } from 'react';
import axios from 'axios';

import Trending from '../../molecules/Trending/trending';

export default function Home(){
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUserData(response.data)
  }

  useEffect(() => {
    fetchData()
  },[])
  return(
    <div className={styles.outer}>
        <aside className={styles.nav}>

        </aside >

        <section className={styles.feed}>
            <header className={styles.header}>
               <Header /></header>
        <section className={styles.feed}>
            
            <Tweet/>
            {userData.map((person) => {
              return (
                <>
                  <Card userProfile={person}/>
                </>
              )
            })}
           
        </section>
        </section>
         


        <aside className={styles.hashtag}>
           <Trending />

        </aside>
    </div>
  )
}