const Singolo = (prop) => {
    const {nome, categoria, descrizioneB, descrizioneD, img, quantità}=prop.prodotto;
    return <div> 
        {nome} <br></br>
        {categoria} <br></br>
        {descrizioneB}<br></br>
        {descrizioneD}<br></br>
        {quantità}<br></br>
        <img src={img}></img>

        <hr></hr>
    </div>
}

export default Singolo;