import style from './tweet.module.css';
import { Avatar, Button } from '@mui/material';
import {CiImageOn } from 'react-icons/ci'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {VscSmiley} from 'react-icons/vsc'
import {MdOutlineMoreTime} from 'react-icons/md'
import {GrLocation} from 'react-icons/gr'
import { useRef, useState } from 'react';

export default function Tweet(){

    const[text, setText]= useState('')

   

    const inputRef= useRef('null');
    return(
        <div className={style.outer}>
         <div className={style.upper}>
        <Avatar src="/broken-image.jpg" sx={{height:"45px", width:"45px"}}/>
         <input  onChange={(e)=>e.target.value}
         className={style.input} placeholder='What is happening?!'/>
         <input ref={inputRef} type='file' style={{display:"none"}}/>
         </div>
         <div className={style.post}>
         <div className={style.allIcons}>
           
         <CiImageOn  onClick={()=> inputRef.current.click()}/>
         <AiOutlineFileGif/>
         <BiPoll/>
         <VscSmiley/>
         <MdOutlineMoreTime/>
         <GrLocation/>
         </div>
         <button className={style.tweetBtn} >Tweet</button>
         </div>
        </div>
    )
}