
import Button from "../components/Button";
import useCart from "../hooks/use-cart";

const Singolo = (prop) => {
  const { nome, categoria, descrizioneB, descrizioneD, img, quantità, prezzo } =
    prop.prodotto;
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
            <div class="col">
              
            </div>
          </div>
        </div>
      </div>

      {/*  {nome} <br></br>
        {categoria} <br></br>
        {descrizioneB}<br></br>
        {descrizioneD}<br></br>
        {quantità}<br></br>
        <img src={img}></img>

        <hr></hr> */}
    </div>
  );
};

export default Singolo;
