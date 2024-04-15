import React from "react"
import { useNavigate } from 'react-router-dom';

import './Renta.css'

const Renta = ({renta, onActualizarRenta}) => {
    const navigate = useNavigate();

    const handleActualizarClick = (userId) => {
        navigate(`./actualizar/${userId}`);
    };
    return (
        <li key={renta.id} className="renta-item">
            <strong>ID Usuario:</strong> {renta.idUsuario}<br/>
            <strong>ID Película:</strong> {renta.idPelicula}<br/>
            <strong>Fecha de renta:</strong> {renta.fechaRenta}<br/>
            <strong>Dias de renta:</strong> {renta.diasDeRenta}<br/>
            <button className="actualizar-boton" onClick={() => handleActualizarClick(renta.id)}>
                Actualizar
            </button>
        </li>
    );
}

export default Renta;
