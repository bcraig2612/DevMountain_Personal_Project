import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRegisterUser } from '../../redux/user_register';
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

    componentDidMount() {
        axios.get('/auth/user_session').then(res => {
            console.log(res.data)
            this.props.setRegisterUser(res.data)
        })
        console.log(this.props)
    }

    async register() {
        const { email, 
                first_name, 
                last_name, 
                user_name, 
                password, 
                sex, 
                profile_picture } = this.state;
        console.log(this.state);
        await axios.post('/auth/register', { 
            user_name: user_name, 
            password: password, 
            email: email, 
            first_name: first_name, 
            last_name: last_name, 
            profile_picture: profile_picture, 
            sex: sex })
            .then( res => {
                console.log(res);
                this.props.setRegisterUser(res.data);
                this.props.history.push('/ProfilePage');
        });
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
                password } = this.state;
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
                                <input onChange={(e) => this.universalChangeHandler('user_name', e.target.value)} type='text' className='register-input' value={user_name} />
                            </div>                               
                            <div>
                                Email:
                                <input onChange={(e) => this.universalChangeHandler('email', e.target.value)} type='text' className='register-input' value={email} />
                            </div>                               
                            <div>
                                Password:
                                <input onChange={(e) => this.universalChangeHandler('password', e.target.value)} type='password' className='register-input' value={password} />
                            </div>
                            <div>
                                First Name:
                                <input onChange={(e) => this.universalChangeHandler('first_name', e.target.value)} type='text' className='register-input' value={first_name} />
                            </div>                              
                            <div>
                                Last Name:
                                <input onChange={(e) => this.universalChangeHandler('last_name', e.target.value)} type='text' className='register-input' value={last_name} />
                            </div>                 
                            <div>
                                Sex:
                                <select onChange={(e) => this.universalChangeHandler('sex', e.target.value)} name="sex" id="sex">
                                    <option defaultValue="Male / Female" selected={true}> Male / Female </option>
                                    <option value="Male"> Male </option>
                                    <option value="Female"> Female </option>
                                </select>
                            </div>
                            <div>
                                Profile Picture:
                                <input onChange={(e) => this.universalChangeHandler('profile_picture', e.target.value)} type='text' className='register-input' value={profile_picture} />
                            </div>        
                            <div className='submit-button'>
                                {/* <Link to='/ProfilePage'> */}
                                    <button onClick={() => this.register()} className='register-button'> Submit </button> 
                                    {/* </Link> */}
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
    setRegisterUser: setRegisterUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);