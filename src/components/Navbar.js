import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar" style={{ background: "#da7618" }}>
            <h1>
                <i className="fas fa-dumbbell"></i> Fitness Maestro
            </h1>

            <ul>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/Register'>Register</Link>
                </li>
                <li>
                    <Link to='/ProfilePage'><i className="fas fa-user"></i>My Profile</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;