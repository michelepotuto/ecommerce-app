
import Button from "./Button";
import useCart from "../hooks/use-cart";

const ProdottoDettagliato = (prop) => {
  const storageKey3 = "user-cart-detail";
  const prodottoDettagliato = JSON.parse(localStorage.getItem(storageKey3));
  
   const { nome, categoria, descrizioneD, img,  prezzo } =
    prodottoDettagliato; 
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
                    addToCart(prop.prodotto);
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
