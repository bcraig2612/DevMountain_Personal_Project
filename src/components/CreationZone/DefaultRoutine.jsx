import React, { Component } from 'react'
import './Styles/DefaultRoutine.css';

import { Link } from 'react-router-dom';

export default class DefaultRoutine extends Component {
    render() {
        // let routines = this.state.defaultRoutines;
         let styles = {
                      background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
                }
        let style = {
            background: 'lightgray'
        };
        return (
            <div className="container" style={styles}>
                {this.props.routines.map((routine) => (
                    <div className="card" key={routine.default_routine_id} style={{ marginBottom: "8px" }}>
                        <Link to={`/workout/${routine.default_routine_id}`}><h3 className="card-header" style={{background: 'rgba(226,62,62,1)', color: 'black'}}>{routine.routine_name}</h3></Link>
                        <div className="card-body" style={style}>
                            <h5>{routine.day}</h5>
                            <h6>{routine.muscle_groups}</h6>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
