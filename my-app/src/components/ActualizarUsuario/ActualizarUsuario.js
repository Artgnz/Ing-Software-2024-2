import React, { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import './ActualizarUsuario.css';

const ActualizarUsuario = ({ usuarios, onActualizarUsuario }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const usuarioViejo = usuarios.find(usuario => usuario.id === parseInt(id));

    const [usuarioActualizado, setUsuarioActualizado] = useState(usuarioViejo);

    const cambioAtributoHandler = (evento) => {
        const { name, value, type, checked } = evento.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        setUsuarioActualizado(estadoPrevio => ({ ...estadoPrevio, [name]: nuevoValor }));
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        onActualizarUsuario(usuarioActualizado);
        navigate('/usuarios');
    };

    return (
        <div>
            <div className="contenedor">
                <h1>Actualizar Usuario</h1>
                <form onSubmit={submitHandler} className="form-contenedor">
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={usuarioActualizado.nombre}
                            onChange={cambioAtributoHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="apPat">Apellido Paterno:</label>
                        <input
                            type="text"
                            id="apPat"
                            name="apPat"
                            value={usuarioActualizado.apPat}
                            onChange={cambioAtributoHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="apMat">Apellido Materno:</label>
                        <input
                            type="text"
                            id="apMat"
                            name="apMat"
                            value={usuarioActualizado.apMat}
                            onChange={cambioAtributoHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={usuarioActualizado.email}
                            onChange={cambioAtributoHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={usuarioActualizado.password}
                            onChange={cambioAtributoHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="superUser">Super Usuario:</label>
                        <input
                            type="checkbox"
                            id="superUser"
                            name="superUser"
                            checked={usuarioActualizado.superUser}
                            onChange={cambioAtributoHandler}
                        />
                    </div>
                    <button type="submit" className="boton">Guardar Usuario</button>
                    <Link to="/usuarios">
                        <button className="eliminar-boton">Cancelar</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ActualizarUsuario;
