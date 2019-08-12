import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserProfile } from '../../redux/user_register';
import './Styles/UserDetails.scss';

export class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.user
        };
        
        this.userSession = this.userSession.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.getUser = this.getUser.bind(this);
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

    updateDetails() {
        let user_id = this.props.user.user_id;
        const {
            height_feet,
            height_inches,
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
            deadlift_max } = this.state;
            axios.patch(`/api/update_user_details/${user_id}`, {
                height_feet: height_feet,
                height_inches: height_inches,
                weight: weight,
                bmi: bmi,
                body_fat_percentage: body_fat_percentage,
                neck_measurement: neck_measurement,
                shoulder_measurement: shoulder_measurement,
                upper_arms_measurement: upper_arms_measurement,
                chest_measurement: chest_measurement,
                waist_measurement: waist_measurement,
                thighs_measurement: thighs_measurement,
                calves_measurement: calves_measurement,
                bench_press_max: bench_press_max,
                squat_max: squat_max,
                deadlift_max: deadlift_max })
                .then( res => {
                    this.props.setUserProfile(res.data[0]);
                    // window.reload();
                })
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const {
            height_feet,
            height_inches,
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
            deadlift_max } = this.state;
        console.log(this.props);
        console.log(this.state);
        return (
            <div className='details'>
            <div> 
                <h1> Fitness Maestro </h1> 
            </div>                   
            <div id='details-card row'>       
                <div>
                    <h2> User Details </h2>
                </div>                  
                <div>
                    Height Feet:
                    <input onChange={(e) => this.universalChangeHandler('height_feet', e.target.value)} type='number' className='details-input' value={height_feet} />
                </div>                               
                <div>
                    Height Inches:
                    <input onChange={(e) => this.universalChangeHandler('height_inches', e.target.value)} type='number' className='details-input' value={height_inches} />
                </div>                               
                <div>
                    Weight:
                    <input onChange={(e) => this.universalChangeHandler('weight', e.target.value)} type='number' className='details-input' value={weight} />
                </div>                               
                <div>
                    BMI:
                    <input onChange={(e) => this.universalChangeHandler('bmi', e.target.value)} type='number' className='details-input' value={bmi} />
                </div>
                <div>
                    Body Fat Percentage:
                    <input onChange={(e) => this.universalChangeHandler('body_fat_percentage', e.target.value)} type='number' className='details-input' value={body_fat_percentage} />
                </div>                              
                <div>
                    Neck Measurement:
                    <input onChange={(e) => this.universalChangeHandler('neck_measurement', e.target.value)} type='number' className='details-input' value={neck_measurement} />
                </div>                 
                <div>
                    Shoulder Measurement:
                    <input onChange={(e) => this.universalChangeHandler('shoulder_measurement', e.target.value)} type='number' className='details-input' value={shoulder_measurement} />
                </div>
                <div>
                    Upper Arms Measurement:
                    <input onChange={(e) => this.universalChangeHandler('upper_arms_measurement', e.target.value)} type='number' className='details-input' value={upper_arms_measurement} />
                </div>                               
                <div>
                    Chest Measurement:
                    <input onChange={(e) => this.universalChangeHandler('chest_measurement', e.target.value)} type='number' className='details-input' value={chest_measurement} />
                </div>                               
                <div>
                    Waist Measurement:
                    <input onChange={(e) => this.universalChangeHandler('waist_measurement', e.target.value)} type='number' className='details-input' value={waist_measurement} />
                </div>
                <div>
                    Thighs Measurement:
                    <input onChange={(e) => this.universalChangeHandler('thighs_measurement', e.target.value)} type='number' className='details-input' value={thighs_measurement} />
                </div>                              
                <div>
                    Calves Measurement:
                    <input onChange={(e) => this.universalChangeHandler('calves_measurement', e.target.value)} type='number' className='details-input' value={calves_measurement} />
                </div>                 
                <div>
                    Bench Press Max:
                    <input onChange={(e) => this.universalChangeHandler('bench_press_max', e.target.value)} type='number' className='details-input' value={bench_press_max} />
                </div>           
                <div>
                    Squat Max:
                    <input onChange={(e) => this.universalChangeHandler('squat_max', e.target.value)} type='number' className='details-input' value={squat_max} />
                </div>           
                <div>
                    Deadlift Max:
                    <input onChange={(e) => this.universalChangeHandler('deadlift_max', e.target.value)} type='number' className='details-input' value={deadlift_max} />
                </div>           
                <div className='details-button'>
                    <Link to='/ProfilePage'><button onClick={() => this.updateDetails()} className='update-details'> Submit </button> </Link>
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
    setUserProfile: setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);