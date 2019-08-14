import React, { Component } from 'react'
import './Styles/DefaultWorkout.scss';

import axios from 'axios';

export default class DefaultWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultWorkouts: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params)
        axios.get(`/api/workout/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({defaultWorkouts: res.data});
            console.log(this.state.defaultWorkouts);
        });
    }    
    render() {
        let workout = this.state.defaultWorkouts;
        return (
            <div className="container">
                {workout.map((workout) => (
                    <div className="card" key={workout.default_workout_id} style={{ marginBottom: "8px" }}>
                        <div className="card">
                            <h3 className="card-header">{workout.workout_name}</h3>
                            <div className="card-body">
                                <section> <p>{workout.required_equipment}</p> </section>
                                <section> <p>{workout.how_to}</p> </section>
                                <section> <p>{workout.default_sets}</p> </section>
                                <section>   <p>{workout.default_reps}</p> </section>
                                <section>   <img src={workout.image_url} style={{width: "275px", height: "275px"}} />  </section>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}



