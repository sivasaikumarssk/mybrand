import {Login} from "../Components/Login"
import {Signup} from "../Components/Signup";
import { useNavigate } from "react-router";
import { Home } from "../Components/Home";
import { Link } from "react-router-dom";
export const Navbar = ()=>{
    const token = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
   
    const removeToken = ()=>{
        localStorage.removeItem("user");
        alert('Sucessfully Loggedout');
        navigate('/signup')
    }
    return(
        <div style={{display:"flex",gap:"200px"}}>
            {/* <a href="/login">Login</a> &nbsp;
            <a href="/signup">Register</a> */}
            <Link to="/Signup"><h3>{token ? token.name : <p>Signup</p>}</h3></Link>
            <h3 className="logout">{token ? <small onClick={removeToken}>Logout</small> : null}</h3> 
            <Link to="/login">{token ? null : <h3>Login</h3>}</Link>
        </div>
    )
}