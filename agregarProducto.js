import fs from 'fs';
function agregarProducto(nombre, precio){
    const producto = {nombre: nombre, precio: precio}
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);
    productos.push(producto);
    const productoJSON = JSON.stringify(productos);

    fs.writeFileSync('productos.json', productoJSON);
    
}
export default agregarProducto;