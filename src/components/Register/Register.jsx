import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRegisterUser,
         insertEmail,
         insertPassword,
         insertSex,
         insertProfilePicture,
         insertUserName,
         insertFirstName,
         insertLastName } from '../../redux/user_register';
import './Styles/Register.scss';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            profile_picture: '',
            sex: ''
        }

        this.register = this.register.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }

    register() {
        const { email, first_name, last_name, user_name, password, sex, profile_picture } = this.state;
        axios.post('/auth/register', { user_name: user_name, password: password, email: email, first_name: first_name, last_name: last_name, profile_picture: profile_picture, sex: sex })
        .then( res => {
            this.props.setRegisterUser(res.data);
            this.props.history.push('/UserPage');
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
                first_name,
                last_name,
                sex,
                profile_picture,
                password } = this.props;
        return (
            <div className='register-page'>
                        <div> 
                            <h1> Fitness Maestro </h1> 
                        </div>                   
                        <div id='registration-card'>       
                            <div>
                                <h2> Register </h2>
                            </div>                  
                            <div>
                                Username:
                                <input onChange={(e) => insertUserName('user_name', e.target.value)} type='text' className='register-input' value={user_name} />
                            </div>                               
                            <div>
                                Email:
                                <input onChange={(e) => insertEmail('email', e.target.value)} type='text' className='register-input' value={email} />
                            </div>                               
                            <div>
                                Password:
                                <input onChange={(e) => insertPassword('password', e.target.value)} type='password' className='register-input' value={password} />
                            </div>
                            <div>
                                First Name:
                                <input onChange={(e) => insertFirstName('first_name', e.target.value)} type='text' className='register-input' value={first_name} />
                            </div>                              
                            <div>
                                Last Name:
                                <input onChange={(e) => insertLastName('last_name', e.target.value)} type='text' className='register-input' value={last_name} />
                            </div>                 
                            <div>
                                Sex:
                                <select onChange={(e) => insertSex('sex', e.target.value)} name="sex" id="sex">
                                    <option value="" selected="selected"> Male / Female </option>
                                    <option value={sex}> Male </option>
                                    <option value={sex}> Female </option>
                                </select>
                            </div>
                            <div>
                                Profile Picture:
                                <input onChange={(e) => insertProfilePicture('profile_picture', e.target.value)} type='text' className='register-input' value={profile_picture} />
                            </div>        
                            <div className='submit-button'>
                                <Link to='/UserPage'><button onClick={() => this.register()} className='register-button'> Submit </button> </Link>
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
    setRegisterUser: setRegisterUser,
    insertEmail: insertEmail,
    insertFirstName: insertFirstName,
    insertLastName: insertLastName,
    insertPassword: insertPassword,
    insertSex: insertSex,
    insertProfilePicture: insertProfilePicture,
    insertUserName: insertUserName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);