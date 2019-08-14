import React, { Component } from 'react'
import './Styles/DefaultRoutine.scss';

import { Link } from 'react-router-dom';

export default class DefaultRoutine extends Component {
    render() {
        // let routines = this.state.defaultRoutines;
        return (
            <div className="container">
                {this.props.routines.map((routine) => (
                    <div className="card" key={routine.default_routine_id} style={{ marginBottom: "8px" }}>
                        <Link to={`/workout/${routine.default_routine_id}`}><h2 className="card-header">{routine.routine_name}</h2></Link>
                        <div className="card-body">
                            <p>{routine.day}</p>
                            <p>{routine.muscle_groups}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
