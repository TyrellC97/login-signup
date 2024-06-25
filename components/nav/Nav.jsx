import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";


export default function Nav() {
  return (
   <div className="nav">
   <div className="login"><Link to= "/"> <h3>Login</h3></Link> </div>
  <div className="signin"> <Link to= "/signup"> <h3>Sign Up</h3> </Link></div>
   </div>
  )
}
