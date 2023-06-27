import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Testimonials() {
  return (
    <>
   
    <Carousel className='carousel-container'>
    
      <Carousel.Item>
        <div className='hel'>
          {/* <img src="/assets/room1.avif" alt="" /> */}
          <p> "My stay at Crowny was absolutely exceptional. From the moment I walked in, I was greeted with warm smiles and a seamless check-in process. The room was beautifully appointed with elegant furnishings and modern amenities, ensuring a comfortable and luxurious stay. The dining experience was exceptional, with a diverse menu of delectable dishes that satisfied my taste buds.  I highly recommend this hotel to anyone seeking a top-notch hospitality experience."</p>
          <h3 className='client-name'>Thomas Johnson</h3>
        </div>
        <Carousel.Caption>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='hel'>
        {/* <img src="/assets/room1.avif" alt="" /> */}
        <p> "I had the pleasure of staying at Crowny, and I can confidently say it was a remarkable experience. The hotel's location in Lahore was perfect, offering easy access to major attractions and vibrant city life. The room I stayed in was spacious, tastefully decorated, and provided breathtaking views of the city skyline. The hotel's facilities, including the spa and fitness center, were of the highest quality, providing a perfect balance of relaxation and rejuvenation."</p>
          <h3 className = 'client-name'>James Wilson</h3>
        </div>

        <Carousel.Caption>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='hel'>
        {/* <img src="/assets/room1.avif" alt="" /> */}
        <p> "Crowny surpassed all my expectations during my recent stay. From the moment I stepped into the hotel, I was greeted with a warm and inviting atmosphere. The room I stayed in was beautifully designed, featuring modern amenities and plush bedding that ensured a restful night's sleep. The hotel's dining options were exceptional, offering a wide range of delicious dishes that catered to different palates. The attention to detail and personalized service made me feel like a valued guest throughout my stay."</p>
          <h3 className='client-name'>William Smith</h3>
        </div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    </>
  );
}

export default Testimonials;