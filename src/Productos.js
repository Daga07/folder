import React, { useState } from 'react';
import './Productos.css';
import Heraderimg from './Imagenes/pus.png';
import Heraderimg1 from './Imagenes/instagram.png';
import Heraderimg2 from './Imagenes/whatsapp.png';

const productos = [
    {   
        id: 1,
        imagenes: [Heraderimg, Heraderimg1, Heraderimg2],
        precio: "$10.000",
        disponible: "5 unidades",
    },
    {
        id: 2,
        imagenes: [Heraderimg, Heraderimg1, Heraderimg2],
        precio: "$15.000",
        disponible: "3 unidades",
    },
    {
        id: 3, imagenes: [Heraderimg, Heraderimg1, Heraderimg2],
        precio: "$12.000",
        disponible: "7 unidades",
    },
    {
        id: 4, imagenes: [Heraderimg, Heraderimg1, Heraderimg2],
        precio: "$15.000",
        disponible: "6 unidades",
    },
];

function Productos() {
    const [indices, setIndices] = useState(Array(productos.length).fill(0));

    const cambiarImagen = (direccion, index) => {
        setIndices(prevIndices => {
            const nuevoIndex = (prevIndices[index] + direccion + productos[index].imagenes.length) % productos[index].imagenes.length;
            const nuevosIndices = [...prevIndices];
            nuevosIndices[index] = nuevoIndex;
            return nuevosIndices;
        });
    };

    return (
        <div className="ConProducto">
            <div className="Contec">
                {productos.map((producto, index) => (
                    <div className="Cuadros" key={producto.id}>
                        <div className="Carrusel">
                            <img className="ImagenPro" src={producto.imagenes[indices[index]]} alt={`Producto ${producto.id}`} />
                            <button className="BotonCarrusel BotonIzq" onClick={() => cambiarImagen(-1, index)}>❮</button>
                            <button className="BotonCarrusel BotonDer" onClick={() => cambiarImagen(1, index)}>❯</button>
                        </div>
                        <p className="PrecioPro">{producto.precio}</p>
                        <p className="CantidadPro">Disponible: {producto.disponible}</p>
                    </div>
                ))}
            </div>
            <div className="Contec">
                {productos.map((producto, index) => (
                    <div className="Cuadros" key={producto.id}>
                        <div className="Carrusel">
                            <img className="ImagenPro" src={producto.imagenes[indices[index]]} alt={`Producto ${producto.id}`} />
                            <button className="BotonCarrusel BotonIzq" onClick={() => cambiarImagen(-1, index)}>❮</button>
                            <button className="BotonCarrusel BotonDer" onClick={() => cambiarImagen(1, index)}>❯</button>
                        </div>
                        <p className="PrecioPro">{producto.precio}</p>
                        <p className="CantidadPro">Disponible: {producto.disponible}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;
