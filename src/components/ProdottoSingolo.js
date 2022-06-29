import { Link } from "react-router-dom";
import Button from "../components/Button";
import { storageName } from "../store/counter-store";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-store";

const ProdottoSingolo = (prop) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartArray);

  const addToCartHandler = (product) => {
    //update of count in the cart of navbar
    dispatch({ type: counterActions.INCREMENT })
    //console.log("class prodotto: " + product);
    //controlli per cart
    if (!sessionStorage.getItem(storageName.CART) || parseInt(sessionStorage.getItem(storageName.COUNT)) === 0) {
      //if it's the first element i reset its quantity to 1
      product.quantita = 1;
      sessionStorage.setItem(storageName.CART, JSON.stringify(product));
      //increment cart count
      const prev = parseInt(sessionStorage.getItem(storageName.COUNT)) + 1;
      sessionStorage.setItem(storageName.COUNT, prev);
    } else {
      //find duplicate in cart
      const searchArray = JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]");
      const index = searchArray.findIndex(function (item) {
        return item.nome === product.nome;
      });
      //console.log("searchArray[" + index + "]: " + searchArray[index].quantita);
      //---------------------------------------
      if (index !== -1) { // if find duplicate in cart
        if (searchArray[index].quantita < searchArray[index].max) {// check if there are enough product in store 
          // actual quantity < store quantiti of that product
          searchArray[index].quantita++;
          //console.log("quantità: " + searchArray[index].quantita + " - max: " + searchArray[index].max);
          //increment cart count
          const prev = parseInt(sessionStorage.getItem(storageName.COUNT)) + 1;
          sessionStorage.setItem(storageName.COUNT, prev);
        } else {// can't add more of this product
          alert("Hai raggiunto il limite di quantità per questo prodotto");
        }
        //update new cart 
        sessionStorage.setItem(storageName.CART, JSON.stringify(searchArray).replace("[", "").replace("]", ""));
      } else { // it's not a duplicate
        //make his quantity 1
        product.quantita = 1;
        //console.log("quantità: " + product.quantita + " - max: " + product.max);
        //put it in the last position of the cart
        const storageCart = [sessionStorage.getItem(storageName.CART), JSON.stringify(product)];
        sessionStorage.setItem(storageName.CART, storageCart);
        //increment cart count
        const prev = parseInt(sessionStorage.getItem(storageName.COUNT)) + 1;
        sessionStorage.setItem(storageName.COUNT, prev);
      }
    }
    dispatch({ type: counterActions.UPDATE });
/*     console.log("aggiunto al sessionStorage:" + JSON.stringify(product));
 */  };

  const { nome, categoria, descrizioneB, img, prezzo, max } =
    prop.prodotto;
  //console.log(quantita);

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
              <p className="Prezzo">{max}.pz</p>
            </div>
          </div>
          <div className="col"><Button

            onClick={() => {
              addToCartHandler(prop.prodotto);//new Prodotto(id, nome, categoria, descrizioneB, descrizioneD, img, quantità, prezzo)
              //console.log("Singolo add : " + prop.prodotto);
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
