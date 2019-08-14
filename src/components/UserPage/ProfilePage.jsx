import React, { Component } from 'react'
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import  BMICalculator  from './BMICalculator';
import './Styles/ProfilePage.css';

export default class ProfilePage extends Component {

    render() {
        let styles = {
            background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
        }
        return (
            <div className="container" style={styles}>
                <UserInfo/>
                <UserDetails/>
                <BMICalculator />
            </div>
        )
    }
}
