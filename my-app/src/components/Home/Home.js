import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
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
