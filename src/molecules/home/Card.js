import style from './Card.module.css'
// import { Avatar } from '@mui/material'
import { FaRegComment} from 'react-icons/fa';
import {RiShareForwardBoxFill} from 'react-icons/ri'
import { AiOutlineHeart} from 'react-icons/ai';
import { IoIosStats} from 'react-icons/io'
import {LuShare} from 'react-icons/lu'
import { useState } from 'react';

export default function Card({userProfile}){

  const {name,username,desc,image,userImage,id} = userProfile;

  const [filled, setFilled] = useState(false);

    const handleClick = () => {
      setFilled(true);
      setNum(num+1)
    };
    const[num, setNum] =useState(157)
    return(
        <div className={style.card}>
            <header className={style.head} key={id}>
                <div>
                <div className={style.userImageContainer}><img src={userImage} alt='asdf'/></div>
                </div>
                < div>
                <div className={style.user}>
                <h3>{name}</h3> <p>@{username}</p>
                </div>
                <p>{desc}</p>
                </div>
            </header>
            
            <div className={style.img_container}>
                <img src={image} alt='postImage'/>
            </div>
            <footer className={style.icons}>
                  <div className={style.alignIcon}>
                    <FaRegComment/> 
                    <p>157</p>
                  </div>

                  <div className={style.alignIcon}>
                  <RiShareForwardBoxFill/>
                  <p>3.3k</p>
                  </div>

                  <div className={style.alignIcon}>
                    <AiOutlineHeart onClick={handleClick} style={{ 
                      color: filled ? 'red' : 'grey' }} />
                    <p>{num}</p>
                  </div>

                  <div className={style.alignIcon}>
                    <IoIosStats/>
                    <p>90</p>
                  </div>
                  <div className={style.alignIcon}>
                    <LuShare/>
                    <p>78</p>
                  </div>
            </footer>
          
        </div>
    )
}