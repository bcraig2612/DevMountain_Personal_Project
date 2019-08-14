import React, {Component} from 'react';
import './Styles/CreationZone.scss';

import DefaultRoutine from './DefaultRoutine';
import axios from 'axios';

class CreationZone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultRoutines: []
        }
    }

    componentDidMount() {
        axios.get('/api/get_routines').then(res => {
            console.log(res.data)
            this.setState({defaultRoutines: res.data});
            console.log(this.state.defaultRoutines);
        });
    }
    render() {
        let routines = this.state.defaultRoutines;
        return (
            <div className='routine_creator_page'>
                <h1> Creation Zone </h1>
                <DefaultRoutine routines={routines} />
            </div>
        );
    }
}

export default CreationZone;