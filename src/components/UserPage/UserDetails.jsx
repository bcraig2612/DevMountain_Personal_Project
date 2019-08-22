import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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

        let style = {
            background: 'lightgray'
        };

        let fontStyle = {
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '18px',
            fontWeight: 500
        };
        let buttonFontStyle = {
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '18px',
            fontWeight: 600
        };
        let titleFontStyle = {
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 600, 
            fontSize: '36px'
        };
 
        return (
            <div className='user-page'>
                <div className="container">
                </div>
                    <section id="details-body">
                    <div className="container">
                    <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div className="card" style={style}>
                    <div className="card-header">
                        <h3 style={titleFontStyle}>User Details</h3>
                    </div>
                   
                    <div className="card-body">

                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Height Feet:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('height_feet', e.target.value)} type='number' className='details-input' value={height_feet} />
                        </div>

                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Height Inches:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('height_inches', e.target.value)} type='number' className='details-input' value={height_inches} />
                        </div>
                    
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Weight:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('weight', e.target.value)} type='number' className='details-input' value={weight} />
                        </div>
                    
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                BMI:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('bmi', e.target.value)} type='number' className='details-input' value={bmi} />
                        </div>
                    
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Body Fat Percentage:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('body_fat_percentage', e.target.value)} type='number' className='details-input' value={body_fat_percentage} />
                        </div>
                  
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Bench Press Max:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('bench_press_max', e.target.value)} type='number' className='details-input' value={bench_press_max} />
                        </div>
                
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Squat Max:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('squat_max', e.target.value)} type='number' className='details-input' value={squat_max} />
                        </div>
                  
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Deadlift Max:
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('deadlift_max', e.target.value)} type='number' className='details-input' value={deadlift_max} />
                        </div>     
                    </div> 
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>



              <div className='user-page'>
                <div className="container">
                </div>
                    <section id="details-body">
                    <div className="container">
                    <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div className="card" style={style}>
                    <div className="card-header">
                        <h3 style={titleFontStyle}>User Measurements</h3>
                    </div>
                   
                    <div className="card-body">

                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Neck: 
                            </label>
                            <input onChange={(e) => this.universalChangeHandler('neck_measurement', e.target.value)} type='number' className='details-input' value={neck_measurement} />
                        </div>
                    
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Shoulders:
                            </label>
                        <input onChange={(e) => this.universalChangeHandler('shoulders_measurement', e.target.value)} type='number' className='details-input' value={shoulder_measurement} />
                        </div>
                  
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Biceps:
                            </label>
                        <input onChange={(e) => this.universalChangeHandler('upper_arms_measurement', e.target.value)} type='number' className='details-input' value={upper_arms_measurement} />
                        </div>
                 
                        <div className="form-group-small">
                            <label style={fontStyle}>
                                Chest:
                            </label>
                        <input onChange={(e) => this.universalChangeHandler('chest_measurement', e.target.value)} type='number' className='details-input' value={chest_measurement} />
                        </div>
                   
                    <div className="form-group-small">
                            <label style={fontStyle}>
                                Waist:
                            </label>
                        <input onChange={(e) => this.universalChangeHandler('waist_measurement', e.target.value)} type='number' className='details-input' value={waist_measurement} />
                        </div>
                  
                    <div className="form-group-small">
                            <label style={fontStyle}>
                                Thighs:
                            </label>
                        <input onChange={(e) => this.universalChangeHandler('thighs_measurement', e.target.value)} type='number' className='details-input' value={thighs_measurement} />
                        </div>
                
                    <div className="form-group-small">
                            <label style={fontStyle}>
                                Calves:
                            </label>
                        <input onChange={(e) => this.universalChangeHandler('calves_measurement', e.target.value)} type='number' className='details-input' value={calves_measurement} />
                        </div>   
                         <div className='details-button'>
                            <button onClick={() => this.updateDetails()} className='update-details' style={buttonFontStyle}> Submit </button> 
                        </div>           
                    </div> 
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
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