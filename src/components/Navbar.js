import React from 'react';

import { Link } from 'react-router-dom';

let logoStyles = {
    color: 'rgba(226,62,62,1)'
};

let navStyles = {
    borderWidth: '5px',
    borderStyle: 'inset',
    borderColor: 'rgb(190, 190, 190)',
};

let fontStyle = {
    fontFamily: "'Titillium Web', sans-serif",
    fontWeight: '800'
};

let navTextStyles = {
    fontFamily: "'Titillium Web', sans-serif",
    textDecoration: 'underline',
    fontSize: '20px',
    fontWeight: '700',
    color: 'rgba(226,62,62,1)'
}

// let buttonStyle = {
//     color: 'black'
// };

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-0" style={navStyles}>
            <div className="container">
                <div className='navbar-logo'>
                    <h3 class='title' style={fontStyle}>
                        <i className="fas fa-dumbbell" style={logoStyles}></i> Fitness Maestro
                    </h3>
                </div>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link" style={navTextStyles}>Login</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/Register' className="nav-link" style={navTextStyles}>Register</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/CreationZone' className="nav-link" style={navTextStyles}>Workout Routines</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/ProfilePage' className="nav-link" style={navTextStyles}>My Profile</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/' className="nav-link" style={navTextStyles}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
// <div className="navbar" style={{ background: "#da7618" }}>


//     <ul>
//         <li>
//             <Link to='/'><i class="fas fa-sign-in-alt"></i> Login </Link>
//         </li>
//         <li>
//             <Link to='/Register'><i class="far fa-registered"></i> Register </Link>
//         </li>
//         <li>
//             <Link to='/ProfilePage'><i className="fas fa-user"></i> My Profile </Link>
//         </li>
//         <li>
//             <Link to='/CreationZone'><i className="fas fa-running"></i> Workout Routines </Link>
//         </li>
//         <li>
//             <Link to='/'><i class="fas fa-sign-out-alt"></i> Logout </Link>
//         </li>
//     </ul>
// </div>