import React from "react";
import styles from "./signIn.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  function forgotPass() {
    navigate("/forgotPass");
  }

  const details = JSON.parse(localStorage.getItem("userData"));
  const handleClick = () => {
    if (input.trim().length <= 0) {
      navigate("/");
    } else if (input === details.email || input === details.phone) {
      navigate("/home");
    } else {
      alert("Sorry, we couldn't find your account");
      setInput("");
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

        
          <TextField
           className={styles.outlinedInput}
            label="Phone,email or username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
          />
 

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
