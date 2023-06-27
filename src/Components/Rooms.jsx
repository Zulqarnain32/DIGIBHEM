import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom'
const Rooms = () => {
  return (
    <> 
       <div className="room-container">
        <div className="room-sub-container">
         <div className="about-content">
            <h1 className="back-text">EXPLORE</h1>
             <h1 className="hotelname">Our Rooms</h1>
             <p>Luxury Redefined Experience Unparalleled Comfort in Our Stylish Rooms</p>
         </div>
         </div>
       </div>

     <div className="rooms-images-container">
        <div className="rooms-images">
           
           <div className="single-image-box">
             <img src="/assets/room1.avif"  />
             <h3>Luxury Loft</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$340</p>
            <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room2.avif"  />
             <h3>Family Suite</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$320</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room3.avif"  />
             <h3>Terrace Suite</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$270</p>
             <button className="book-room">BOOK NOW</button>
           </div>
           <div className="single-image-box">
             <img src="/assets/room4.avif"  />
             <h3>Poolside Villa</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$300</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room5.avif"  />
             <h3>Penthouse Suite</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$250</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room6.avif"  />
             <h3>Heritage Room</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$300</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room7.avif"  />
             <h3>Terrace Suite</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$240</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room9.avif"  />
             <h3>Junior Suite</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$350</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
           <div className="single-image-box">
             <img src="/assets/room10.avif"  />
             <h3>Executive Room</h3>
               <div className="ranking-stars">
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
                 <AiFillStar className='r-stars'/>
               </div>
             <p>$310</p>
             <Link to = "register"> <button className="book-room">BOOK NOW</button></Link>
           </div>
          
          
           
           
           
           
        </div>
     </div>
    </>
  )
}

export default Rooms
