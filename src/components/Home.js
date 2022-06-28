import React from 'react'
import logo3 from '../assets/Apple_iphone.jpg';
import logo2 from '../assets/Asus_rog.jpg';
import logo1 from '../assets/Sedia_gaming.jpg';
import { Carousel } from 'react-bootstrap';

const Home = () => (
  <div className="h1"> <hr></hr> ⮊ BENVENUTO IN TEAM SHOP! ⮈<hr></hr>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

  )
  export default Home;