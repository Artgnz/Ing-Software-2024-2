import React, { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import './ActualizarPelicula.css';

const ActualizarPelicula = ({ peliculas, onActualizarPelicula }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const peliculaVieja = peliculas.find(pelicula => pelicula.id === parseInt(id));

    const [peliculaActualizada, setPeliculaActualizada] = useState(peliculaVieja);

    const cambioAtributoHandler = (evento) => {
        const { name, value, type, checked } = evento.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        setPeliculaActualizada(estadoPrevio => ({ ...estadoPrevio, [name]: nuevoValor }));
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        onActualizarPelicula(peliculaActualizada);
        navigate('/peliculas');
    };

    return (
        <div className="contenedor">
            <h1>Actualizar Pelicula</h1>
            <form onSubmit={submitHandler} className="form-contenedor">
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={peliculaActualizada.nombre}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Género:
                    <input
                        type="text"
                        name="genero"
                        value={peliculaActualizada.genero}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Duración:
                    <input
                        type="number"
                        name="duracion"
                        value={peliculaActualizada.duracion}
                        onChange={cambioAtributoHandler}
                        min="1"
                    />
                </label>
                <br />
                <label>
                    Inventario:
                    <input
                        type="number"
                        name="inventario"
                        value={peliculaActualizada.inventario}
                        onChange={cambioAtributoHandler}
                        min="0"
                    />
                </label>
                <br />
                <button type="submit" className="boton">Guardar Película</button>
                <Link to="/peliculas">
                    <button className="eliminar-boton">Cancelar</button>
                </Link>
            </form>
        </div>
    );
};

export default ActualizarPelicula;
