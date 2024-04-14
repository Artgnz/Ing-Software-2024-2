import { useState } from "react";

export const usePeliculas = () => {
    const [peliculas, setPeliculas] = useState([
        {
            id: 1,
            nombre: "El Origen",
            genero: "Ciencia Ficción",
            duracion: 123,
            inventario: 4
        },
        {
            id: 2,
            nombre: "Titanic",
            genero: "Drama",
            duracion: 195,
            inventario: 5
        },
        {
            id: 3,
            nombre: "El Laberinto del Fauno",
            genero: "Fantasía",
            duracion: 118,
            inventario: 3
        },
        {
            id: 4,
            nombre: "Mar adentro",
            genero: "Drama",
            duracion: 125,
            inventario: 2
        },
        {
            id: 5,
            nombre: "La La Land",
            genero: "Musical",
            duracion: 128,
            inventario: 3
        },
        {
            id: 6,
            nombre: "Willy Wonka y la Fábrica de Chocolate",
            genero: "Fantasía",
            duracion: 118,
            inventario: 4
        },
        {
            id: 7,
            nombre: "El Padrino",
            genero: "Drama",
            duracion: 175,
            inventario: 6
        },
        {
            id: 8,
            nombre: "Interstellar",
            genero: "Ciencia Ficción",
            duracion: 169,
            inventario: 3
        },
        {
            id: 9,
            nombre: "Avatar",
            genero: "Ciencia Ficción",
            duracion: 162,
            inventario: 7
        },
        {
            id: 10,
            nombre: "Parásitos",
            genero: "Drama",
            duracion: 132,
            inventario: 4
        }
    ]);

    const agregarPelicula = (pelicula) => {
        setPeliculas([pelicula, ...peliculas]);
    }
    const actualizarPelicula = (peliculaActualizada) => {
        const peliculasActualizadas = peliculas.map(pelicula =>
            pelicula.id === peliculaActualizada.id ? peliculaActualizada : pelicula
        );
        setPeliculas(peliculasActualizadas);
    };

    const eliminarPelicula = (idPelicula) => {
        const peliculasActualizadas = peliculas.filter(pelicula => pelicula.id !== idPelicula);
        setPeliculas(peliculasActualizadas);
    };

    return {
        peliculas,
        agregarPelicula,
        actualizarPelicula,
        eliminarPelicula
    };
}
