
import Button from "./Button";
import { storageName } from "../store/counter-store";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";
import { Link } from "react-router-dom";

//page of detailed product
const ProdottoDettagliato = (prop) => {

  const dispatch = useDispatch();
  const prodottoDettagliato = JSON.parse(sessionStorage.getItem(storageName.DETAIL));

  //variable to use
  const { nome, categoria, descrizioneD, img, prezzo } =
    prodottoDettagliato;

  const addToCartHandler = (product) => {
    //update of count in the cart of navbar
    dispatch({ type: counterActions.INCREMENT })

    //if cart doesn't exist or count is zero, create session storage with the first product
    if (!sessionStorage.getItem(storageName.CART) || parseInt(sessionStorage.getItem(storageName.COUNT)) === 0) {
      //it's the first element so I reset its quantity to 1
      product.quantita = 1;
      sessionStorage.setItem(storageName.CART, JSON.stringify(product));
      //increment cart count
      const prev = parseInt(sessionStorage.getItem(storageName.COUNT)) + 1;
      sessionStorage.setItem(storageName.COUNT, prev);
    } else {// cart is not empty so i check if i already have this product in the cart
      //find duplicate in cart
      const searchArray = JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]");
      const index = searchArray.findIndex(function (item) {
        return item.nome === product.nome;
      });

      if (index !== -1) { // if find duplicate in cart
        //I check if there are enough product in store, actual quantity < store quantity of that product
        if (searchArray[index].quantita < searchArray[index].max) {//if there are enough product in store
          //increase quantity
          searchArray[index].quantita++;
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
        //put it in the last position of the cart
        const storageCart = [sessionStorage.getItem(storageName.CART), JSON.stringify(product)];
        //update cart and increment cart count
        sessionStorage.setItem(storageName.CART, storageCart);
        const prev = parseInt(sessionStorage.getItem(storageName.COUNT)) + 1;
        sessionStorage.setItem(storageName.COUNT, prev);
      }
    }
    //make a total and update it in the session storage
    let count=0;
    JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]").map((prodotto) => {
      count += (prodotto.prezzo)*(prodotto.quantita);
    }); 
    sessionStorage.setItem(storageName.TOTAL, count);
    //update
    dispatch({ type: counterActions.UPDATE });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="row align-items-center">
          <div className="col">
            <img src={`${img}`} className="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">
                {nome} - {categoria}
              </h5>
              <p className="card-text">{descrizioneD}</p>
              <p className="Prezzo">{prezzo}</p>
              <div className="container_link_dettagli">
                <Link to="/prodotti">
                  <div>
                    ⇠ Back to shop
                  </div>
                </Link>
                <Button
                  onClick={() => {
                    addToCartHandler(prodottoDettagliato);
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdottoDettagliato;
