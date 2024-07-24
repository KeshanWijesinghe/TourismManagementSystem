import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div className='nav-bar'>

        <Link to="/">
          <div className="left-section">
              <h1 className='logo'>journyX</h1>
          </div>
        </Link>

        <div className="middle-section">

            <Link to="/">
              <button className='btn'>Home</button>
            </Link>
            
            <button className='btn'>Packages</button>
            <Link to="/attractions">
              <button className='btn'>Attractions</button>
            </Link>
            
            <button className='btn'>Vehical Rental</button>
            <button className='btn'>Contact</button>
        </div>

        <div className="right-section">
            <button className='login-btn'>LogIn</button>
            <button className='login-btn'>LogUp</button>
        </div>

    </div>
  )
}
