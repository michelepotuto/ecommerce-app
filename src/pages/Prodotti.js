import useCart from '../hooks/use-cart'
import React from 'react'
import Button from '../components/Button'



const Prodotti = () => {
    const {
        addToCart
      } = useCart();
  return (
    <div className="card">
    <img src="" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p className= "Prezzo">600</p>
      <Button onClick={() =>{ addToCart({
  "id": "01",
  "name": "iPhone 12",
  "price": 600,
  "brand": "Apple",
  "description": "5G, Oled Screen, iOS"
}) }}>
          Add to cart
        </Button>
      {/* <a href="#" className="btn btn-primary">vedi</a> */}
    </div>
  </div>
  )
}

export default Prodotti