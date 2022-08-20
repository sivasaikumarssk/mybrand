import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './Components/login'
import { Signup } from './Components/Signup'
import {Navbar} from "./Components/Navbar"
import {Routes,Route} from "react-router"
import {Home} from "./Components/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      {/* <Navbar/> */}
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
      </Routes>


    </div>
  )
}

export default App
