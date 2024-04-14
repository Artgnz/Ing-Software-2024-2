import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';


import "./App.css";

import Alumnos from "./components/Alumnos/Alumnos";
import Usuarios from "./components/Usuarios/Usuarios";
import NuevoAlumno from "./components/NuevoAlumno/NuevoAlumno";
import NuevoUsuario from "./components/NuevoUsuario/NuevoUsuario";
import ActualizarUsuario from "./components/ActualizarUsuario/ActualizarUsuario";
import Home from './components/Home/Home'

function App() {
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
  const [alumnos, setAlumnos] = useState([
    {
      nombre: "Fernando",
      apellido: "Fong",
      numCta: 313320679,
    },
    {
      nombre: "Valeria",
      apellido: "Garcia",
      numCta: 314006088,
    },
    {
      nombre: "Erick",
      apellido: "Martinez",
      numCta: 414890123,
    },
  ]);

    const agregarUsuario = (usuario) => {
        const nuevoUsuario = [usuario, ...usuarios];
        setUsuarios(nuevoUsuario);
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

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/usuarios" element={<Usuarios usuarios={usuarios} onEliminarUsuario={eliminarUsuario}
                                                               onActualizarUsuario={actualizarUsuario}/>} />
                    <Route path="/usuarios/agregar" element={<NuevoUsuario onAgregarUsuario={agregarUsuario} />} />
                    <Route path="/usuarios/actualizar/:id" element={<ActualizarUsuario usuarios={usuarios} onActualizarUsuario={actualizarUsuario} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
