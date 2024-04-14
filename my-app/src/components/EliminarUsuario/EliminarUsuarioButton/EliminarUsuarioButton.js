import React from 'react';

const EliminarUsuarioButton = ({ usuario, onEliminarUsuario }) => {
    const eliminarUsuarioHandler = () => {
        if (window.confirm(`¿Estás seguro de eliminar al usuario ${usuario.nombre} ${usuario.apPat} ${usuario.apMat}?`)) {
            onEliminarUsuario(usuario.id);
        }
    };

    return (
        <button onClick={eliminarUsuarioHandler}>
            Eliminar
        </button>
    );
};

export default EliminarUsuarioButton;
