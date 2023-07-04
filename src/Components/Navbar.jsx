import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import About from './About';
import Banner from './Banner';
import Rooms from './Rooms';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';
import NavEveryPage from './NavEveryPage';
// import { animateScroll as scroll } from 'react-scroll';
// import { Link } from "react-scroll"
const Navbar = () => {

  const [navbarColor, setNavbarColor] = useState('');
  const [showNavbar, setShowNavbar] = useState(false)
  
  // const scrollPosition = window.innerWidth >= 104 ? 1200 : 4000;
  
 
  
  // const handleScrollRooms = () => {
  //   scroll.scrollTo(scrollPosition, {
  //     duration: 500,
  //     smooth: 'easeInOutQuad',
  //   });
  // };
  
  
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
       <div className="hero-container">
          <div className="layer">
            <nav style={{backgroundColor: navbarColor}}>
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
                    <Link to = "/about" className='nav-links' ><span onClick={handleShowNavbar}>About</span></Link>
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
                    <Link to = "register" className='book-online-btn nav-links'  onClick={handleShowNavbar}>Book Online </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="hero-content">
            <h1 className='hero-title'>A LUXURY STAY</h1>
            <p className="hero-para"> Enhance your trip with our curated collection of experiences, from guided city tours to thrilling outdoor adventures. Create lasting memories and make the most of your stay.</p>
            <div className="hero-buttons">
              <button className='contact'>Contact Us</button>
             <Link to = "register"> <button className='book'>Book Now</button></Link>
            </div>
          </div>
        </div> 

        <About/>
        <Banner/>
        <Rooms/>
        <Services/>
        <Testimonials/>
        <Footer/>
        
      

    </>
  )
}

export default Navbar



