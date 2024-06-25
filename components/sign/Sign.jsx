import React from 'react'
import './sign.css'
import { useState } from 'react'

export default function Sign() {

    const [password, setPassword] = useState("")
    const [ name, setName] = useState('')
    const [ last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')


 

  return (
    <div className="sign">


<div className='links'>
    <a href="#"><button className='act-btn'><img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> </button></a>
    <a href="#"><button className='act-btn'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/></button></a>
    <a href="#"><button className='act-btn'> <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/> </button></a>
   </div>
        
   <div className="or">or</div>
        <input type="text" className="text-box" placeholder='First Name' onChange={(e) => {setName(e.target.value)}} required />
        <input type="text" className="text-box" placeholder='Last Name' onChange={(e) => {setLast(e.target.value)}} required />
            <input type="email" className="text-box" placeholder='Email'onChange={(e) => {setEmail(e.target.value)}} required/>
            <input type="password" className="text-box" placeholder='Password' required minLength={8} maxLength={20} onChange={(e) => {setPassword(e.target.value)} }/>
            <select name="gender" id="gender" onChange={(e) => {setGender(e.target.value)}} required>
                <option value="gender" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
<button className='sign-btn'>Sign Up</button>
        
    </div>
  )
}
