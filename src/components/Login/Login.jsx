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
            user_name: '',
            password: '',
            email: ''
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

        let styles = {
            background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
                }

          let style = {
            background: 'lightgray'
        };
        return (
            <div style={styles}>
                <section id="actions" class="py-4 mb-4 bg-light">
                    <div class="container" >
                        <div class="row"></div>
                    </div>
                </section>
                <section id="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card" style={style}>
                                    <div style={{ background: 'rgb(190, 190, 190)' }} className="card-header">
                                        <h4>Account Login</h4>
                                    </div>
                                    <div className="card-body">
                                      
                                            <div className="form-group">
                                                <label for="email">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => this.universalChangeHandler('user_name', e.target.value)}
                                                    value={user_name}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    onChange={(e) => this.universalChangeHandler('email', e.target.value)}
                                                    value={email}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="password">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    onChange={(e) => this.universalChangeHandler('password', e.target.value)}
                                                    value={password}
                                                />
                                            </div>
                                            <input type="Submit" value="Login" onClick={() => this.login()} className="btn btn-block" style={{ background: 'rgba(226,62,62,1)' }} />
                                            <Link to='/Register'><button className='btn btn-block' style={{ marginTop: "5px", background: 'rgb(190, 190, 190)' }}> Register </button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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