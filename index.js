import fs from 'fs';
import agregarProducto from './agregarProducto.js';
const data = fs.readFileSync('productos.json', 'utf-8');
const productos = JSON.parse(data);
productos.forEach(producto => {
    console.log(`${producto.nombre}, ${producto.precio}`);
});

agregarProducto("Monitor", 120000);


