import React from 'react'

const About = () => {
  return (
    <>
       <div className="about-container ">
         <div className="about-sub-container">
           <div className="about-content">
            <h1 className="back-text">WELCOME</h1>
             <h1 className="hotelname">Crowny Hotel</h1>
             <p>Welcome to Crowny, a haven of luxury and tranquility nestled in the vibrant city of Lahore. With our unwavering commitment to exceptional service, Crowny offers an unparalleled experience to every guest.Discover a world of elegance and comfort within our beautifully appointed rooms and suites, designed to cater to your every need.At Crowny, we believe in creating unforgettable moments. Our dedicated team of professionals is devoted to providing personalized attention and ensuring your stay is nothing short of extraordinary.</p>
             <button className="aboutus">About us</button>
           </div>
           <div className="about-img">
              <img src="/assets/aboutimg.avif" alt="" />
           </div>
         </div>
       </div> 
    </>
  )
}

export default About
