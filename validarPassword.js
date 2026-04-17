function validarPassword(password){
var esValida = false;
var hasN = false;
var hasU = false;
password.split().forEach(element => {
        if(!Number.isNaN(element)){
            hasN = true;
        }
        if(element == element.toUpperCase()){
            hasU = true;
        }
    });
if(password.lenght >= 8 && hasN && hasU){
    esValida = true;
}


if(esValida){
    console.log("La constraseña es valida");
}else{
    console.log("La constraseña NO es valida");
}
}
export default validarPassword;