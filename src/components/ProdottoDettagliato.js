
import Button from "./Button";
import { storageName } from "../store/counter-store";


const ProdottoDettagliato = (prop) => {


  const prodottoDettagliato = JSON.parse(sessionStorage.getItem(storageName.DETAIL));
  
   const { nome, categoria, descrizioneD, img,  prezzo } =
    prodottoDettagliato; 

    const addToCartHandler = (product) => {
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
