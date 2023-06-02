import style from './tweet.module.css';
import { Avatar } from '@mui/material';
import {CiImageOn } from 'react-icons/ci'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {VscSmiley} from 'react-icons/vsc'
import {MdOutlineMoreTime} from 'react-icons/md'
import {GrLocation} from 'react-icons/gr'
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import TweetCard from '../../Atoms/TweetCard/tweetCard';


export default function Tweet(){
    const[tweets, setTweets] =useState([]);
    const[text, setText]=useState([])

    function postTweet(){
        let val =JSON.parse(localStorage.getItem('userData'))

        axios.post("http://localhost:3001/user", {id: tweets.length+1, name: val.name, username: val.email, desc: text, image:"https://www.shutterstock.com/image-vector/no-image-available-icon-template-260nw-1036735678.jpg"})

        axios.get("http://localhost:3001/user").then((res)=> setTweets(res.data.reverse()))
    }
    

    useEffect(()=>{
        const fetchTweets = async () => {
            try{
                const response = await fetch('http://localhost:3000/user');
                const data = await response.json();
                data.reverse();
                setTweets(data);
            }
            catch(error){
                console.error('Error occured:', error);
            }
    }; 
    fetchTweets();
},tweets)

     

    const inputRef= useRef('null');
    return(
        
    
        <div className={style.outer}>
         <div className={style.upper}>
        <Avatar src="/broken-image.jpg" sx={{height:"45px", width:"45px"}}/>
         <input  onChange={(e)=>setText(e.target.value)}
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
         <button onClick={postTweet} className={style.tweetBtn} >Tweet</button>
         </div>

         <div>
         {
                tweets.map((Tweet)=>(
                  <TweetCard key={Tweet.id} user={Tweet}/> 
                ))
            }
         </div>
        <div> 
        <button className={style.tweetBtn}>Tweet</button>
      </div>
    </div>

  );
}
