import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp }
 from "react-icons/fa"
 import {MdEmail} from "react-icons/md"
const Footer = () => {
  return (
    <>
      <div className="footer-container">
         <div className="footer-sub-container">
            <div className="about-footer">
                <h1>Crowny</h1>
                <p>Crowny Hotel is a luxurious oasis in the heart of Lahore, offering an unparalleled hospitality experience. The tastefully designed rooms and suites provide a sanctuary of relaxation, while the attentive and friendly staff ensures that every need is met with utmost care.  Crowny Hotel is your gateway to a memorable and enchanting stay in Lahore.</p>
                <div className="social-media-links-hai">
                   <Link to = "https://www.facebook.com/zulqarnain.chohan.16"> <FaFacebook className='social-link'/></Link>
                    <FaWhatsapp className='social-link'/>
                    <FaInstagram className='social-link'/>
                    <FaTwitter className='social-link'/>
                </div>
            </div>
            <div className="links-footer">
               <h1>Links</h1>
                 <p>company history</p>
                 <p>about us</p>
                 <p>contact us</p>
                 <p>services</p>
                 <p>privacy policy</p>
            </div>
            <div className="contact-footer">
                 <h1>contact us</h1>
                 <p>Lorem ipsum dolor sit ame elit. Dolor placeat,  sed quos nihil eveniet!</p>
                <p> <FaLocationArrow className = "icons"/> <span>Bangal Taj Colony</span><br />Shahdara, Lahore</p>
                 <p><FaPhone className = "icons"/> <span>+92 3030128036</span></p>
                 <p><MdEmail className = "icons"/><span>zulqarnainc67@gmail.com</span></p>



            </div>
         </div>
         
      </div>
      <div className="patti">
            <p>copyright ©️ all rights deserved CHOHAN 2023</p>
         </div>
    </>
  )
}

export default Footer
