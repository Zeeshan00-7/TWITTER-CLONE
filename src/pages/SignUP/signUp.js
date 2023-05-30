import style from './signUp.module.css'
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Button  } from '@mui/material';
import { RxCross2 } from "react-icons/rx";


export default function SignUP(){
   
  const navigate =useNavigate()

  function handleTravel(){
    navigate('/loginform')
  }
  function backToSign(){
    navigate('/')
  }

  function backTo(){
      navigate('/')
  }
  

    return(
       <div className={style.outer}>
       <header className={style.head}>
             <RxCross2 onClick={backTo} className={style.cut}/> 
         </header> 
        <div className={style.iconT}>
        <BsTwitter className={style.contain}/>
        </div>
        <h1>Join Twitter today</h1>

        <div className={style.bar}>
            <FcGoogle/>
          <p>Sign Up with Google</p>

        </div>
        <div className={style.bar}>
            <AiFillApple/>
            <h4>Sign Up with Apple</h4>
            </div>
            <p>or</p>
            <Button variant="contained" onClick={handleTravel}
             sx={{width: "40%", borderRadius: "50px", height: "50px"}}>Create account</Button>
            <p className={style.privacy}>By signing up, you agree to the <a href='https://twitter.com/en/tos'>Terms of Service,</a>and <a href='https://twitter.com/en/privacy'>Privacy Policy</a>, including <a href='https://help.twitter.com/en/rules-and-policies/twitter-cookies'>Cookie Use.</a></p>
            
            <p>have an account already? <span className={style.logText} onClick={backToSign}  >Log in</span></p>
        
       </div>
    )
}