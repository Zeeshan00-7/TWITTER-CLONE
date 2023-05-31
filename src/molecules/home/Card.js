import style from './Card.module.css'
import { Avatar } from '@mui/material'
import { FaRegComment} from 'react-icons/fa';
import {RiShareForwardBoxFill} from 'react-icons/ri'
import { AiOutlineHeart} from 'react-icons/ai';
import { IoIosStats} from 'react-icons/io'
import {LuShare} from 'react-icons/lu'
import { useState } from 'react';

export default function Card(){
    const[num, setNum] =useState(157)
    return(
        <div className={style.card}>
            <header className={style.head}>
                <div>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </div>
                <div>
                <div className={style.user}>
                <h3>username</h3> <p>@abc_titans03</p>
                </div>
                <p>write a brief description here write a brief description herewrite a brief description herewrite a brief description here</p>
                </div>
            </header>
            
            <div className={style.img_container}>
                <img src=''/>
            </div>
            <footer className={style.icons}>
                  <div className={style.alignIcon}>
                    <FaRegComment/> 
                    <p>{num}</p>
                  </div>

                  <div className={style.alignIcon}>
                  <RiShareForwardBoxFill/>
                  <p>{num}</p>
                  </div>

                  <div className={style.alignIcon}>
                    <AiOutlineHeart onClick={()=>{setNum(num+1)}}/>
                    <p>{num}</p>
                  </div>

                  <div className={style.alignIcon}>
                    <IoIosStats/>
                    <p>{num}</p>
                  </div>
                  <div className={style.alignIcon}>
                    <LuShare/>
                    <p>{num}</p>
                  </div>
            </footer>
          
        </div>
    )
}