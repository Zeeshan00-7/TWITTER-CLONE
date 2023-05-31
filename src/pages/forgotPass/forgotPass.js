import style from './forgotPass.module.css'
import { useState } from 'react';
import { BsTwitter } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { SiBackblaze } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button  } from '@mui/material';

export default function ForgotPass(){

    const[pass, setPass] = useState('')
    const[cnfrm, setCnfrm]=useState('')

    const navigating= useNavigate()
    function backTo(){
        navigating('/')
    }
    function newPass(e){
          setPass(e.target.value)
    }
    function cnfrmPass(e){
        setCnfrm(e.target.value)
    }
    function changePass(){
        if(pass === cnfrm){
            alert("Successfully changed the password")
            navigating('/home')
        }else{
            alert("Both tha passwords should be same!!")
        }
    }
    return(
        <div className={style.outer}>
            <header className={style.head}>
             <RxCross2 onClick={backTo} className={style.cut}/> 
             </header>   
             <BsTwitter className={style.twitIcon}/>
             
             <h1>Set new Password</h1>

             <TextField id="outlined-basic" label="new Password" variant="outlined" 
             sx={{ width: "60%" }} onChange={newPass}/>
             <TextField id="outlined-basic" label="connfirm new password" variant="outlined" 
             sx={{ width: "60%" }} onChange={cnfrmPass}/>
             <Button variant="contained"
             sx={{width: "60%", borderRadius: "50px"}}
             onClick={changePass}
             >Proceed</Button>
        </div>
    )
}