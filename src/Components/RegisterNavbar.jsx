import React from 'react'
import { Link } from "react-router-dom"
const RegisterNavbar = () => {
  return (
    <>
        <nav style={{color:"red"}}>
              <div className="logo">
                   <img src="/assets/nav.png"  className='logo'/>
              </div>
              {/* <div className="menu-icon" onClick={handleShowNavbar}>
               <GiHamburgerMenu />
             </div> */}
              
              {/* <div className={`nav-elements  ${showNavbar && 'active'}`}> */}
            <div>
                <ul>
                  <li>
                    <Link to = "" className='nav-links'>Home</Link>
                  </li>
                  <li>
                    <Link to = "" className='nav-links'>About</Link>
                  </li>
                  <li>
                    <Link to = "" className='nav-links'>Rooms</Link>
                  </li>
                  <li>
                    <Link to = "" className='nav-links'>Testimonials</Link>
                  </li>
                  <li>
                    <Link to = "" className='nav-links'>Contact</Link>
                  </li>
                  <li>
                    <Link to = "" className='book-online-btn nav-links'>Book Online </Link>
                  </li>
                </ul>
              </div>
            </nav>
    </>
  )
}

export default RegisterNavbar
