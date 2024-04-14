import React from 'react';

const EliminarPeliculaButton = ({ pelicula, onEliminarPelicula }) => {
    const eliminarPeliculaHandler = () => {
        if (window.confirm(`¿Estás seguro de eliminar la pelicula ${pelicula.nombre}?`)) {
            onEliminarPelicula(pelicula.id);
        }
    };

    return (
        <button onClick={eliminarPeliculaHandler}>
            Eliminar
        </button>
    );
};

export default EliminarPeliculaButton;
