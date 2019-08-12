import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { height,
         weight,
         bmi,
         body_fat_percentage,
         neck_measurement,
         shoulder_measurement,
         upper_arms_measurement,
         chest_measurement,
         waist_measurement,
         thighs_measurement,
         calves_measurement,
         bench_press_max,
         squat_max,
         deadlift_max } from '../../redux/user_profile';
import './Styles/UserPage.scss';

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null,
            weight: null,
            bmi: null,
            body_fat_percentage: null,
            neck_measurement: null,
            shoulder_measurement: null,
            upper_arms_measurement: null,
            chest_measurement: null,
            waist_measurement: null,
            thighs_measurement: null,
            calves_measurement: null,
            bench_press_max: null,
            squat_max: null,
            deadlift_max: null
        };

        this.userSession = this.userSession.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.userSession();
    }

    // userSession() {
    //     axios.get("/auth/user_session").then(res => {
        
    //     });
    //   }

      logout() {
        axios.get(`/auth/logout`).then(res => {
          this.props.history.push("/");
        });
      }  

    render() {
        console.log(this.props);
        return (
            <div>
                <h1> User Page </h1>
            </div>
        )
    }
}
