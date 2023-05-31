import style from './tweet.module.css';
import { Avatar, Button } from '@mui/material';
import {CiImageOn } from 'react-icons/ci'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {VscSmiley} from 'react-icons/vsc'
import {MdOutlineMoreTime} from 'react-icons/md'
import {GrLocation} from 'react-icons/gr'

export default function Tweet(){
    return(
        <div className={style.outer}>
         <div className={style.upper}>
        <Avatar src="/broken-image.jpg" sx={{height:"45px", width:"45px"}}/>
         <input className={style.input} placeholder='What is happening?!'/>
         </div>
         <div className={style.post}>
         <div className={style.allIcons}>
         <CiImageOn/>
         <AiOutlineFileGif/>
         <BiPoll/>
         <VscSmiley/>
         <MdOutlineMoreTime/>
         <GrLocation/>
         </div>
         <Button variant="contained" sx={{width:"13%", height:"7%", borderRadius:"50px", padding:"5px", marginBottom:"10px"}}>Tweet</Button>
         </div>
        </div>
    )
}