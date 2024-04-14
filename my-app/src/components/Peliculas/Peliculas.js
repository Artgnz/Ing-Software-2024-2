import React, { useState, useEffect } from 'react';
import Pelicula from "./Pelicula/Pelicula";

import { Link } from 'react-router-dom';

const Peliculas = ({ peliculas, onEliminarPelicula, onActualizarPelicula}) => {
    return (
        <div>
            <h1>A continuación se muestran las películas</h1>
            <ul>
                {peliculas.map(pelicula => (
                    <Pelicula key={pelicula.id} pelicula={pelicula} onEliminarPelicula={onEliminarPelicula} onActualizarPelicula={onActualizarPelicula}/>
                ))}
            </ul>
            <Link to="./agregar">
                <button>Agregar Pelicula</button>
            </Link>
            <Link to="/">
                <button>Volver a inicio</button>
            </Link>
        </div>
    );    
};

export default Peliculas;
