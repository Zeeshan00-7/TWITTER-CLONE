import styles from './trending.module.css'
import {BiSearch,BiDotsHorizontalRounded} from 'react-icons/bi';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react';

export default function Trending(){

  const[open, setOpen]=useState(false)

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
              <BiDotsHorizontalRounded className={styles.dotIcon} onClick={()=>setOpen(true)}/>
              <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={styles.box}>
                  <p>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>
                   </Dialog>
         
             <h5>#ViratKohli</h5>
             <span>1000 Tweets</span>
              
            </div>
            <div className={styles.trendingTweets}>
            <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon} onClick={()=>setOpen(true)}/>
              <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={styles.box}>
                  <p>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>
                   </Dialog>
             
                  
             
             <h5>#ViratKohli</h5>
             <span>1000 Tweets</span>
              
            </div>
            <div className={styles.trendingTweets}>
            <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon} onClick={()=>setOpen(true)}/>
              <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={styles.box}>
                  <p>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>
                   </Dialog>
             
                  
             
             <h5>#ViratKohli</h5>
             <span>1000 Tweets</span>
              
            </div>
            <div className={styles.trendingTweets}>
            <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon} onClick={()=>setOpen(true)}/>
              <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={styles.box}>
                  <p>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>
                   </Dialog>
             
                  
             
             <h5>#ViratKohli</h5>
             <span>1000 Tweets</span>
              
            </div>
            <div className={styles.trendingTweets}>
            <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon} onClick={()=>setOpen(true)}/>
              <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={styles.box}>
                  <p>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>
                   </Dialog>
             
                  
             
             <h5>#ViratKohli</h5>
             <span>1000 Tweets</span>
              
            </div>

            <div className={styles.trendingTweets}>
            <span>Trending in India</span>
              <BiDotsHorizontalRounded className={styles.dotIcon} onClick={()=>setOpen(true)}/>
              <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={styles.box}>
                  <p>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>
                   </Dialog>
             
                  
             
             <h5>#ViratKohli</h5>
             <span>1000 Tweets</span>
              
            </div>


          </section>
        </div>
    )
}

{/*
   <button className={styles.tweetBtn} onClick={()=>setOpen(true)}>Tweet</button>
            <Dialog open={open} onClose={()=>setOpen(false)} >
              
                
                   
                    <Tweet style/>
                  
                   
               
            </Dialog>
            
        </div>
*/}