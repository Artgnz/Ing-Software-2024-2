import React from "react"
import { useNavigate } from 'react-router-dom';

import EliminarUsuarioButton from "../../EliminarUsuario/EliminarUsuarioButton/EliminarUsuarioButton"

import './Usuario.css'

const Usuario = ({usuario, onEliminarUsuario, onActualizarUsuario}) => {
    const navigate = useNavigate();

    const handleActualizarClick = (userId) => {
        navigate(`./actualizar/${userId}`);
    };

    return (
        <li key={usuario.id} className="usuario-item">
            <strong>Nombre:</strong> {usuario.nombre} {usuario.apPat} {usuario.apMat}<br />
            <strong>Email:</strong> {usuario.email}<br />
            <strong>Password:</strong> {usuario.password}<br />
            <strong>Super User:</strong> {usuario.superUser === 1 ? 'Sí' : 'No'}<br />
            <button className="actualizar-boton" onClick={() => handleActualizarClick(usuario.id)}>
                Actualizar
            </button>
            <EliminarUsuarioButton usuario={usuario} onEliminarUsuario={onEliminarUsuario} />
        </li>
    );
}

export default Usuario;
