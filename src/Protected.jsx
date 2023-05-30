import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Protected = (props) => {
    const {Components} = props;
    const navigate = useNavigate();

    useEffect(() => {
        let isLogIn = JSON.parse(localStorage.getItem("userData"))
        if(!isLogIn){
            navigate("/")
        }
    })

  return (
    <>
    <Components/>
    </>
  )
}

export default Protected