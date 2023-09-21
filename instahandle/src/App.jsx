
import { useState } from "react"
import logo from "./assets/instagram.png"
function App() {
var [login,setlogin]=useState(true)
const switchlogin=()=>{
  setlogin(!login)
}
  return (   
      <div className="container">
<div className='user'>
  <img src={logo} alt="" className="image"/>
  <input hidden={login} name="" placeholder="Mobile number or Email" type ="text"/>
  <input hidden={login} name="" placeholder="First Name" type ="text"/>
  <input hidden={login} name="" placeholder="Last Name" type ="text"/>
  <input name="" placeholder="Phone number or username or email " type ="text"/>
  <input  name="" placeholder="Password" type ="password"/>
      <button >{login ? "Sign in"  :"Sign up"}</button>
      <div id="footer">
    {!login ? "Dont't have an account":"Have an account"} <span onClick={switchlogin}>{login ? "Sign up" : "Log in"}</span>
      </div>

      </div>
      </div>
  )
}

export default App
