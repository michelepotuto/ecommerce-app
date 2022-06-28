import { Link } from "react-router-dom";
import Button from "../components/Button";


const Singolo = (prop) => {
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";
  //console.log("singolo:" + JSON.stringify(prop.prodotto));

  const addToCartHandler = (product) => {
    //console.log("class prodotto: " + product);

    console.log("aggiunto al localStorage:" + product);
    if (!localStorage.getItem(storageKey2)) {
/*       console.log("COUNT " + localStorage.getItem(storageKey));
 */      localStorage.setItem(storageKey2, 1);
    } else {
      const prev = parseInt(localStorage.getItem(storageKey2)) + 1;
      localStorage.setItem(storageKey2, prev);
    }

    if (!localStorage.getItem(storageKey)) {
      product.quantita = localStorage.getItem(storageKey2);
      localStorage.setItem(storageKey, JSON.stringify(product));
    } else {
      product.quantita = localStorage.getItem(storageKey2);
      const storageCart = [localStorage.getItem(storageKey), JSON.stringify(product)];
      localStorage.setItem(storageKey, storageCart);
    }

/*     console.log("aggiunto al localStorage:" + JSON.stringify(product));
 */  };

  const {  nome, categoria, descrizioneB,  img, quantita, prezzo } =
    prop.prodotto;
    console.log(quantita);

  const detailHandler = () => {
    const storageKey3 = "user-cart-detail";
    localStorage.setItem(storageKey3, JSON.stringify(prop.prodotto));
  }
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
              <p className="Prezzo">{quantita}.pz</p>
            </div>
          </div>
          <div className="col"><Button
            onClick={() => {
              //addToCart(prop.prodotto);
              addToCartHandler(prop.prodotto);//new Prodotto(id, nome, categoria, descrizioneB, descrizioneD, img, quantità, prezzo)
              console.log("Singolo add : " + prop.prodotto);
              /*  addToCart(prop.prodotto); */
            }}
          >
            Add to cart
          </Button>
          </div>
          
        </div>
        <div className="col">
            <div className="card_text-end">
              <Link to="/dettaglio" onClick={detailHandler}>Vai ai dettagli ⇢</Link>
            </div>
        </div>

      </div>
    </div>
  );
} ;


export default Singolo;
