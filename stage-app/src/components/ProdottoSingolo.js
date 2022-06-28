import { Link } from "react-router-dom";
import Button from "../components/Button";
import { storageName } from "../store/counter-store";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";

const ProdottoSingolo = (prop) => {
  const dispatch = useDispatch();
  //console.log("singolo:" + JSON.stringify(prop.prodotto));

  const addToCartHandler = (product) => {
    dispatch({ type: counterActions.INCREMENT })
    //console.log("class prodotto: " + product);

    console.log("aggiunto al sessionStorage:" + product);
    if (!sessionStorage.getItem(storageName.COUNT)) {
/*       console.log("COUNT " + sessionStorage.getItem(storageName.CART));
 */      sessionStorage.setItem(storageName.COUNT, 1);
    } else {
      const prev = parseInt(sessionStorage.getItem(storageName.COUNT)) + 1;
      sessionStorage.setItem(storageName.COUNT, prev);
    }

    if (!sessionStorage.getItem(storageName.CART) || parseInt(sessionStorage.getItem(storageName.CART)) === 0) {
      product.id = sessionStorage.getItem(storageName.COUNT);
      sessionStorage.setItem(storageName.CART, JSON.stringify(product));
    } else {
      product.id = sessionStorage.getItem(storageName.COUNT);
      const storageCart = [sessionStorage.getItem(storageName.CART), JSON.stringify(product)];
      sessionStorage.setItem(storageName.CART, storageCart);
    }

/*     console.log("aggiunto al sessionStorage:" + JSON.stringify(product));
 */  };

  const { nome, categoria, descrizioneB, img, quantita, prezzo } =
    prop.prodotto;
  console.log(quantita);

  const detailHandler = () => {
    sessionStorage.setItem(storageName.DETAIL, JSON.stringify(prop.prodotto));
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


export default ProdottoSingolo;
