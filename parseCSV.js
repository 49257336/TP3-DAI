import fs from 'fs';

function parsearArchivo(){
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);
    productos.forEach(producto => {
        fs.writeFileSync(`${producto.nombre}, ${producto.precio}`);
    });
}

export default parsearArchivo;