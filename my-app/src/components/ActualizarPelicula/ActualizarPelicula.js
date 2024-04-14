import React, { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
        <div>
            <form onSubmit={submitHandler}>
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
                <button type="submit">Guardar Pelicula</button>
            </form>
        </div>
    );
};

export default ActualizarPelicula;
