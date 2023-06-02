import { Avatar } from '@mui/material'
import styles from './dialogBox.module.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react';
import Tweet from '../molecules/home/tweet';


export default function DialogBox(){
    const[open, setOpen]=useState(false)
    
    return(
        <div>

<button className={styles.tweetBtn} onClick={()=>setOpen(true)}>Tweet</button>
            <Dialog open={open} onClose={()=>setOpen(false)} >
              
                
                   
                    <Tweet style/>
                  
                   
               
            </Dialog>
            
        </div>
    )
}