import React, { useState, useEffect } from 'react';
import Renta from "./Renta/Renta";
import { Link } from 'react-router-dom';

const Rentas = ({ rentas, onActualizarRenta }) => {
    return (
        <div>
            <h1>A continuación se muestran los rentas</h1>
            <ul>
                {rentas.map(renta => (
                    <Renta key={renta.id} renta={renta} onActualizarRenta={onActualizarRenta}/>
                ))}
            </ul>
            <Link to="./agregar">
                <button>Agregar Renta</button>
            </Link>
            <Link to="/">
                <button>Volver a inicio</button>
            </Link>
        </div>
    );
};

export default Rentas;
