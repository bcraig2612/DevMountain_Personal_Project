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
        let styles = {
            background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
        }
        let routines = this.state.defaultRoutines;
        return (
            <div className='routine_creator_page' style={styles}>
                <DefaultRoutine routines={routines} />
            </div>
        );
    }
}

export default CreationZone;

