import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <button><Link to="/CreationZone">Login</Link></button>
                <button><Link to="/CreationZone">Register</Link></button>
            </div>
        );
    }
}

export default Login;