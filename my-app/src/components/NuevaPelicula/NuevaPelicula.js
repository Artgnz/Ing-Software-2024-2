import React from "react";

import PeliculaForm from './PeliculaForm/PeliculaForm'

const NuevaPelicula = (props) => {
    const guardaPeliculaHandler = (peliculaIngresado) => {
        props.onAgregarPelicula(peliculaIngresado);
    };

    return (
        <div>
            <PeliculaForm onGuardarPelicula={guardaPeliculaHandler} />
        </div>
    )
}

export default NuevaPelicula;
