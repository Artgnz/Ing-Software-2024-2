import { useState } from "react";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([
        { 
            id: 1,
            nombre: "Sam",
            apPat: "Raudry",
            apMat: "Peñaloza",
            password: "contrasena",
            email: "arsenio@hotmail.com",
            profilePicture: null,
            superUser: 0
        },
        { 
            id: 2,
            nombre: "Bruce",
            apPat: "Wayne",
            apMat: "Mora",
            password: "batman123",
            email: "brucewayne@example.com",
            profilePicture: null,
            superUser: 1
        },
        { 
            id: 3,
            nombre: "Diana",
            apPat: "Prince",
            apMat: "Ramirez",
            password: "wonder123",
            email: "dianaprince@example.com",
            profilePicture: null,
            superUser: 0
        },
        { 
            id: 4,
            nombre: "Clark",
            apPat: "Kent",
            apMat: "Raudry",
            password: "superman123",
            email: "clarkkent@example.com",
            profilePicture: null,
            superUser: 1
        },
        { 
            id: 5,
            nombre: "Peter",
            apPat: "Parker",
            apMat: "Rodriguez",
            password: "spider123",
            email: "peterparker@example.com",
            profilePicture: null,
            superUser: 0
        }
    ]);

    const agregarUsuario = (usuario) => {
        setUsuarios([usuario, ...usuarios]);
    };

    const actualizarUsuario = (usuarioActualizado) => {
        const usuariosActualizados = usuarios.map(usuario =>
            usuario.id === usuarioActualizado.id ? usuarioActualizado : usuario
        );
        setUsuarios(usuariosActualizados);
    };

    const eliminarUsuario = (idUsuario) => {
        const usuariosActualizados = usuarios.filter(usuario => usuario.id !== idUsuario);
        setUsuarios(usuariosActualizados);
    };

    return {
        usuarios,
        agregarUsuario,
        actualizarUsuario,
        eliminarUsuario
    };
};
