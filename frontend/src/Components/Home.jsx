import { Navbar } from "./Navbar"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Home = ()=>{
    const [user,setUser] = useState([])
    useEffect(()=>{
        axios.get(`https://brand-beyond.herokuapp.com/users`).then((res)=>{
                console.log("res",res.data);
                setUser(res.data);
    })
},[]);
    return(
        <div>
            <h1>Brand-and-Beyondit</h1>
            <Navbar/>
            <h3>User details</h3>
        {user.map((e)=>{
            return(
                <>
                 <div>
                    
                    <table>
                        <tr >
                            <td style={{border:"1px solid white",padding:"5px",width:"250px"}}><h5>{e.name}</h5></td> &nbsp;
                            <td style={{border:"1px solid white"}}><h5>{e.email}</h5></td>
                            
                        </tr>
                    </table>
                    
                    
                    
                </div>   
                </>
            )
        })}
            
        
        </div>
    )
}