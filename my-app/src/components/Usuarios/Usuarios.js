import React, { useState, useEffect } from 'react';
import Usuario from "./Usuario/Usuario";
import { Link } from 'react-router-dom';

const Usuarios = ({ usuarios, onEliminarUsuario, onActualizarUsuario }) => {
    return (
        <div>
            <h1>A continuación se muestran los usuarios</h1>
            <ul>
                {usuarios.map(usuario => (
                    <Usuario key={usuario.id} usuario={usuario} onEliminarUsuario={onEliminarUsuario} onActualizarUsuario={onActualizarUsuario}/>
                ))}
            </ul>
            <Link to="./agregar">
                <button>Agregar Usuario</button>
            </Link>
            <Link to="/">
                <button>Volver a inicio</button>
            </Link>
        </div>
    );
};

export default Usuarios;
