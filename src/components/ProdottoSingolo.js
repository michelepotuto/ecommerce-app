import { NavLink } from "react-router-dom";
import Button from "../components/Button";
/* import useCart from "../hooks/use-cart"; */
const Singolo = (prop) => {
  const { nome, categoria, descrizioneB, descrizioneD, img, quantità, prezzo } =
    prop.prodotto;
    
  /* const { addToCart } = useCart(); */
  return (
      <div className="container">
        <div className="card">
          <div className="row align-items-center">
            <div className="col-md-4 float-start">
              <img src={`${img}`} className="img-thumbnail" alt="..." />
            </div>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">
                  {nome} - {categoria}
                </h5>
                <p className="card-text">{descrizioneB}</p>
                <p className="Prezzo">{prezzo} € </p>
              </div>
            </div>
            <div className="col"><Button
                  onClick={() => {
                   prop.addToCart(prop.prodotto);
                   console.log("Singolo add : " + prop.prodotto);
                   /*  addToCart(prop.prodotto); */
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
            <div class="col">
              <div className="card text-end">
              <NavLink ClassName="card text-end" to="/ProdottoDettagliato">
              Dettagli
            </NavLink>
            
             
            
              <div className="card_text-end">
                <NavLink to="/">Vai ai dettagli ⇢</NavLink>
              </div>
            
            
          </div>
          
          </div>


          </div>
          </div>
          
     
     
    
  );
} ;


export default Singolo;
