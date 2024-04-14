import React from "react"
import { Link } from 'react-router-dom';

const Renta = ({renta, onActualizarRenta}) => {
    return (
        <li key={renta.id}>
            <strong>ID Usuario:</strong> {renta.idUsuario}<br />
            <strong>ID Película:</strong> {renta.idPelicula}<br />
            <strong>Fecha de renta:</strong> {renta.fechaRenta}<br />
            <strong>Dias de renta:</strong> {renta.diasDeRenta}
            <Link to={`./actualizar/${renta.id}`}>Actualizar</Link>
        </li>
    );
}

export default Renta;
