import { Link } from "react-router-dom";
import Button from "../components/Button";
import { storageName } from "../store/counter-store";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-store";

const ProdottoSingolo = (prop) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartArray);

  //function to add this product in the cart
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

  // variable to use
  const { nome, categoria, descrizioneB, img, prezzo, max } =
    prop.prodotto;
  
//go to product detail page
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
              addToCartHandler(prop.prodotto);
            }}
          >
            Add to cart
          </Button>
          </div>

        </div>
        <div className="col">
          <div className="card_text-end">
            <Link to="/dettaglio" onClick={detailHandler}>Go to details ⇢</Link>
          </div>
        </div>

      </div>
    </div>
  );
};


export default ProdottoSingolo;
