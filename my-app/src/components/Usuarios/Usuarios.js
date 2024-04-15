import React from 'react';
import Usuario from "./Usuario/Usuario";
import { Link } from 'react-router-dom';

import './Usuarios.css'

const Usuarios = ({ usuarios, onEliminarUsuario, onActualizarUsuario }) => {
    return (
        <div className="lista-contenedor">
            <h1>A continuación se muestran los usuarios</h1>
            <ul>
                {usuarios.map(usuario => (
                    <Usuario key={usuario.id} usuario={usuario} onEliminarUsuario={onEliminarUsuario} onActualizarUsuario={onActualizarUsuario}/>
                ))}
            </ul>
            <Link to="./agregar">
                <button className="boton">Agregar Usuario</button>
            </Link>
            <Link to="/">
                <button className="boton">Volver a inicio</button>
            </Link>
        </div>
    );
};
;

export default Usuarios;
