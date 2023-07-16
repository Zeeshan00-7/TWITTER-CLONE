import React from "react";
import styles from "./signIn.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  function forgotPass() {
    navigate("/forgotPass");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  // const details = JSON.parse(localStorage.getItem("userData"));

  // const handleClick = () => {

  //   details.map((item) => item.phone === input? navigate("/home"): console.log(item.phone, "error"))

  // }
  //   const details = JSON.parse(localStorage.getItem("userData"));
  // let alertShown = false;

  // const handleClick = () => {
  //   console.log(details)
  //   if(details == null ){
  //     if(!alertShown) {
  //       alert("User Not Found");
  //       alertShown = true;
  //     }
  //   } else {
  //     details.map((item => input === item.phone ? navigate("/home"): alert("User not Found")))
  //   }
  // }
  // const details = JSON.parse(localStorage.getItem("userData"));
  // let alertShown = false;

  // const handleClick = () => {
  //   console.log(details)

  //     if(!alertShown) {
  //       alert("User Not Found");
  //       setInput("")
  //       alertShown = true;

  //   } else {
  //     const isPhoneMatched = details.some((item => input === item.phone));
  //     if(isPhoneMatched) {
  //       navigate("/home");
  //      }
  //      else {
  //       if(!alertShown) {
  //         alert("User not Found");
  //         setInput("")
  //         alertShown = true;
  //       }
  //     }
  //   }
  // }

  const details = JSON.parse(localStorage.getItem("userData"));
  let alertShown = false;

  const handleClick = () => {
    if (details == null) {
      if (!alertShown) {
        alert("User Not Found");
        setInput("");
        alertShown = true;
      }
    } else {
      const isPhoneMatched = details.some((item) => input === item.phone);
      if (isPhoneMatched) {
        navigate("/home");
      } else {
        if (!alertShown) {
          alert("User not Found");
          setInput("");
          alertShown = true;
        }
      }
    }
  };

  return (
    <section className={styles.signUpSection}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <BsTwitter />
        </div>
        <div className={styles.signInText}>
          <p>Sign in to Twitter</p>
        </div>
        <div className={styles.signInWithGoogle}>
          <input />
          <p>
            <span>
              <FcGoogle />
            </span>
            Sign in with Google
          </p>
        </div>
        <div className={styles.signInWithApple}>
          <input />
          <p>
            <span>
              <SiApple />
            </span>
            Sign in with Apple
          </p>
        </div>
        <div className={styles.underline}></div>
        <p className={styles.p}>or</p>
        <div className={styles.underline_2}></div>
        <div>
          <TextField 
          sx={{width:"18.8vw"}}
          label="Phone,email or username"
          variant="outlined"
          value={input}
          onChange={handleChange}
          />
        
        </div>

        <div className={styles.nextBtn} onClick={handleClick}>
          <span>Next</span>
        </div>

        <div className={styles.password} onClick={forgotPass}>
          <span>Forgot Password?</span>
        </div>
        <div className={styles.footer}>
          <p>
            Don't have an account?
            <button onClick={() => navigate("/signup")}>Sign up</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
