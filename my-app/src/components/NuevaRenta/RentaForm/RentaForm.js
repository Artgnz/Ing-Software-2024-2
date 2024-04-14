import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

const RentaForm = (props) => {
    const navigate = useNavigate();
    const [nuevaRenta, setNuevaRenta] = useState({
        id: 1,
        idUsuario: 1,
        idPelicula: 1,
        fechaRenta: '',
        diasDeRenta: 1
    });
    const cambioAtributoHandler = (evento) => {
        const { name, value, type, checked } = evento.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        setNuevaRenta(estadoPrevio => ({ ...estadoPrevio, [name]: nuevoValor }));
    };

    const submitHandler = (evento) => {
        evento.preventDefault();

        if (!nuevaRenta.idUsuario || !nuevaRenta.idPelicula || !nuevaRenta.fechaRenta || !nuevaRenta.diasDeRenta) {
            alert("Por favor completa todos los campos.");
            return;
        }
        nuevaRenta.id = Date.now();
        props.onGuardarRenta(nuevaRenta);
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
                        value={nuevaRenta.idUsuario}
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
                        value={nuevaRenta.idPelicula}
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
                        value={nuevaRenta.fechaRenta}
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
                        value={nuevaRenta.diasDeRenta}
                        onChange={cambioAtributoHandler}
                        min="1"
                    />
                </label>
                <br />
                <button type="submit">Guardar Renta</button>
            </form>
        </div>
    );
}

export default RentaForm;
