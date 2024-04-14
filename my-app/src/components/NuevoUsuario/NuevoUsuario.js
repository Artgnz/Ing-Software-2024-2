import React from "react";

import UsuarioForm from './UsuarioForm/UsuarioForm'

const NuevoUsuario = (props) => {
    const guardaUsuarioHandler = (usuarioIngresado) => {
        props.onAgregarUsuario(usuarioIngresado);
    };

    return (
        <div>
            <UsuarioForm onGuardarUsuario={guardaUsuarioHandler} />
        </div>
    )
}

export default NuevoUsuario;
