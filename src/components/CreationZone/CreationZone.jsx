import React, {Component} from 'react';
import './Styles/CreationZone.scss';

import DefaultRoutine from './DefaultRoutine';
import DefaultWorkout from './DefaultWorkout';

class CreationZone extends Component {
    render() {
        return (
            <div className='routine_creator_page'>
                <h1> Creation Zone </h1>
                <DefaultRoutine />
                {/* <DefaultWorkout /> */}
            </div>
        );
    }
}

export default CreationZone;