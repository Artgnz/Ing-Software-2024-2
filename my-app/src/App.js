import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import "./App.css";

import Usuarios from "./components/Usuarios/Usuarios";
import NuevoUsuario from "./components/NuevoUsuario/NuevoUsuario";
import ActualizarUsuario from "./components/ActualizarUsuario/ActualizarUsuario";
import Peliculas from "./components/Peliculas/Peliculas";
import NuevaPelicula from "./components/NuevaPelicula/NuevaPelicula";
import ActualizarPelicula from "./components/ActualizarPelicula/ActualizarPelicula";
import Rentas from "./components/Rentas/Rentas";
import NuevaRenta from "./components/NuevaRenta/NuevaRenta";
import ActualizarRenta from "./components/ActualizarRenta/ActualizarRenta";
import Home from './components/Home/Home'
import {useUsuarios} from './hooks/useUsuarios'
import {usePeliculas} from './hooks/usePeliculas'
import {useRentas} from './hooks/useRentas.js'

function App() {
    const { usuarios, agregarUsuario, actualizarUsuario, eliminarUsuario } = useUsuarios();
    const { peliculas, agregarPelicula, actualizarPelicula, eliminarPelicula } = usePeliculas();
    const { rentas, agregarRenta, actualizarRenta } = useRentas();
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
                           element={<ActualizarUsuario usuarios={usuarios}
                                                       onActualizarUsuario={actualizarUsuario} />} />
                    <Route path="/peliculas"
                           element={<Peliculas peliculas={peliculas} onEliminarPelicula={eliminarPelicula}
                                               onActualizarPelicula={actualizarPelicula}/>} />
                    <Route path="/peliculas/agregar"
                           element={<NuevaPelicula onAgregarPelicula={agregarPelicula} />} />
                    <Route path="/peliculas/actualizar/:id"
                           element={<ActualizarPelicula peliculas={peliculas}
                                                        onActualizarPelicula={actualizarPelicula} />} />
                    <Route path="/rentas"
                           element={<Rentas rentas={rentas} onActualizarRenta={actualizarRenta}/>} />
                    <Route path="/rentas/agregar"
                           element={<NuevaRenta onAgregarRenta={agregarRenta} />} />
                    <Route path="/rentas/actualizar/:id"
                           element={<ActualizarRenta rentas={rentas}
                                                        onActualizarRenta={actualizarRenta} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
