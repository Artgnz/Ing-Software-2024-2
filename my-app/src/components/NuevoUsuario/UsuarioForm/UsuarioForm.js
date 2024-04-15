import React, { useState } from "react"
import { useNavigate, Link } from 'react-router-dom';

import './UsuarioForm.css'

const UsuarioForm = (props) => {
    const navigate = useNavigate();
    const [nuevoUsuario, setNuevoUsuario] = useState({
        id: 0,
        nombre: "",
        apPat: "",
        apMat: "",
        email: "",
        password: "",
        superUser: false
    });
    const cambioAtributoHandler = (evento) => {
        const { name, value, type, checked } = evento.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        setNuevoUsuario(estadoPrevio => ({ ...estadoPrevio, [name]: nuevoValor }));
    };

    const submitHandler = (evento) => {
        evento.preventDefault();

        if (!nuevoUsuario.nombre || !nuevoUsuario.apPat || !nuevoUsuario.apMat || !nuevoUsuario.email || !nuevoUsuario.password) {
            alert("Por favor completa todos los campos.");
            return;
        }
        nuevoUsuario.id = Date.now();
        props.onGuardarUsuario(nuevoUsuario);
        navigate('/usuarios');
    };
    return (
        <div className="container">
            <h1>Agregar Nuevo Usuario</h1> 
            <form onSubmit={submitHandler} className="form-container">
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={nuevoUsuario.nombre}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Apellido Paterno:
                    <input
                        type="text"
                        name="apPat"
                        value={nuevoUsuario.apPat}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Apellido Materno:
                    <input
                        type="text"
                        name="apMat"
                        value={nuevoUsuario.apMat}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={nuevoUsuario.email}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        name="password"
                        value={nuevoUsuario.password}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Super Usuario:
                    <input
                        type="checkbox"
                        name="superUser"
                        checked={nuevoUsuario.superUser}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <button type="submit" className="boton">Guardar Usuario</button>
                <Link to="/usuarios">
                    <button className="eliminar-boton">Cancelar</button>
                </Link>
            </form>
        </div>
    );
}

export default UsuarioForm;
