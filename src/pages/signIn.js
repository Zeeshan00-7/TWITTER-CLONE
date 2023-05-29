import style from './signIn.module.css'
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
 

export default function SignIn(){
    return(
       <div className={style.outer}>
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
            <button className={style.btn}>Create account</button>
            <p className={style.privacy}>By signing up, you agree to the <a href='https://twitter.com/en/tos'>Terms of Service,</a>and <a href='https://twitter.com/en/privacy'>Privacy Policy</a>, including <a href='https://help.twitter.com/en/rules-and-policies/twitter-cookies'>Cookie Use.</a></p>
            
            <p>have an account already? <span className={style.logText}>Log in</span></p>
        
       </div>
    )
}