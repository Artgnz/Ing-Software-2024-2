import React from "react"
import { Link } from 'react-router-dom';

import EliminarUsuarioButton from "../../EliminarUsuario/EliminarUsuarioButton/EliminarUsuarioButton"

const Usuario = ({usuario, onEliminarUsuario, onActualizarUsuario}) => {
    return (
        <li key={usuario.id}>
            <strong>Nombre:</strong> {usuario.nombre} {usuario.apPat} {usuario.apMat}<br />
            <strong>Email:</strong> {usuario.email}<br />
            <strong>Password:</strong> {usuario.password}<br />
            <strong>Super User:</strong> {usuario.superUser === 1 ? 'Sí' : 'No'}
            <EliminarUsuarioButton usuario={usuario} onEliminarUsuario={onEliminarUsuario} />
            <Link to={`./actualizar/${usuario.id}`}>Actualizar</Link>
        </li>
    );
}

export default Usuario;
