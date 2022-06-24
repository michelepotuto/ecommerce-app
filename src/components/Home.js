import React from 'react'
import logo from '../assets/Apple_iphone.jpg';

const Home = () => (
  <div className="h1"> <hr></hr> ⮊ BENVENUTO IN TEAM SHOP! ⮈<hr></hr>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>

  )
  export default Home;