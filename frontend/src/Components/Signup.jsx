
import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
export const Signup = ()=>{

    const [user, setUser] =useState({name:"",email:"",password:"",});
    const navigate= useNavigate();
    const handleChange= (e) =>{
        const {id,value} = e.target;
        setUser({...user,[id]:value});
    }
    const [register,setRegister] = useState(false)
    if(register){
        navigate('/login')
    }
    const handleClick = (e) =>{
        e.preventDefault();
        console.log("user",user)
        setRegister(false);
        axios.post(`https://brand-beyond.herokuapp.com/register`,user).then((res)=>{
            console.log("data",res.data)
            alert("register successful");
            setRegister(true)
        }).catch((err)=>{
            // console.log(err)
            alert(err.response.data.message)
        })
    }
    return(
        <>
        <h3>Brand-and-Beyondit</h3>
        <div className="signup_div">
        
        <div className="right">
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" id="name" placeholder="Enter your Name" onChange={handleChange} />
                    <br /> <br />
                    <label htmlFor="">Email Adress </label>
                    <input type="email" id="email" placeholder="Enter Email adress" onChange={handleChange} />
                    <br /> <br />
                    <label htmlFor="">Password </label>
                    <input type="password" id="password" placeholder="Enter password" onChange={handleChange}/>

                </div>
                <input type="submit" />
            </form>
            <br />
            Already Registered ? <Link to="/login" className="login">Login</Link>
        </div>
        </div>
        </>
    )

    
}


