import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRegisterUser } from '../../redux/user_register';
import './Styles/UserInfo.scss';

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.user
        }

        this.updateInfo = this.updateInfo.bind(this);
        this.getUser = this.getUser.bind(this);
        this.userSession = this.userSession.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);

    }

    componentDidMount() {
        axios.get('/api/check_logged_in').then().catch(res => {
            console.log('error');
            this.props.history.push('/ProfilePage');
        });
        this.getUser();
    }
    
    getUser() {
        axios.get('/api/get_user').then(res => {
            this.setState({ user: res.data });
        });
    }
    
    userSession() {
        axios.get("/auth/user_session").then(res => {
            this.props.getUser(res.data);
        });
    }

    updateInfo() {
        const {
            email,
            first_name,
            last_name,
            user_name,
            password,
            sex,
            profile_picture } = this.state;
        axios.patch('/api/update_user_info/:user_id', {
            email: email,
            first_name: first_name,
            last_name: last_name,
            user_name: user_name,
            password: password,
            sex: sex,
            profile_picture: profile_picture })
            .then( res => {
                this.props.setRegisterUser(res.data);
                this.props.history.push('/ProfilePage');
            })
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const {
          email,
          first_name,
          last_name,
          user_name,
          password,
          sex,
          universalChangeHandler,
          profile_picture } = this.state;
        console.log(this.props);
        return (
            <div className='info'>
            <div> 
                <h1> Fitness Maestro </h1> 
            </div>                   
            <div id='info-card'>       
                <div>
                    <h2> User Info </h2>
                </div>           
                <div>
                    Email:
                    <input onChange={(e) => universalChangeHandler('email', e.target.value)} type='text' className='info-input' value={email} />
                </div>                               
                <div>
                    First Name:
                    <input onChange={(e) => universalChangeHandler('first_name', e.target.value)} type='text' className='info-input' value={first_name} />
                </div>                               
                <div>
                    Last Name:
                    <input onChange={(e) => universalChangeHandler('last_name', e.target.value)} type='text' className='info-input' value={last_name} />
                </div>
                <div>
                    User Name:
                    <input onChange={(e) => universalChangeHandler('user_name', e.target.value)} type='text' className='info-input' value={user_name} />
                </div>                              
                <div>
                    Password:
                    <input onChange={(e) => universalChangeHandler('password', e.target.value)} type='password' className='info-input' value={password} />
                </div>                 
                <div>
                    User Sex:
                    <input onChange={(e) => universalChangeHandler('sex', e.target.value)} type='text' className='info-input' value={sex} />
                </div>
                <div>
                    Profile Picture:
                    <input onChange={(e) => universalChangeHandler('profile_picture', e.target.value)} type='text' className='info-input' value={profile_picture} />
                </div>     
                <div className='info-button'>
                    <Link to='/ProfilePage'><button onClick={() => this.updateInfo()} className='update-info'> Submit </button> </Link>
                </div>
            </div>
        </div>                                 
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);