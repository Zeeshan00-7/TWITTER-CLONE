import styles from './trending.module.css'
import {BiSearch} from 'react-icons/bi';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useState } from 'react';
import { Dialog, DialogContent, DialogContentText } from '@mui/material';


export default function Trending(){

  const[open, setOpen]=useState(false);


  const [trendingList, setTrendingList] = useState([
    {
      id: 1,
      place: "Trending in India",
      trend: "#Protest",
      tweet: "11.2m tweets",
    },
    {
      id: 2,
      place: "Trending in World",
      trend: "#Putin",
      tweet: "121.2k tweets",
    },
    {
      id: 3,
      place: "Sports Trending",
      trend: "#ViratKohli",
      tweet: "14.2k tweets",
    },
    {
      id: 4,
      place: "Trending in Bihar",
      trend: "#glass-bridge",
      tweet: "6.8k tweets",
    },
    {
      id: 5,
      place: "Poltics Trending",
      trend: "#rahul_gandhi",
      tweet: "9.2k tweets",
    },
    {
      id: 6,
      place: "Trending in Parliament",
      trend: "#sansad_bhavan",
      tweet: "8.2k tweets",
    },
    {
      id: 7,
      place: "Economics trending",
      trend: "#GDP",
      tweet: "4.2k tweets",
    },
    {
      id: 8,
      place: " trending",
      trend: "#GDP",
      tweet: "4.28k tweets",
    },
  ]);



  const handleClick = (id) => {
    const newTrendingList = trendingList.reverse().filter((list) => id !== list.id)
    setOpen(false)

    
    setTrendingList(newTrendingList)
  }
  return (
    <div>
      <div className={styles.searchInput}>
        <span>
          <BiSearch />
        </span>
        <input type="search" placeholder="Search Twitter" />
      </div>
      <section className={styles.trendingSection}>
        <h3>What's happening</h3>
        
         
          {trendingList.map((trends) => {
            return (
              <>
              
              <div key = {trends.id} className={styles.trendingTweets}>
             
                <div>
              <span>{trends.place}</span>
             


             <h5>{trends.trend}</h5>
              <span>{trends.tweet}</span> 
              </div>
              
              <div>
              <MoreHorizIcon  onClick={()=>setOpen(true)} className={styles.dotIcon}/>
              </div>
             
              </div>
            
              <Dialog sx={{background: 'transparent'}} open={open} onClose={()=>setOpen(false)}>
                <DialogContent>
                  <DialogContentText>
                  <div className={styles.box}>
                  <p onClick={() => handleClick(trends.id)}>not interested</p>
                  <p>This post is harmful or spammy</p>
                </div>

                  </DialogContentText>
                </DialogContent>
              </Dialog>
              
              
              </>
            )
          })}
        
           
              
        
        
          
      </section>
    </div>
  );
}
