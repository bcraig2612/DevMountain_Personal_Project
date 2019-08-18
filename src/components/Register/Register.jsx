import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
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
            sex: sex
        })
            .then(res => {
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

        let styles = {
            background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
                }
        let style = {
            background: 'lightgray'
        };
        let fontStyle = {
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400
        };
        return (
            <div className='register-page' style={styles}>
                <section id="actions" className="py-4 mb-4 bg-light">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </section>
                <section id="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card" style={style}>
                                    <div className="card-header" style={{background: 'rgb(190, 190, 190)'}}>
                                        <h4 style={fontStyle}>Register</h4>
                                    </div>
                                    <div className="card-body">
                                            <div className="form-group">
                                                <label style={fontStyle}>Username</label>
                                                <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('user_name', e.target.value)} value={user_name} />
                                            </div>
                                            <div className="form-group">
                                                <label style={fontStyle}>Email</label>
                                                <input type="email" class="form-control" onChange={(e) => this.universalChangeHandler('email', e.target.value)} value={email}/>
                                            </div>
                                            <div className="form-group">
                                                <label style={fontStyle}>Password</label>
                                                <input type="password" className="form-control" onChange={(e) => this.universalChangeHandler('password', e.target.value)} value={password}/>
                                            </div>
                                            <div class="form-group">
                                                <label style={fontStyle}>First Name</label>
                                                <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('first_name', e.target.value)} value={first_name}/>
                                            </div>
                                            <div className="form-group">
                                                <label style={fontStyle}>Last Name</label>
                                                <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('last_name', e.target.value)} value={last_name}/>
                                            </div>
                                            <div className="form-group">
                                                <label style={fontStyle}>Sex</label>
                                                <select onChange={(e) => this.universalChangeHandler('sex', e.target.value)} name="sex" id="sex">
                                                <option defaultValue="Male / Female" selected={true} style={fontStyle}> Male / Female </option>
                                                <option value={sex} style={fontStyle}> Male </option>
                                                <option value={sex} style={fontStyle}> Female </option>
                                                </select>
                                            </div> 
                                            <div className="form-group">
                                                <label style={fontStyle}>Profile Picture</label>
                                                <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('profile_picture', e.target.value)} value={profile_picture} />
                                            </div>
                                            <input type="Submit" value="Submit" onClick={() => this.register()} className="btn btn-block" style={{background: 'rgba(226,62,62,1)', fontStyle}} />
                                            {/* <button onClick={() => this.register()} className='register-button'> Submit </button> */}
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
                    setRegisterUser: setRegisterUser
            }
            
export default connect(mapStateToProps, mapDispatchToProps)(Register);