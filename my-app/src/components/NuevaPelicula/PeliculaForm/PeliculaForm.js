import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

const PeliculaForm = (props) => {
    const navigate = useNavigate();
    const [nuevaPelicula, setNuevaPelicula] = useState({
        id: 1,
        nombre: "",
        genero: "",
        duracion: 1,
        inventario: 0
    });
    const cambioAtributoHandler = (evento) => {
        const { name, value, type, checked } = evento.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        setNuevaPelicula(estadoPrevio => ({ ...estadoPrevio, [name]: nuevoValor }));
    };

    const submitHandler = (evento) => {
        evento.preventDefault();

        if (!nuevaPelicula.nombre || !nuevaPelicula.genero || !nuevaPelicula.duracion || !nuevaPelicula.inventario) {
            alert("Por favor completa todos los campos.");
            return;
        }
        nuevaPelicula.id = Date.now();
        props.onGuardarPelicula(nuevaPelicula);
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
                        value={nuevaPelicula.nombre}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Género:
                    <input
                        type="text"
                        name="genero"
                        value={nuevaPelicula.genero}
                        onChange={cambioAtributoHandler}
                    />
                </label>
                <br />
                <label>
                    Duración:
                    <input
                        type="number"
                        name="duracion"
                        value={nuevaPelicula.duracion}
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
                        value={nuevaPelicula.inventario}
                        onChange={cambioAtributoHandler}
                        min="0"
                    />
                </label>
                <br />
                <button type="submit">Guardar Pelicula</button>
            </form>
        </div>
    );
}

export default PeliculaForm;
