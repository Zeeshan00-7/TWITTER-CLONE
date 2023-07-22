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

    const [open, setOpen]=useState(false);
    let ldata = JSON.parse(localStorage.getItem("userData"));
   ldata.reverse();
   

   const handleLogout = (id) => {
    alert('Do you want to log out ?')
    let data = JSON.parse(localStorage.getItem("userData"));
    let index = data.findIndex((item) => item.id === id);
    data.splice(index,1);
    localStorage.setItem("userData",JSON.stringify(data))
    return navigate("/");
    

   }
  return (
    <div className={styles.container}>
        
        <ul className={styles.bar}>
            <li className={styles.bar2}>
                <p className= {styles.ancor} >
                    <FaTwitter className={styles.bird}/></p>
            </li >
            <li className={styles.bar2}>
                <p className= {styles.ancor} >
                    <FaHome className={styles.home}/>
                    Home
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaHashtag className={styles.icons}/>
                    Explore
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor} >
                    <FaRegBell className={styles.icons}/>
                    Notifications
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaRegEnvelope className={styles.icons}/>
                    Messages
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaRegBookmark className={styles.icons}/>
                    Bookmarks
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaClipboardList className={styles.icons}/>
                    Lists
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaTwitterSquare className={styles.icons}/>
                    Twitter Blue
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaUserAlt className={styles.icons}/>
                    Profile
                    </p>
            </li>
            <li className={styles.bar2}>
                <p className= {styles.ancor}>
                    <FaMehBlank className={styles.icons}/>
                    More
                    </p>
            </li>
            
            
        </ul>
        <DialogBox />
        <div className={styles.changeAccount}>
            <div onClick={()=>setOpen(true)} className={styles.user}>
            {/* <Avatar
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQg0aZtQMCQ0ADZrwmRHXTsxNtYP1BGuhAMA7wXdQoPcaaTXubsWqhqb_MYnNBBMf-k-5_n1AN6GyoJCkE"
          sx={{ height: "45px", width: "45px" }}
        />
            <button className={styles.userChange} onClick={()=>setOpen(true)}>{ldata[0].name}</button> */}
             <Avatar src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQg0aZtQMCQ0ADZrwmRHXTsxNtYP1BGuhAMA7wXdQoPcaaTXubsWqhqb_MYnNBBMf-k-5_n1AN6GyoJCkE" alt='followUserImg' sx={{marginLeft: "0.6rem", marginRight:"1.5rem", height: 48, width: 48}}/>
        <div className={styles.text}>
            <h5>{ldata[0].name}</h5>
            <p>@{ldata[0].name}</p>
        </div>
            </div>
            <Dialog open={open} onClose={()=>setOpen(false)} sx={{width:"500px", height:"1100px"}}>
                <DialogTitle></DialogTitle> 
                <DialogContent>
                    <DialogContentText></DialogContentText>
                </DialogContent>
                <DialogActions >
                    <div sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                    <Button onClick={() => handleLogout(`${ldata[0].id}`)}>Log out @{ldata[0].name}</Button>
                    <Button onClick={() => navigate("/")}>Add an existing account</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
        
    </div>
  )
}

export default Navbar