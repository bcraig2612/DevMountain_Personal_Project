import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLoginUser, 
         insertEmail, 
         insertPassword, 
         insertUserName } from '../../redux/user_login';
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
            e.preventDefault();
            const { user_name, email, password } = this.state;
            axios.post('/auth/login', { user_name: user_name, email: email, password: password })
            .then(res => {
                console.log(res);
                if(res.data.message){
                    alert(res.data.message)
                } else {
                    this.props.setLoginUser(res.data);
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
                password } = this.props;
        return (
                    <div className='loginPage'>               
                        <div>
                            <h1> Fitness Maestro </h1>
                        </div>
                            <div className='login-card'>                          
                                <div>
                                    <h2> User Login </h2>
                                </div>                               
                                <div>
                                    Username:
                                    <input onChange={(e) => insertUserName('user_name', e.target.value)} type='text' className='login-name' value={user_name} />
                                </div>
                                <div>
                                    Password:
                                    <input onChange={(e) => insertPassword('password', e.target.value)} type='password' className='password' value={password} />
                                </div>
                                <div>
                                    Email:
                                    <input onChange={(e) => insertEmail('email', e.target.value)} type='text' className='user-email' value={email} />
                                </div>
                                <div className='button-group'>
                                    <Link to='/ProfilePage'><button onClick={() => this.login()} className='login-button'> Login </button> </Link>
                                    <Link to='/Register'><button className='register-button'> Register </button></Link>
                                </div>      
                            </div>
                        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        fist_name: state.first_name,
        last_name: state.last_name,
        user_name: state.user_name,
        password: state.password,
        sex: state.sex,
        profile_picture: state.profile_picture
    }
}

const mapDispatchToProps = {
    setLoginUser: setLoginUser,
    insertEmail: insertEmail,
    insertPassword: insertPassword,
    insertUserName: insertUserName
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);