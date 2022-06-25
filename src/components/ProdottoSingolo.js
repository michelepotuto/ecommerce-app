import { Link } from "react-router-dom";
import Button from "../components/Button";
/* import useCart from "../hooks/use-cart"; */
const Singolo = (prop) => {
  const { nome, categoria, descrizioneB, descrizioneD, img, quantità, prezzo } =
    prop.prodotto;
    
  /* const { addToCart } = useCart(); */
  return (
      
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
                <div className="card text-end">
                <Link to="/">Dettagli</Link>
              </div>
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
            
              <div className="card_text-end">
                <Link to="/">Vai ai dettagli ⇢</Link>
              </div>
            
          </div>

     
    
  );
};

export default Singolo;
