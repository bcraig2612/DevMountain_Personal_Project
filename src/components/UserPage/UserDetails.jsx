import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserProfile,
         insertHeight,
         insertWeight,
         insertBMI,
         insertBodyFatPercentage,
         insertNeckMeasurement,
         insertShoulderMeasurement,
         insertUpperArmsMeasurement,
         insertChestMeasurement,
         insertWaistMeasurement,
         insertThighsMeasurement,
         insertCalvesMeasurement,
         insertDeadliftMax,
         insertSquatMax,
         insertBenchPressMax } from '../../redux/user_profile';
import './Styles/UserDetails.scss';

export class UserDetails extends Component {
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
        this.updateDetails = this.updateDetails.bind(this);
        this.getUser = this.getUser.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }

    componentDidMount() {
        this.userSession();
    }

    userSession() {
        axios.get("/auth/user_session").then(res => {
            this.props.getUser(res.data);
        });
    }

    getUser() {
        axios.get('/api/get_user/:user_id').then(res => {
            console.log(res.data)
            this.props.user_id(res.data)
        })
        console.log(this.props)
    }

    updateDetails() {
        const {
            height,
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
            axios.post('/api/update_user_details/:user_id', {
                height: height,
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
                    this.props.setUserProfile(res.data);
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
            height,
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
            deadlift_max } = this.props;
        console.log(this.props);
        return (
            <div className='details'>
            <div> 
                <h1> Fitness Maestro </h1> 
            </div>                   
            <div id='details-card'>       
                <div>
                    <h2> User Details </h2>
                </div>                  
                <div>
                    Height:
                    <input onChange={(e) => insertHeight('height', e.target.value)} type='text' className='details-input' value={height} />
                </div>                               
                <div>
                    Weight:
                    <input onChange={(e) => insertWeight('weight', e.target.value)} type='text' className='details-input' value={weight} />
                </div>                               
                <div>
                    BMI:
                    <input onChange={(e) => insertBMI('bmi', e.target.value)} type='text' className='details-input' value={bmi} />
                </div>
                <div>
                    Body Fat Percentage:
                    <input onChange={(e) => insertBodyFatPercentage('body_fat_percentage', e.target.value)} type='text' className='details-input' value={body_fat_percentage} />
                </div>                              
                <div>
                    Neck Measurement:
                    <input onChange={(e) => insertNeckMeasurement('neck_measurement', e.target.value)} type='text' className='details-input' value={neck_measurement} />
                </div>                 
                <div>
                    Shoulder Measurement:
                    <input onChange={(e) => insertShoulderMeasurement('shoulder_measurement', e.target.value)} type='text' className='details-input' value={shoulder_measurement} />
                </div>
                <div>
                    Upper Arms Measurement:
                    <input onChange={(e) => insertUpperArmsMeasurement('upper_arms_measurement', e.target.value)} type='text' className='details-input' value={upper_arms_measurement} />
                </div>                               
                <div>
                    Chest Measurement:
                    <input onChange={(e) => insertChestMeasurement('chest_measurement', e.target.value)} type='text' className='details-input' value={chest_measurement} />
                </div>                               
                <div>
                    Waist Measurement:
                    <input onChange={(e) => insertWaistMeasurement('waist_measurement', e.target.value)} type='text' className='details-input' value={waist_measurement} />
                </div>
                <div>
                    Thighs Measurement:
                    <input onChange={(e) => insertThighsMeasurement('thighs_measurement', e.target.value)} type='text' className='details-input' value={thighs_measurement} />
                </div>                              
                <div>
                    Calves Measurement:
                    <input onChange={(e) => insertCalvesMeasurement('calves_measurement', e.target.value)} type='text' className='details-input' value={calves_measurement} />
                </div>                 
                <div>
                    Bench Press Max:
                    <input onChange={(e) => insertBenchPressMax('bench_press_max', e.target.value)} type='text' className='details-input' value={bench_press_max} />
                </div>           
                <div>
                    Squat Max:
                    <input onChange={(e) => insertSquatMax('squat_max', e.target.value)} type='text' className='details-input' value={squat_max} />
                </div>           
                <div>
                    Deadlift Max:
                    <input onChange={(e) => insertDeadliftMax('deadlift_max', e.target.value)} type='text' className='details-input' value={deadlift_max} />
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
        height: state.height,
        weight: state.weight, 
        bmi: state.bmi,
        body_fat_percentage: state.body_fat_percentage,
        neck_measurement: state.neck_measurement,
        shoulder_measurement: state.shoulder_measurement,
        upper_arms_measurement: state.upper_arms_measurement,
        chest_measurement: state.chest_measurement,
        waist_measurement: state.waist_measurement,
        thighs_measurement: state.thighs_measurement,
        calves_measurement: state.calves_measurement,
        bench_press_max: state.bench_press_max,
        squat_max: state.squat_max,
        deadlift_max: state.deadlift_max
    }
}

const mapDispatchToProps = {
    setUserProfile: setUserProfile,
    insertHeight: insertHeight,
    insertWeight: insertWeight,
    insertBMI: insertBMI,
    insertBodyFatPercentage: insertBodyFatPercentage,
    insertNeckMeasurement: insertNeckMeasurement,
    insertShoulderMeasurement: insertShoulderMeasurement,
    insertUpperArmsMeasurement: insertUpperArmsMeasurement,
    insertChestMeasurement: insertChestMeasurement,
    insertWaistMeasurement: insertWaistMeasurement,
    insertThighsMeasurement: insertThighsMeasurement,
    insertCalvesMeasurement: insertCalvesMeasurement,
    insertDeadliftMax: insertDeadliftMax,
    insertSquatMax: insertSquatMax,
    insertBenchPressMax: insertBenchPressMax
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);