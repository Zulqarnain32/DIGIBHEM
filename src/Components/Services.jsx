import React from 'react'
// import { FaChampagneGlasses } from "react-icons/fa"
import { ImSpoonKnife } from "react-icons/im"
import { GiThreeLeaves } from "react-icons/gi"
import { BiRun } from "react-icons/bi"
import { FaWineGlassAlt } from "react-icons/fa"

const Services = () => {
  return (
    <>
       <div className="room-container">
        <div className="room-sub-container">
         <div className="about-content">
            <h1 className="back-text">SERVICES</h1>
             <h1 className="hotelname">Our Services</h1>
             <p>Savor Unforgettable Flavors Experience our Exquisite Dining Offerings</p>
         </div>
         </div>
       </div>
       
       <div className="services-container">
         <div className="services-sub-container">
              <div className="four-box-container">
                  <div className="four-containers">
                    <div className='services-single-box'>
                      <h2><FaWineGlassAlt/></h2>
                       <p>Delcious Food</p></div>
                    <div className='services-single-box'>
                      <h2><BiRun/></h2>
                       <p>Fitness</p></div>
                    <div className='services-single-box'>
                      <h2><ImSpoonKnife/></h2>
                      <p>Inhouse Restaurant</p></div>
                    <div className='services-single-box'>
                      <h2><GiThreeLeaves/></h2>
                      <p>Beauty Spa</p></div>
                  </div>
              </div>
              <div className="services-image-container">
                 <img src="/assets/gallary3.webp" alt="ser inma" />
              </div>
         </div>
       </div>
       
    </>
  )
}

export default Services
