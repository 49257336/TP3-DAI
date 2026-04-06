import dayjs from "dayjs";
function mostrarFecha(){
const day = dayjs().format('DD/MM/YYYY');
const hour = dayjs().format('HH/mm');

console.log(`Fecha actual: ${day}`);
console.log(`Hora actual: ${hour}`);
}

export default mostrarFecha;


