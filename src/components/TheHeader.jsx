import React from 'react'
import '../components/TheHeader.css'

const TheHeader = () => {
  return (
    <div className='nav-wrapper'>
        <nav>
            <div className="logo">
                <img src="/images/brand_logo.png" alt=""  />
            </div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="btn-box">
                <button className='btn'>Login</button>
            </div>
        </nav>
    </div>
  )
}

export default TheHeader