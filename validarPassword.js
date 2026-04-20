function validarPassword(password){
var esValida = false;
var hasN = false;
var hasU = false;
password.split('').forEach(element => {
        if(!isNaN(element)){
            hasN = true;
        }
        if(element == element.toUpperCase()){
            hasU = true;
        }
    });
if(password.length >= 8 && hasN && hasU){
    esValida = true;
}


if(esValida==true){
    console.log("La constraseña es valida");
}else{
    console.log("La constraseña NO es valida");
}
}
export default validarPassword;