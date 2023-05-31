import styles from './trending.module.css'
import {BiSearch,BiDotsHorizontalRounded} from 'react-icons/bi';

export default function Trending(){
    return(
        <div >

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
        </div>
    )
}