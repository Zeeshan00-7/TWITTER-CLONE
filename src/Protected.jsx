import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Protected = (props) => {
    const {components} = props;
    const navigate = useNavigate();

    useEffect(() => {
        let isLogIn = JSON.parse(localStorage.getItem("userData"))
        if(!isLogIn){
            navigate("/")
        }
    })

  return (
    <>
    <components/>
    </>
  )
}

export default Protected