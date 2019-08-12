import React, { Component } from 'react'
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import  BMICalculator  from './BMICalculator';
// import UserRoutine from './UserRoutine';

export default class ProfilePage extends Component {
    render() {
        return (
            <div className="container">
                <UserDetails/>
                <UserInfo/>
                <BMICalculator />
            </div>
        )
    }
}
