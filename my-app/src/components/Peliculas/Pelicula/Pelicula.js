import React from "react"
import { Link, useNavigate } from 'react-router-dom';

import EliminarPeliculaButton from "../../EliminarPelicula/EliminarPeliculaButton/EliminarPeliculaButton"
import './Pelicula.css'

const Pelicula = ({pelicula, onEliminarPelicula, onActualizarPelicula}) => {
    const navigate = useNavigate();

    const handleActualizarClick = (userId) => {
        navigate(`./actualizar/${userId}`);
    };
    return (
        <li key={pelicula.id} className="pelicula-item">
            <strong>Nombre:</strong> {pelicula.nombre}<br />
            <strong>Duración:</strong> {pelicula.duracion}<br />
            <strong>Género:</strong> {pelicula.genero}<br />
            <strong>Inventario:</strong> {pelicula.inventario}<br/>
            <button className="actualizar-boton" onClick={() => handleActualizarClick(pelicula.id)}>
                Actualizar
            </button>
            <EliminarPeliculaButton pelicula={pelicula} onEliminarPelicula={onEliminarPelicula} />
        </li>
    );
}

export default Pelicula;
