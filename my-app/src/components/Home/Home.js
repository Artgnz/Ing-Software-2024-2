import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className="nav-container">
            <nav>

                <ul>
                    <li>
                        <Link to="/usuarios">Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/Rentas">Rentas</Link>
                    </li>
                    <li>
                        <Link to="/Peliculas">Peliculas</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
