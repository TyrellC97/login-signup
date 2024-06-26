import React from 'react'
import './forgot.css'

export default function Forgot() {
  return (
    <div className="forgot-pass">
        <h3>Lets get you back in!</h3>
        <input type="text" placeholder='Enter Your Email' className='text-box' />
        <button className='enter-btn'>Submit</button>
    </div>
  )
}
