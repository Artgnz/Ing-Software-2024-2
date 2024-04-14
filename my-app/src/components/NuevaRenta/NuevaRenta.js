import React from "react";

import RentaForm from './RentaForm/RentaForm'

const NuevaRenta = (props) => {
    const guardaRentaHandler = (rentaIngresado) => {
        props.onAgregarRenta(rentaIngresado);
    };

    return (
        <div>
            <RentaForm onGuardarRenta={guardaRentaHandler} />
        </div>
    )
}

export default NuevaRenta;
