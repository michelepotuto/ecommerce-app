import { Link } from "react-router-dom";
import Button from "../components/Button";


const Singolo = (prop) => {
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";
  //console.log("singolo:" + JSON.stringify(prop.prodotto));

  const addToCartHandler = (product) => {
    //console.log("class prodotto: " + product);

    console.log("aggiunto al sessionStorage:" + product);
    if (!sessionStorage.getItem(storageKey2)) {
/*       console.log("COUNT " + sessionStorage.getItem(storageKey));
 */      sessionStorage.setItem(storageKey2, 1);
    } else {
      const prev = parseInt(sessionStorage.getItem(storageKey2)) + 1;
      sessionStorage.setItem(storageKey2, prev);
    }

    if (!sessionStorage.getItem(storageKey) || parseInt(sessionStorage.getItem(storageKey)) === 0) {
      product.id = sessionStorage.getItem(storageKey2);
      sessionStorage.setItem(storageKey, JSON.stringify(product));
    } else {
      product.id = sessionStorage.getItem(storageKey2);
      const storageCart = [sessionStorage.getItem(storageKey), JSON.stringify(product)];
      sessionStorage.setItem(storageKey, storageCart);
    }

/*     console.log("aggiunto al sessionStorage:" + JSON.stringify(product));
 */  };

  const { nome, categoria, descrizioneB, img, quantita, prezzo } =
    prop.prodotto;
  console.log(quantita);

  const detailHandler = () => {
    const storageKey3 = "user-cart-detail";
    sessionStorage.setItem(storageKey3, JSON.stringify(prop.prodotto));
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
              addToCartHandler(prop.prodotto);//new Prodotto(id, nome, categoria, descrizioneB, descrizioneD, img, quantità, prezzo)
              console.log("Singolo add : " + prop.prodotto);
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
};


export default Singolo;
