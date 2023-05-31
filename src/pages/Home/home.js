import React from 'react'
import styles from './home.module.css'
import Card from '../../molecules/home/Card'
import Header from '../../molecules/home/header';
import Tweet from '../../molecules/home/tweet';
// import { useState } from 'react';

import Trending from '../../molecules/Trending/trending';

export default function Home(){
  // const [input, setInput] = useState(" ");
  return(
    <div className={styles.outer}>
        <aside className={styles.nav}>

        </aside >

        <section className={styles.feed}>
            <header className={styles.header}>
               <Header /></header>
        <section className={styles.feed}>
            
            <Tweet/>
            <Card />
        </section>
        </section>
         


        <aside className={styles.hashtag}>
           <Trending />

        </aside>
    </div>
  )
}