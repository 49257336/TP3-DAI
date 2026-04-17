
function analizarTexto(texto){
    const carac = texto.length;
    const pal = texto.trim().split(/\s+/).length;
    const voc = [...texto].map( function (v) {
        if(v.toLowerCase() == "a" ||v.toLowerCase() == "e" ||v.toLowerCase() == "i"||v.toLowerCase() == "o"  ||v.toLowerCase() == "u" ){
            return v
        }
    }).join("").length;
    const con = [...texto].map( function (v) {
        if(!(v == " " ||v.toLowerCase() == "a" ||v.toLowerCase() == "e" ||v.toLowerCase() == "i"||v.toLowerCase() == "o"  ||v.toLowerCase() == "u") ){
            return v
        }
    }).join("").length;
const textoAnalizado = {
    cCaracteres : carac,
    cPalabras : pal,
    cVocales : voc,
    cConsonantes : con
}

return textoAnalizado;
}
export default analizarTexto;