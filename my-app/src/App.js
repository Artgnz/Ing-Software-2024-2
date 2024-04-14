import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';


import "./App.css";

import Usuarios from "./components/Usuarios/Usuarios";
import NuevoUsuario from "./components/NuevoUsuario/NuevoUsuario";
import ActualizarUsuario from "./components/ActualizarUsuario/ActualizarUsuario";
import Peliculas from "./components/Peliculas/Peliculas";
import NuevaPelicula from "./components/NuevaPelicula/NuevaPelicula";
import ActualizarPelicula from "./components/ActualizarPelicula/ActualizarPelicula";
import Home from './components/Home/Home'
import {useUsuarios} from './hooks/useUsuarios'
import {usePeliculas} from './hooks/usePeliculas'

function App() {
    const { usuarios, agregarUsuario, actualizarUsuario, eliminarUsuario } = useUsuarios();
    const { peliculas, agregarPelicula, actualizarPelicula, eliminarPelicula } = usePeliculas();
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/usuarios"
                           element={<Usuarios usuarios={usuarios} onEliminarUsuario={eliminarUsuario} onActualizarUsuario={actualizarUsuario}/>} />
                    <Route path="/usuarios/agregar"
                           element={<NuevoUsuario onAgregarUsuario={agregarUsuario} />} />
                    <Route path="/usuarios/actualizar/:id"
                           element={<ActualizarUsuario usuarios={usuarios} onActualizarUsuario={actualizarUsuario} />} />
                    <Route path="/peliculas"
                           element={<Peliculas peliculas={peliculas} onEliminarPelicula={eliminarPelicula} onActualizarPelicula={actualizarPelicula}/>} />
                    <Route path="/peliculas/agregar"
                           element={<NuevaPelicula onAgregarPelicula={agregarPelicula} />} />
                    <Route path="/peliculas/actualizar/:id"
                           element={<ActualizarPelicula peliculas={peliculas} onActualizarPelicula={actualizarPelicula} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
