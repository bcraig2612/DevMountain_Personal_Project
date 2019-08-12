import React, { Component } from 'react'
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
// import UserRoutine from './UserRoutine';
// import  BMI  from './BMI';

export default class ProfilePage extends Component {
    render() {
        return (
            <div className="container">
                <UserDetails/>
                <UserInfo/>
                {/* <UserRoutine />
                <BMI /> */}
            </div>
        )
    }
}
