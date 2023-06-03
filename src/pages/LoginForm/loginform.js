import  { useState } from 'react';
import './loginform.css'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

const LoginForm = () => {
 

  const navigate = useNavigate()
  function backTo(){
    navigate('/signup')
  }

  function goToSignUp(){
    localStorage.setItem('userData', JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      dob:{
        month: month,
        date: date,
        year: year
      }

    }))

    navigate('/')
    // if(name === name || email === email || phone === phone ){
    //   alert("You are alreadyregistred")
    //   navigate("/")
    // }
  }  


  


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [year, setYear] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

  };
 
  const validateName = (input) => {
    return input.trim().length > 0;
  };

  const validatePhone = (input) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(input);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validateDate = (input) => {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  };

  const isFormValid = () => {
    return (
      validateName(name) &&
      validatePhone(phone) &&
      validateEmail(email) &&
      validateDate(`${month} ${date} ${year}`)
    );
  };


  

  return (
   
     <div className="signup-container">
      <header className="head">
             <RxCross2 onClick={backTo} className="cut"/> 
      </header>   
      <h1>Create your Twitter account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
           

        <TextField id="outlined-basic" label="Name" variant="outlined" 
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
         sx={{width:"95%"}}
        />
        {!validateName(name)? <small>Please enter a valid name.</small> : ''}  

            
          {/* we can change the condition according to our needs */}
        </div>
        <div className="form-group">

        <TextField id="outlined-basic" label="Phone" variant="outlined" 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            sx={{width:"95%"}}
          />
          {!validatePhone(phone) && <small>Please enter a valid 10-digit phone number.</small>}
        </div>
        <div className="form-group">

        <TextField id="outlined-basic" label="email" variant="outlined" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{width:"95%"}}
          />
          {!validateEmail(email) && <small>Please enter a valid email address.</small>}
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <p className="dob-disclaimer">
            This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
          </p>
          <div className="dob-group">
            <input
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Day"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          {!validateDate(`${month} ${date} ${year}`) && <small>Please enter a valid date of birth.</small>}
          
        </div>
        <button type="submit" disabled={!isFormValid()} onClick={goToSignUp}>
          Next
        </button>
      </form>
    </div>
  );
};


export default LoginForm;
