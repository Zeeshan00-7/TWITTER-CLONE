import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props){
    const { Component } = props;
    const navigate = useNavigate()
    
    useEffect(()=>{
        let isLogin = JSON.parse(localStorage.getItem("userData"));
        if(!isLogin){
            navigate("/")
        }
    });

    return(
        <>
        <Component />
        </>
    )

}