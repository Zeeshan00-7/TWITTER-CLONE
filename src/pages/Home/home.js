import React from 'react'
import styles from './home.module.css'

import Header from '../../molecules/Feed/header';
import Tweet from '../../molecules/Feed/tweet';


import Trending from '../../molecules/Trending/trending';
import Navbar from '../../molecules/Nav/nav';
import Follow from '../../molecules/Follow/follow';


export default function Home(){

  return(
    <div className={styles.outer}>
        <aside className={styles.nav}>
           <Navbar />
        </aside >

        <section className={styles.feed}>
            <header className={styles.header}>
               <Header /></header>
        <section className={styles.feed}>
          <Tweet/>
            
           
          
           
        </section>
        </section>
         


        <aside className={styles.hashtag}>
           <Trending />
           <Follow />

        </aside>
    </div>
  )
}