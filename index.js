import fs from 'fs';
import agregarProducto from './agregarProducto.js';
import mostrarFecha from './mostrarFecha.js';
import obtenerPais from './obtenerPais.js';
import buscarProducto from './buscarProducto.js';
import contador from './contador10sec.js';
import parsearArchivo from './parseCSV.js';
import analizarTexto from './analizarTexto.js';


const data = fs.readFileSync('productos.json', 'utf-8');
const productos = JSON.parse(data);
productos.forEach(producto => {
    console.log(`${producto.nombre}, ${producto.precio}`);
});

//agregarProducto("Monitor", 120000);

mostrarFecha();
//obtenerPais("Argentina");
buscarProducto("Mouse");
parsearArchivo();
contador();
console.log(analizarTexto("hola mundo"));
