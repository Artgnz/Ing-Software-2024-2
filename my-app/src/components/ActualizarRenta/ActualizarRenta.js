import React, { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarRenta = ({ rentas, onActualizarRenta }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const rentaVieja = rentas.find(renta => renta.id === parseInt(id));

    const [rentaActualizada, setRentaActualizada] = useState(rentaVieja);

    const cambioAtributoHandler = (evento) => {
        const { name, value, type, checked } = evento.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        setRentaActualizada(estadoPrevio => ({ ...estadoPrevio, [name]: nuevoValor }));
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        onActualizarRenta(rentaActualizada);
        navigate('/rentas');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    ID de Usuario:
                    <input
                        type="number"
                        name="idUsuario"
                        value={rentaActualizada.idUsuario}
                        onChange={cambioAtributoHandler}
                        min="1"
                    />
                </label>
                <br />
                <label>
                    ID de Película:
                    <input
                        type="number"
                        name="idPelicula"
                        value={rentaActualizada.idPelicula}
                        onChange={cambioAtributoHandler}
                        min="1"
                    />
                </label>
                <br />
                <label>
                    Fecha de renta:
                    <input
                        type="date"
                        name="fechaRenta"
                        value={rentaActualizada.fechaRenta}
                        onChange={cambioAtributoHandler}
                        max={new Date().toISOString().split('T')[0]}
                    />
                </label>
                <br />
                <label>
                    Días de renta:
                    <input
                        type="number"
                        name="diasDeRenta"
                        value={rentaActualizada.diasDeRenta}
                        onChange={cambioAtributoHandler}
                        min="1"
                    />
                </label>
                <br />
                <button type="submit">Guardar Renta</button>
            </form>
        </div>
    );
};

export default ActualizarRenta;
