import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <><div className="log-container">
        <h2>Welcome!</h2>
   <div className='links'>
    <a href="#"><button className='act-btn'><img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> </button></a>
    <a href="#"><button className='act-btn'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/></button></a>
    <a href="#"><button className='act-btn'> <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/> </button></a>
   </div>
<div className="or">or</div>


    <input type="text" className="email text-box" placeholder='me@mail.com' required/> <br />
    <input type="password" className=' text-box password' placeholder='password' required/> 
    <span><input type="checkbox" name="" id="" /> Remember info?</span>
  <Link to='/forgot' className='forgot'>   Forgot Password? </Link>
    <button className='enter-btn'>Enter</button>
    </div>
    
    </>
    
  )
}
