import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
const NavEveryPage = () => {
  const [navbarColor, setNavbarColor] = useState('');
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  if(showNavbar){
    document.body.classList.add("nav-is-active")
  }
  else{
    document.body.classList.remove("nav-is-active")
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 60) {
        setNavbarColor('#3f3753');
      } 
       else {
        setNavbarColor('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
       <nav className = "naveverypage" style={{backgroundColor: '#9082b5'}} >
              <div className="logo">
                   <img src="/assets/nav.png"  className='logo'/>
              </div>
              <div className="menu-icon" onClick={handleShowNavbar}>
               <GiHamburgerMenu />
             </div>
              
              <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                  <li>
                    <Link to = "/" className='nav-links'><span onClick={handleShowNavbar}>Home</span></Link>
                  </li>
                  <li>
                    <Link to = "/about" className='nav-links' ><span>About</span></Link>
                  </li>
                  <li>
                    <Link to = "/rooms" className='nav-links' ><span  onClick={handleShowNavbar}>Rooms</span></Link>
                  </li>
                  <li>
                    <Link to = "/services" className='nav-links' ><span  onClick={handleShowNavbar}>Services</span></Link>
                  </li>
                  <li>
                    <Link to = "testim" className='nav-links' ><span  onClick={handleShowNavbar}>Testimonials</span></Link>
                  </li>
                 
                  <li>
                    <Link to = "register" className='book-online-btn nav-links' >Book Online </Link>
                  </li>
                </ul>
              </div>
            </nav>
    </>
  )
}

export default NavEveryPage
