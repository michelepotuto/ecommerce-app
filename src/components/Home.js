import React from 'react'
import logo3 from '../assets/Apple_iphone.jpg';
import logo2 from '../assets/Asus_rog.jpg';
import logo1 from '../assets/Sedia_gaming.jpg';
import { Carousel } from 'react-bootstrap';

const Home = () => (
  <div className="h1"> <hr></hr> ⮊ WELCOME IN TEAM SHOP! ⮈<hr></hr>
<Carousel>
  <Carousel.Item>
    <div className="container">
    <img
      className="img_carosello2 d-block w-600"
      src={logo1}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      
      <p>10% discount on your first purchase</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="container">
    <img
      className="img_carosello d-block w-100"
      src={logo2}
      alt="Second slide"
    />
</div>
    <Carousel.Caption>
     
      <p>15% discount on your first gaming laptop</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="container">
    <img
      className="img_carosello d-block w-100"
      src={logo3}
      alt="Third slide"
    />
    </div>

    <Carousel.Caption>

      <p>15% discount on your first iphone</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

  )
  export default Home;