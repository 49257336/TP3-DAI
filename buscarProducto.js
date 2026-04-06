import fs from 'fs';

function buscarProducto(nombre){
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);
    let productoEncontrado = false;
    productos.forEach(producto => {
    if(producto.nombre == nombre){
        productoEncontrado = true;
        console.log("Producto encontrado");
        console.log(`${producto.nombre}, ${producto.precio}`);
    }
});
if(!productoEncontrado){
    console.log("Producto no encontrado");
}
}
export default buscarProducto;
