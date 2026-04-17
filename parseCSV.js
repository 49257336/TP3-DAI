import fs from 'fs';

function parsearArchivo(){
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);
    let contenido = 'nombre,precio\n';
    productos.forEach(producto => {
        contenido += `${producto.nombre},${producto.precio}\n`;
    });

    fs.writeFileSync('productos.csv', contenido);
}
export default parsearArchivo;