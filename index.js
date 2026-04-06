import fs from 'fs';
const data = fs.readFileSync('productos.js', 'utf-8');
const productos = JSON.parse(data);
productos.forEach(producto => {
    console.log(`${producto.nombre}, ${producto.precio}`);
});
