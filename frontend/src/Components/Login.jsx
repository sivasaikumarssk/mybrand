import { useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Login = ()=>{
    const navigate = useNavigate();
    const [login,setLogin] = useState(false);
    if(login){
        navigate("/")
    }
    const [user,setUser] = useState({
        email:"",password:""
    });


    const handleChange = (e)=>{
        const {id,value} = e.target;
        setUser({...user,[id]:value})
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setLogin(false);
        axios.post(`https://brand-beyond.herokuapp.com/login`,user).then((res)=>{
            setUser(res.data.user);
            localStorage.setItem("user",JSON.stringify(res.data.user));
            setLogin(true)
            alert("Login Sucessful");
            navigate("/")
        }).catch((err) =>{
            // console.log(err);
            alert(err.response.data.message)

        })
    }
    return(
        <div>
            <h3>Brand-and-Beyondit</h3>
            <h3>Login page</h3>
            <form action="" onSubmit={handleClick}>
            <label htmlFor="">Email</label> &nbsp;
            <input  type="email" id="email" placeholder="Enter Your Email" onChange={handleChange}/> <br /> 
            <label htmlFor="">Password</label> &nbsp;
            <input  type="password" id="password" placeholder="Enter Password" onChange={handleChange}/> <br />
            
            <input  type="submit" onClick={handleClick}/>
            </form>
            Not Registered ? <Link to="/signup" className="signup">Signup</Link>
        </div>
    )
}