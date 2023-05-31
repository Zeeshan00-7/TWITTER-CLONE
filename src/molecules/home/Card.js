import style from './Card.module.css'
import { Avatar } from '@mui/material'
import { FaRegComment} from 'react-icons/fa';
import {RiShareForwardBoxFill} from 'react-icons/ri'
import { AiOutlineHeart} from 'react-icons/ai';
import { IoIosStats} from 'react-icons/io'
import {LuShare} from 'react-icons/lu'
import { useState } from 'react';

export default function Card({name,username,des,img,userimg,id}){
    const[num, setNum] =useState(157)
    return(
        <div className={style.card}>
            <header className={style.head}>
                <div>
                <Avatar alt="Travis Howard" src={img} />
                </div>
                <div>
                <div className={style.user}>
                <h3>{name}</h3> <p>{username}</p>
                </div>
                <p>{des}</p>
                </div>
            </header>
            
            <div className={style.img_container}>
                <img src={img}/>
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