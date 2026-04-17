function contador(){
    let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`${contador}`);
  if (contador === 10) {clearInterval(intervalo); console.log("Fin del contador");};
}, 1000);
}

export default contador;