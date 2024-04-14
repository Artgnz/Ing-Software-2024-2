import React from "react"
import { Link } from 'react-router-dom';

import EliminarPeliculaButton from "../../EliminarPelicula/EliminarPeliculaButton/EliminarPeliculaButton"

const Pelicula = ({pelicula, onEliminarPelicula, onActualizarPelicula}) => {
    return (
        <li key={pelicula.id}>
            <strong>Nombre:</strong> {pelicula.nombre}<br />
            <strong>Duración:</strong> {pelicula.duracion}<br />
            <strong>Género:</strong> {pelicula.genero}<br />
            <strong>Inventario:</strong> {pelicula.inventario}<br/>
            <EliminarPeliculaButton pelicula={pelicula} onEliminarPelicula={onEliminarPelicula} />
            <Link to={`./actualizar/${pelicula.id}`}>Actualizar</Link>
        </li>
    );
}

export default Pelicula;
