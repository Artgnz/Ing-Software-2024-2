import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Pelicula from "./Pelicula/Pelicula";
import './Peliculas.css'

const Peliculas = ({ peliculas, onEliminarPelicula, onActualizarPelicula}) => {
    return (
        <div className="lista-contenedor">
            <h1>A continuación se muestran las películas</h1>
            <ul>
                {peliculas.map(pelicula => (
                    <Pelicula key={pelicula.id} pelicula={pelicula} onEliminarPelicula={onEliminarPelicula} onActualizarPelicula={onActualizarPelicula}/>
                ))}
            </ul>
            <Link to="./agregar">
                <button className="boton">Agregar Pelicula</button>
            </Link>
            <Link to="/">
                <button className="boton">Volver a inicio</button>
            </Link>
        </div>
    );    
};

export default Peliculas;
