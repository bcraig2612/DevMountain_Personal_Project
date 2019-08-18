import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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
        let user_id = this.props.user.user_id;
        const {
            email,
            first_name,
            last_name,
            user_name,
            sex,
            profile_picture } = this.state;
        axios.patch(`/api/update_user_info/${user_id}`, {
            email: email,
            first_name: first_name,
            last_name: last_name,
            user_name: user_name,
            sex: sex,
            profile_picture: profile_picture })
            .then( res => {
                this.props.setRegisterUser(res.data[0]);
                // this.props.history.push('/ProfilePage');
            })
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        // let user = this.state.user;
        const {
          email,
          first_name,
          last_name,
          user_name,
          sex,
          profile_picture } = this.state;
        console.log(this.props);
        console.log(this.state);

        let style = {
            background: 'lightgray'
        };
           let fontStyle = {
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400
        };

        return (
            <div className='user-page'>
                <div className="container">
                </div>
                    <section id="info-body">
                    <div className="container">
                    <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div className="card" style={style}>
                    <div className="card-header" style={{background: 'rgba(226, 62, 62, 1)'}}>
                        <h3 style={fontStyle}>User Info</h3>
                    </div>

                    <div className="card-body">

                        <div className="form-group">
                            <label style={fontStyle}>
                                Email:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('email', e.target.value)} type='email' className='info-input' value={email} />
                        </div>
                        <div className="form-group">
                            <label style={fontStyle}>
                                First Name:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('first_name', e.target.value)} type='text' className='info-input' value={first_name} />
                        </div>
                        <div className="form-group">
                            <label style={fontStyle}>
                                Last Name:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('last_name', e.target.value)} type='text' className='info-input' value={last_name} />
                        </div>
                        <div className="form-group">
                            <label style={fontStyle}>
                                User Name:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('user_name', e.target.value)} type='text' className='info-input' value={user_name} />
                        </div>
                        <div className="form-group">
                            <label style={fontStyle}>
                                Sex:
                            </label>
                            <select onChange={(e) => this.universalChangeHandler('sex', e.target.value)} name="sex" id="sex">
                                <option defaultValue="Male / Female" selected={true}> Male / Female </option>
                                <option value={sex}> Male </option>
                                <option value={sex}> Female </option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label style={fontStyle}>
                                Profile Picture:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('profile_picture', e.target.value)} type='text' className='info-input' value={profile_picture} />
                        </div>
                        <div className='info-button'>
                            <button onClick={() => this.updateInfo()} className='update-info' style={fontStyle}> Submit </button>
                        </div>
                    </div> 
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
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