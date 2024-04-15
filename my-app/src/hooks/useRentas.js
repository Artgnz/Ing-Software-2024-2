import { useState } from "react";

export const useRentas = () => {
    const [rentas, setRentas] = useState([
        {
            id: 1,
            idUsuario: 1,
            idPelicula: 1,
            fechaRenta: '2024-04-13',
            diasDeRenta: 3,
            estatus: 1
        },
        {
            id: 2,
            idUsuario: 2,
            idPelicula: 3,
            fechaRenta: '2024-04-12',
            diasDeRenta: 5,
            estatus: 1
        },
        {
            id: 3,
            idUsuario: 3,
            idPelicula: 2,
            fechaRenta: '2024-04-11',
            diasDeRenta: 2,
            estatus: 0
        },
        {
            id: 4,
            idUsuario: 1,
            idPelicula: 4,
            fechaRenta: '2024-04-10',
            diasDeRenta: 4,
            estatus: 1,
        },
        {
            id: 5,
            idUsuario: 4,
            idPelicula: 5,
            fechaRenta: '2024-04-09',
            diasDeRenta: 7,
            estatus: 0
        }
    ]);

    const agregarRenta = (renta) => {
        setRentas([renta, ...rentas]);
    };

    const actualizarRenta = (rentaActualizada) => {
        const rentasActualizadas = rentas.map(renta =>
            renta.id === rentaActualizada.id ? rentaActualizada : renta
        );
        setRentas(rentasActualizadas);
    };
    return {
        rentas,
        agregarRenta,
        actualizarRenta
    };
};
