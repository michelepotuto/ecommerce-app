function validateCodCliente(){
    var nameRegex = /^[A-Zz-z]\d*$/;
    var validCodC = document.frm.CodC.value.match(nameRegex);
    if(validCodC == null){
        alert("Inserire un codice cliente con delle lettere prima e almeno due numeri alla fine");
        document.frm.CodC.focus();
        return false;
    }
}

export default validateCodCliente;