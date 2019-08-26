// import React, { Component } from 'react'
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { setRegisterUser } from '../../redux/user_register';
// import './Styles/Register.scss';

// class Register extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             user_name: '',
//             password: '',
//             email: '',
//             first_name: '',
//             last_name: '',
//             profile_picture: '',
//             sex: ''
//         }

//         this.register = this.register.bind(this);
//         this.universalChangeHandler = this.universalChangeHandler.bind(this);
//     }

//     componentDidMount() {
//         axios.get('/auth/user_session').then(res => {
//             console.log(res.data)
//             this.props.setRegisterUser(res.data)
//         })
//         console.log(this.props)
//     }

//     async register() {
//         const { email,
//             first_name,
//             last_name,
//             user_name,
//             password,
//             sex,
//             profile_picture } = this.state;
//         console.log(this.state);
//         await axios.post('/auth/register', {
//             user_name: user_name,
//             password: password,
//             email: email,
//             first_name: first_name,
//             last_name: last_name,
//             profile_picture: profile_picture,
//             sex: sex
//         })
//             .then(res => {
//                 console.log(res);
//                 this.props.setRegisterUser(res.data);
//                 this.props.history.push('/ProfilePage');
//             });
//     }

//     universalChangeHandler(property, value) {
//         this.setState({
//             [property]: value
//         });
//     }

//     render() {
//         const { user_name,
//             email,
//             first_name,
//             last_name,
//             sex,
//             profile_picture,
//             password } = this.state;

//         let styles = {
//             background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
//         };
//         let buttonStyle = {
//             background: 'rgba(226, 62, 62, 1)',
//             fontFamily: "'Quicksand', sans-serif",
//             fontSize: '18px',
//             fontWeight: 600
//         }
//         let style = {
//             background: 'lightgray'
//         };
//         let fontStyle = {
//             fontFamily: "'Quicksand', sans-serif",
//             fontSize: '18px',
//             fontWeight: 500
//         };
//         let titleFontStyle = {
//             fontFamily: "'Quicksand', sans-serif",
//             fontWeight: 600, 
//             fontSize: '36px'
//         };
//         return (
//             <div className='register-page' style={styles}>
//                 {/* <section id="actions" className="py-4 mb-4 bg-dark"> */}
//                     <div className="container">
//                         <div className="row">

//                         </div>
//                     </div>
//                 {/* </section> */}
//                 <section id="login">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-6 mx-auto">
//                                 <div className="card" style={style}>
//                                     <div className="card-header" style={{background: 'rgb(190, 190, 190)'}}>
//                                         <h4 style={titleFontStyle}>Register</h4>
//                                     </div>
//                                     <div className="card-body">
//                                             <div className="form-group-small">
//                                                 <label style={fontStyle}>Username</label>
//                                                 <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('user_name', e.target.value)} value={user_name} />
//                                             </div>
//                                             <div className="form-group-small">
//                                                 <label style={fontStyle}>Email</label>
//                                                 <input type="email" class="form-control" onChange={(e) => this.universalChangeHandler('email', e.target.value)} value={email}/>
//                                             </div>
//                                             <div className="form-group-small">
//                                                 <label style={fontStyle}>Password</label>
//                                                 <input type="password" className="form-control" onChange={(e) => this.universalChangeHandler('password', e.target.value)} value={password}/>
//                                             </div>
//                                             <div class="form-group-small">
//                                                 <label style={fontStyle}>First Name</label>
//                                                 <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('first_name', e.target.value)} value={first_name}/>
//                                             </div>
//                                             <div className="form-group-small">
//                                                 <label style={fontStyle}>Last Name</label>
//                                                 <input type="text" className="form-control" onChange={(e) => this.universalChangeHandler('last_name', e.target.value)} value={last_name}/>
//                                             </div>
//                                             <div className="form-group-small">
//                                                 <label style={fontStyle}>Sex</label>
//                                                 <select onChange={(e) => this.universalChangeHandler('sex', e.target.value)} name="sex" id="sex">
//                                                 <option defaultValue="Male / Female" selected={true} style={fontStyle}> Male / Female </option>
//                                                 <option value={sex} style={fontStyle}> Male </option>
//                                                 <option value={sex} style={fontStyle}> Female </option>
//                                                 </select>
//                                             </div> 
//                                             <div className="form-group-small">
//                                                 <label style={fontStyle}>Profile Picture</label>
//                                                 <input type="file" className="form-control-file" onChange={(e) => this.universalChangeHandler('profile_picture', e.target.value)} value={profile_picture} />
//                                             </div>
//                                             <input type="Submit" value="Submit" onClick={() => this.register()} className="btn btn-block" style={buttonStyle} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                         </section>
//                     </div>
//                 );
//             }
//         }
        
// const mapStateToProps = (state) => {
//     return {
//                     user: state.user
//             }
//         }
        
// const mapDispatchToProps = {
//                     setRegisterUser: setRegisterUser
//             }
            
// export default connect(mapStateToProps, mapDispatchToProps)(Register);


import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
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

        return(
            <body data-spy="scroll" data-target="#main-nav" id="home">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" id="main-nav">
                    <div className="container">
                        <h3 class='title'> <i className="fas fa-dumbbell"></i> Astro Fitness </h3>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to='/Register' className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/CreationZone' className="nav-link">Workout Routines</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/ProfilePage' className="nav-link">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header id="home-section">
                    <div className="dark-overlay">
                        <div className="home-inner container"> 
                            <div className="">
                                <div className="col-lg-4 d-none d-lg-block">
                                    <div className="d-flex">
                                        <div className="p-4 align-self-start">
                                            <i className="fas fa-check fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card bg-primary text-center card-form">
                                        <div className="card-body">
                                            <h3>Register Here:</h3>
                                            <p>Please fill out this form for your own unique user profile!</p>
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-lg" onChange={(e) => this.universalChangeHandler('user_name', e.target.value)} value={user_name} placeholder="Username" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-lg" onChange={(e) => this.universalChangeHandler('email', e.target.value)} value={email} placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-lg" onChange={(e) => this.universalChangeHandler('password', e.target.value)} value={password} placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-lg" onChange={(e) => this.universalChangeHandler('first_name', e.target.value)} value={first_name} placeholder="First Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-lg" onChange={(e) => this.universalChangeHandler('last_name', e.target.value)} value={last_name} placeholder="Last Name" />
                                                </div>
                                                <div className="form-group float-left">
                                                    <div className="form-control form-control-sm">
                                                        <select onChange={(e) => this.universalChangeHandler('sex', e.target.value)} name="sex" id="sex">
                                                            <option defaultValue="Male / Female" selected={true}> Male / Female </option>
                                                            <option value={sex}> Male </option>
                                                            <option value={sex}> Female </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                 <div className="form-group float-left">
                                                            <span className="text-light font-weight-bolder">Profile Picture:  </span>
                                                        <div class="btn btn-primary btn-md">
                                                            <input type="file" onChange={(e) => this.universalChangeHandler('profile_picture', e.target.value)} value={profile_picture}/>
                                                        </div>
                                                </div>
                                                <input type="submit" value="submit" onClick={() => this.register()}  className="btn btn-outline-light btn-block" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </header>
                <footer id="main-footer" className="bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center py-4">
                                <h3>Astro Fitness</h3>
                                <p>Copyright &copy; <span id="year"></span></p>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="modal fade text-dark" id="contactModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Us</h5>
                                <button className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
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