import React from 'react'
import logo1 from '../assets/Apple_iphone.jpg';
import logo2 from '../assets/Asus_rog.jpg';
import logo3 from '../assets/Sedia_gaming.jpg';

const Home = () => (
  <div className="h1"> <hr></hr> ⮊ BENVENUTO IN TEAM SHOP! ⮈<hr></hr>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo1} className="d-block w-100" alt="logo1"/>
    </div>
    <div className="carousel-item">
      <img src={logo2} className="d-block w-100" alt="logo2"/>
    </div>
    <div className="carousel-item">
      <img src={logo3} className="d-block w-100" alt="logo3"/>
    </div>
  </div>
</div>
</div>

  )
  export default Home;