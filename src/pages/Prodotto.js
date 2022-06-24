import {Link} from "react-router-dom"
const Prodotto = (props) => {
 
  
  const  ID = "12314";

  const  nome = "Martin";
  const  descrizioneB = "e un prodotto belissimo";
  const descrizioneD = "e un puiu";
  const prezzo = 123;
   const  img3 = "";
   const  quantita = 50;


  const actionHandler = () => {
    props.action(props.prodotto)
  } 

  return  (<div className="card" >
  <img className="card-img-top" src="" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Asus</h5>
    <p className="card-text">e bello molto bello </p>
    {!props.isShop && <button onClick={actionHandler}>Vedi di piu</button>}
  </div>
</div>);





}


export default Prodotto;
