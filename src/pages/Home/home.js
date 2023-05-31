import React from 'react'
import styles from './home.module.css';
// import { useState } from 'react';
import {BiSearch,BiDotsHorizontalRounded} from 'react-icons/bi';

export default function Home(){
  // const [input, setInput] = useState(" ");
  return(
    <div className={styles.outer}>
        <aside className={styles.nav}>

        </aside >

        <section className={styles.feed}>
            <header className={styles.header}>
              <h1>this is nav</h1>
            </header>
        </section>

        <aside className={styles.hashtag}>
          <div className={styles.searchInput}>
            <span><BiSearch/></span>
            <input type='search' placeholder='Search Twitter' />
          </div>
          <section className={styles.trendingSection}>
            <h3>What's happening</h3>
            <div className={styles.trendingTweets}>
              <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon}/>
              <h5>#ViratKohli</h5>
              <span>1000 Tweets</span>
            </div>
            <div className={styles.trendingTweets}>
              <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon}/>
              <h5>#ViratKohli</h5>
              <span>1000 Tweets</span>
            </div>
            <div className={styles.trendingTweets}>
              <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon}/>
              <h5>#ViratKohli</h5>
              <span>1000 Tweets</span>
            </div>
            <div className={styles.trendingTweets}>
              <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon}/>
              <h5>#ViratKohli</h5>
              <span>1000 Tweets</span>
            </div>
            <div className={styles.trendingTweets}>
              <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon}/>
              <h5>#ViratKohli</h5>
              <span>1000 Tweets</span>
            </div>
            <div className={styles.trendingTweets}>
              <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon}/>
              <h5>#ViratKohli</h5>
              <span>1000 Tweets</span>
            </div>


          </section>
        

        </aside>
    </div>
  )
}