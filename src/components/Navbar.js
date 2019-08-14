import React from 'react';

import { Link } from 'react-router-dom';

let logoStyles = {
    color: 'rgba(226,62,62,1)'
};

let navStyles = {
   background: 'rgb(190, 190, 190)',
   borderWidth: '5px',
   borderStyle: 'inset',
   borderColor: 'rgb(155,155,155)'
};

let navTextStyles = {
    fontFamily: "'Titillium Web', sans-serif",
    textDecoration: 'underline',
    fontSize: '20px',
    fontWeight: '700',
    color: 'rgba(226,62,62,1)'
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm" style={navStyles}>
            <div className="container">
                <div className='logo' style={logoStyles}>
                <h3>
                    <i className="fas fa-dumbbell"></i> Fitness Maestro
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