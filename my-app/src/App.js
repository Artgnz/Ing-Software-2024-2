import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';


import "./App.css";

import Alumnos from "./components/Alumnos/Alumnos";
import Usuarios from "./components/Usuarios/Usuarios";
import NuevoAlumno from "./components/NuevoAlumno/NuevoAlumno";
import NuevoUsuario from "./components/NuevoUsuario/NuevoUsuario";
import ActualizarUsuario from "./components/ActualizarUsuario/ActualizarUsuario";
import Home from './components/Home/Home'
import {useUsuarios} from './hooks/useUsuarios'

function App() {
    const { usuarios, agregarUsuario, actualizarUsuario, eliminarUsuario } = useUsuarios();
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/usuarios"
                           element={<Usuarios usuarios={usuarios} onEliminarUsuario={eliminarUsuario}
                                              onActualizarUsuario={actualizarUsuario}/>} />
                    <Route path="/usuarios/agregar"
                           element={<NuevoUsuario onAgregarUsuario={agregarUsuario} />} />
                    <Route path="/usuarios/actualizar/:id"
                           element={<ActualizarUsuario usuarios={usuarios} onActualizarUsuario={actualizarUsuario} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
