import style from './Card.module.css'
// import { Avatar } from '@mui/material'
import { FaRegComment} from 'react-icons/fa';
import {RiShareForwardBoxFill} from 'react-icons/ri'
import { AiOutlineHeart} from 'react-icons/ai';
import { IoIosStats} from 'react-icons/io'
import {LuShare} from 'react-icons/lu'
import { useState } from 'react';

export default function Card({user}){

  
const {first_name,last_name,id,caption,images,replyCount,retweetsCount,views} = user;
  const [filled, setFilled] = useState(false);
const[likes,setLikes] = useState(685)
    const handleClick = () => {
      setFilled(!false); 
      let initial = 685;
      setLikes(initial === likes ? likes+1: initial)
    };
 
   
    return(
        <div className={style.card}>
            <header className={style.head} key={id}>
                <div>
                <div className={style.userImageContainer}><img src={images} alt='asdf'/></div>
                </div>
                < div>
                <div className={style.user}>
                <h3>{first_name}</h3> <p>@{last_name}</p>
                </div>
                <p>{caption}</p>
                </div>
            </header>
            
            <div className={style.img_container}>
                <img src={images} alt='postImage'/>
            </div>
            <footer className={style.icons}>
                  <div className={style.alignIcon}>
                    <FaRegComment/> 
                    <p>{replyCount}</p>
                  </div>

                  <div className={style.alignIcon}>
                  <RiShareForwardBoxFill/>
                  <p>{retweetsCount}</p>
                  </div>

                  <div className={style.alignIcon}>
                    <AiOutlineHeart onClick={() => handleClick()} style={{ 
                      color: filled ? 'red' : 'grey' }} />
                    <p>{likes}</p>
                  </div>

                  <div className={style.alignIcon}>
                    <IoIosStats/>
                    <p>{views}</p>
                  </div>
                  <div className={style.alignIcon}>
                    <LuShare/>
                    <p>78</p>
                  </div>
            </footer>
          
        </div>
    )
}