
import Button from "./Button";
import useCart from "../hooks/use-cart";

const ProdottoDettagliato = (prop) => {
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";
  const storageKey3 = "user-cart-detail";

  const prodottoDettagliato = JSON.parse(sessionStorage.getItem(storageKey3));
  
   const { nome, categoria, descrizioneD, img,  prezzo } =
    prodottoDettagliato; 

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


  const { addToCart } = useCart();
  return (
    <div>
      <div>
        <div className="card">
          <div class="row align-items-center">
            <div class="col">
              <img src={`${img}`} className="img-thumbnail" alt="..." />
            </div>
            <div class="col">
              <div className="card-body">
                <h5 className="card-title">
                  {nome} - {categoria}
                </h5>
                <p className="card-text">{descrizioneD}</p>
                <p className="Prezzo">{prezzo}</p>
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
