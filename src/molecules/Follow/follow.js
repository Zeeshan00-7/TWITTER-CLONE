import React from 'react';
import style from './follow.module.css';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

const Follow = () => {
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);



  return (
    <div className={style.followSection}>
        <h3>Who to follow</h3>
        <div className={style.followUser}>
        
            <Avatar img={'https://pbs.twimg.com/media/FxgXG3VaAAIgNJ6?format=jpg&name=small'} alt='followUserImg' sx={{marginLeft: "0.6rem"}}/>
            <div className={style.text}>
                <h5>Alex Costa</h5>
                <p>@alex_costa</p>
            </div>
            <div >
                <button className={style.followBtn} onClick={() => setShow(!show)} >{show ? 'Following' : "Follow"}</button>
            </div>

        </div>
        <div className={style.followUser}>
        
        <Avatar img={"https://unsplash.com/photos/mEZ3PoFGs_k"} alt='followUserImg' sx={{marginLeft: "0.6rem"}}/>
        <div className={style.text}>
            <h5>Alex David</h5>
            <p>@alex_david</p>
        </div>
        <div >
            <button className={style.followBtn}onClick={() => setShow1(!show1)}>{show1 ? 'Following' : "Follow"}</button>
        </div>

    </div>
    <div className={style.followUser}>
        
        <Avatar img={"https://unsplash.com/photos/mEZ3PoFGs_k"} alt='followUserImg' sx={{marginLeft: "0.6rem"}}/>
        <div className={style.text}>
            <h5>Mrinalni</h5>
            <p>@mri_nalni0</p>
        </div>
        <div className={style.btn}>
            <button onClick={() => setShow2(!show2)} className={style.followBtn}>{show2 ? 'Following' : "Follow"}</button>
        </div>

    </div>
    </div>
    
  )
}

export default Follow