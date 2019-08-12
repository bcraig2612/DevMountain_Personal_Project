import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLoginUser } from '../../redux/user_register';
import './Styles/Login.scss';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: 'Test',
            password: 'test',
            email: 'test@test.com'
        }

        this.login = this.login.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }

    componentDidMount() {
        axios.get('/auth/user_session').then(res => {
            console.log(res.data)
            this.props.setLoginUser(res.data)
        })
        console.log(this.props)
    }

    login(e) {
        // e.preventDefault();
        const { user_name, email, password } = this.state;
        axios.post('/auth/login', { user_name: user_name, email: email, password: password })
            .then(res => {
                console.log(res);
                if (res.data.message) {
                    alert(res.data.message)
                } else {
                    this.props.setLoginUser(res.data.user);
                    this.props.history.push('/ProfilePage');
                }
            })
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }


    render() {
        const { user_name,
            email,
            password } = this.state;
        return (
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-header'>
                                <h2> User Login </h2>
                            </div>
                            <div className='form-group'>
                                <label>Username:</label>
                                <input onChange={(e) => this.universalChangeHandler('user_name', e.target.value)} type='text' className='form-control' value={user_name} />
                            </div>
                            <div className='form-group'>
                                Password:
                                    <input onChange={(e) => this.universalChangeHandler('password', e.target.value)} type='password' className='form-control' value={password} />
                            </div>
                            <div className='form-group'>
                                Email:
                                    <input onChange={(e) => this.universalChangeHandler('email', e.target.value)} type='text' className='form-control' value={email} />
                            </div>
                            <div className='button-group'>
                                {/* <Link to='/ProfilePage'> */}
                                <button onClick={() => this.login()} className='btn btn-success btn-block' style={{marginBottom: "5px"}}> Login </button>
                                {/* </Link> */}
                                <Link to='/Register'><button className='btn btn-primary btn-block' style={{marginTop: "5px"}}> Register </button></Link>
                            </div>
                        </div>
                    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    setLoginUser: setLoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);