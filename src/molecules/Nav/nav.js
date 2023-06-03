import React from 'react'
import styles from './nav.module.css';
import { FaTwitter, FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaClipboardList, FaTwitterSquare, FaUserAlt, FaMehBlank} from "react-icons/fa";
import  {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogBox from '../../Atoms/dialogBox';
import { Avatar } from '@mui/material'


const Navbar = () => {
    const navigate= useNavigate()

    function toSignIn(){
        navigate('/')
    }
    const [open, setOpen]=useState(false);
  return (
    <div className={styles.container}>
        
        <ul className={styles.bar}>
            <li className={styles.bar2}>
                <a className= {styles.ancor} href='/bird'>
                    <FaTwitter className={styles.bird}/></a>
            </li >
            <li className={styles.bar2}>
                <a className= {styles.ancor} href='/home'>
                    <FaHome className={styles.home}/>
                    Home
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/explore'>
                    <FaHashtag className={styles.icons}/>
                    Explore
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor} href='/notificatios'>
                    <FaRegBell className={styles.icons}/>
                    Notifications
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/messages'>
                    <FaRegEnvelope className={styles.icons}/>
                    Messages
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/bookmarks'>
                    <FaRegBookmark className={styles.icons}/>
                    Bookmarks
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/lists'>
                    <FaClipboardList className={styles.icons}/>
                    Lists
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/twitter'>
                    <FaTwitterSquare className={styles.icons}/>
                    Twitter Blue
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/profile'>
                    <FaUserAlt className={styles.icons}/>
                    Profile
                    </a>
            </li>
            <li className={styles.bar2}>
                <a className= {styles.ancor}href='/more'>
                    <FaMehBlank className={styles.icons}/>
                    More
                    </a>
            </li>
            <DialogBox />
            
        </ul>
        <div className={styles.changeAccount}>
            <div className={styles.user}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />    
            <button className={styles.userChange} onClick={()=>setOpen(true)}>user account</button>
            </div>
            <Dialog open={open} onClose={()=>setOpen(false)} sx={{width:"500px", height:"1100px"}}>
                <DialogTitle></DialogTitle> 
                <DialogContent>
                    <DialogContentText></DialogContentText>
                </DialogContent>
                <DialogActions >
                    <div sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                    <Button onClick={toSignIn}>Log out @username</Button>
                    <Button onClick={toSignIn}>Add an existing account</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
        
    </div>
  )
}

export default Navbar