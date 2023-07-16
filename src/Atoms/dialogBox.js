// import { Avatar } from '@mui/material'
import styles from './dialogBox.module.css'
import { Dialog } from '@mui/material'
import { useState } from 'react';
import Tweet from '../molecules/Feed/tweet';


export default function DialogBox(){
    const[open, setOpen]=useState(false)
    
    return(
        <div>

<button className={styles.tweetBtn} onClick={()=>setOpen(true)}>Tweet</button>
            <Dialog open={open} onClose={()=>setOpen(false)} >
              
                
                   
                    <Tweet />
                  
                   
               
            </Dialog>
            
        </div>
    )
}